import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightPembeliPage {
  readonly page: Page;
  readonly daftarPembeli: Locator;
  readonly editButton: Locator;
  readonly tambahPembeli: Locator;
  readonly noKtpInput: Locator;
  readonly namaInput: Locator;
  readonly alamatInput: Locator;
  readonly telponInput: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.daftarPembeli = page.locator("h1", { hasText: "Daftar Pembeli" });
    this.editButton = page.locator("button", { hasText: "Edit" });
    this.tambahPembeli = page.locator("h1", { hasText: "Tambah Pembeli" });
    this.noKtpInput = page.locator("input#pembeli_No_KTP");
    this.namaInput = page.locator("input#pembeli_nama");
    this.alamatInput = page.locator("input#pembeli_alamat");
    this.telponInput = page.locator("input#pembeli_telpon");
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  async inputpembeli(
    pembeli_No_KTP: string,
    pembeli_nama: string,
    pembeli_alamat: string,
    pembeli_telpon: string
  ) {
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
}
