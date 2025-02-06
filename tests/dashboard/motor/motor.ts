import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export class PlaywrightMotorPage {
  readonly page: Page;
  readonly daftarMotor: Locator;
  readonly tambahMotor: Locator;
  readonly motorKodeInput: Locator;
  readonly motorMerkInput: Locator;
  readonly motorTypeInput: Locator;
  readonly motorWarnaInput: Locator;
  readonly motorHargaInput: Locator;
  readonly motorGambar: Locator;
  readonly editMotorButton: Locator;
  readonly motorMerkEdit: Locator;
  readonly motorTypeEdit: Locator;
  readonly HapusMotorButton: Locator;
  readonly KonfirmasiHapusMotorButton: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.daftarMotor = page.locator("h1", { hasText: "Daftar Motor" });
    this.tambahMotor = page.locator("a", { hasText: "Tambah Motor" });
    this.motorKodeInput = page.locator("input#motor_kode");
    this.motorMerkInput = page.locator("input#motor_merk");
    this.motorTypeInput = page.locator("input#motor_type");
    this.motorWarnaInput = page.locator("input#motor_warna_pilihan");
    this.motorHargaInput = page.locator("input#motor_harga");
    this.motorGambar = page.locator("input#motor_gambar");

    this.editMotorButton = page.getByRole("row").locator("#editmotor").first();
    this.motorMerkEdit = page.locator("input#motor_merk");
    this.motorTypeEdit = page.locator("input#motor_type");

    this.HapusMotorButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .first();
    this.KonfirmasiHapusMotorButton = page.getByRole("button", {
      name: "Ya, Hapus!",
    });

    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  async fotoMotor(url: string, filePath: string) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFileSync(filePath, buffer);
  }

  //INPUT MOTOR
  async inputMotor(
    motor_merk: string,
    motor_type: string,
    motor_warna_pilihan: string,
    motor_harga: string
  ) {
    const motor_kode = faker.string.numeric(4);
    const avatarUrl = faker.image.avatar();
    const filePath = path.resolve(__dirname, "temp_avatar.jpg");
    await this.fotoMotor(avatarUrl, filePath);

    await this.tambahMotor.first().click();
    await this.page.locator("input#motor_kode").waitFor({ state: "visible" });
    await this.motorKodeInput.fill(motor_kode);
    await this.page.locator("input#motor_merk").waitFor({ state: "visible" });
    await this.motorMerkInput.fill(motor_merk);
    await this.page.locator("input#motor_type").waitFor({ state: "visible" });
    await this.motorTypeInput.fill(motor_type);
    await this.page
      .locator("input#motor_warna_pilihan")
      .waitFor({ state: "visible" });
    await this.motorWarnaInput.fill(motor_warna_pilihan);
    await this.page.locator("input#motor_harga").waitFor({ state: "visible" });
    await this.motorHargaInput.fill(motor_harga);

    await this.motorGambar.setInputFiles(filePath);
  }

  async submitFormMotor() {
    await this.simpanButton.click();
  }

  async MemastikanMotorMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Motor" })
    ).toBeVisible();
  }

  async editMotor(motor_merk: string, motor_type: string) {
    await this.editMotorButton.click();

    await this.page.locator("input#motor_merk").waitFor({ state: "visible" });
    await this.motorMerkInput.fill(motor_merk);
    await this.page.locator("input#motor_type").waitFor({ state: "visible" });
    await this.motorTypeInput.fill(motor_type);
  }

  async submitEditMotor() {
    await this.simpanButton.click();
  }

  async MemastikanEditMotorMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Motor" })
    ).toBeVisible();
  }
  //HAPUS MOTOR
  async hapusMotor() {
    await this.HapusMotorButton.click();
    await this.KonfirmasiHapusMotorButton.click();
    await expect(this.daftarMotor).toBeVisible();
  }
}
