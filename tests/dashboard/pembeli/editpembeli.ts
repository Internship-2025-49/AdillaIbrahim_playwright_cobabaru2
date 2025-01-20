import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightPembeliEditPage {
  readonly page: Page;
  readonly daftarPembeli: Locator;
  readonly editButton: Locator;
  readonly tambahPembeli: Locator;
  readonly namaInput: Locator;
  readonly alamatInput: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.daftarPembeli = page.locator("h1", { hasText: "Daftar Pembeli" });
    this.tambahPembeli = page.locator("h1", { hasText: "Tambah Pembeli" });
    this.namaInput = page.locator("input#pembeli_nama");
    this.alamatInput = page.locator("input#pembeli_alamat");
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  async editPembeli(pembeli_nama: string, pembeli_alamat: string) {
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
}
