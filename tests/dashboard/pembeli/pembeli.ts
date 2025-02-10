import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";
import { FormPembeli } from "../type/type";

export class PlaywrightPembeliPage {
  readonly page: Page;
  readonly daftarPembeli: Locator;
  readonly tambahPembeli: Locator;
  readonly noKtpInput: Locator;
  readonly namaInput: Locator;
  readonly alamatInput: Locator;
  readonly telponInput: Locator;

  readonly editPembeliButton: Locator;
  readonly editnamaInput: Locator;
  readonly editalamatInput: Locator;

  readonly lihatButton: Locator;
  readonly kembaliButton: Locator;
  readonly simpanButton: Locator;

  readonly HapusPembeliButton: Locator;
  readonly KonfirmasiHapusButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.daftarPembeli = page.locator("h1", { hasText: "Daftar Pembeli" });
    this.tambahPembeli = page.locator("a", { hasText: "Tambah Pembeli" });
    this.noKtpInput = page.locator("input#pembeli_No_KTP");
    this.namaInput = page.locator("input#pembeli_nama");
    this.alamatInput = page.locator("input#pembeli_alamat");
    this.telponInput = page.locator("input#pembeli_telpon");

    this.editPembeliButton = page
      .getByRole("row")
      .locator("#editpembeli")
      .first();
    this.editnamaInput = page.locator("input#pembeli_nama");
    this.editalamatInput = page.locator("input#pembeli_alamat");

    this.lihatButton = page.locator("a", { hasText: "Lihat" });
    this.kembaliButton = page.locator("button", { hasText: "Kembali" });

    this.simpanButton = page.locator("button", { hasText: "Simpan" });

    this.HapusPembeliButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .first();
    this.KonfirmasiHapusButton = page.getByRole("button", {
      name: "Ya, Hapus!",
    });
  }

  //INPUT PEMBELI
  async inputpembeli(InputPembeli: FormPembeli) {
    await this.tambahPembeli.first().click();
    await this.page
      .locator("input#pembeli_No_KTP")
      .waitFor({ state: "visible" });
    await this.noKtpInput.fill(InputPembeli.pembeli_No_KTP);
    await this.page.locator("input#pembeli_nama").waitFor({ state: "visible" });
    await this.namaInput.fill(InputPembeli.pembeli_nama);
    await this.page
      .locator("input#pembeli_alamat")
      .waitFor({ state: "visible" });
    await this.alamatInput.fill(InputPembeli.pembeli_alamat);
    await this.page
      .locator("input#pembeli_telpon")
      .waitFor({ state: "visible" });
    await this.telponInput.fill(InputPembeli.pembeli_telpon);
  }

  async submitFormPembeli() {
    await this.simpanButton.click();
  }

  async MemastikanPembeliMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Pembeli" })
    ).toBeVisible();
  }

  //EDIT PEMBELI
  async editPembeli(EditPembeli: FormPembeli) {
    await this.editPembeliButton.click();

    // await this.page
    //   .locator("input#pembeli_No_KTP")
    //   .waitFor({ state: "visible" });
    // await this.page
    //   .locator("input#pembeli_No_KTP")
    //   .evaluate((el) => el.removeAttribute("readonly"));
    // await this.noKtpInput.fill(EditPembeli.pembeli_No_KTP);
    await this.page.locator("input#pembeli_nama").waitFor({ state: "visible" });
    await this.namaInput.fill(EditPembeli.pembeli_nama);
    await this.page
      .locator("input#pembeli_alamat")
      .waitFor({ state: "visible" });
    await this.alamatInput.fill(EditPembeli.pembeli_alamat);
    await this.page
      .locator("input#pembeli_telpon")
      .waitFor({ state: "visible" });
    await this.telponInput.fill(EditPembeli.pembeli_telpon);
  }

  async submitFormEditPembeli() {
    await this.simpanButton.click();
  }

  async MemastikanEditPembeliMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Pembeli" })
    ).toBeVisible();
  }

  //LIHAT PEMBELI
  async goToLihatPembeli() {
    await this.lihatButton.first().click();
    await expect(
      this.page.locator("h1", { hasText: "Lihat Pembeli" })
    ).toBeVisible();
    await this.kembaliButton.click();
    await expect(this.daftarPembeli).toBeVisible();
  }

  //HAPUS PEMBELI
  async hapusPembeli() {
    await this.HapusPembeliButton.click();
    await this.KonfirmasiHapusButton.click();
    await expect(this.daftarPembeli).toBeVisible();
  }
}
