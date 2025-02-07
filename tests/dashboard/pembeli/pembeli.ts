import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

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
  async inputpembeli(pembeli_nama: string) {
    const pembeli_No_KTP = faker.string.numeric(16);
    const pembeli_alamat = faker.location.streetAddress();
    const pembeli_telpon = faker.phone.number({ style: "human" });

    await this.tambahPembeli.first().click();
    await this.page
      .locator("input#pembeli_No_KTP")
      .waitFor({ state: "visible" });
    await this.noKtpInput.fill(pembeli_No_KTP);
    await this.page.locator("input#pembeli_nama").waitFor({ state: "visible" });
    await this.namaInput.fill(pembeli_nama);
    await this.page
      .locator("input#pembeli_alamat")
      .waitFor({ state: "visible" });
    await this.alamatInput.fill(pembeli_alamat);
    await this.page
      .locator("input#pembeli_telpon")
      .waitFor({ state: "visible" });
    await this.telponInput.fill(pembeli_telpon);
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
  async editPembeli(pembeli_nama: string) {
    const pembeli_alamat = faker.location.streetAddress();

    await this.daftarPembeli.click();
    await this.editPembeliButton.click();

    await this.page.locator("input#pembeli_nama").waitFor({ state: "visible" });
    await this.namaInput.fill(pembeli_nama);
    await this.page
      .locator("input#pembeli_alamat")
      .waitFor({ state: "visible" });
    await this.alamatInput.fill(pembeli_alamat);
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
