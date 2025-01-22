import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

export class PlaywrightPembeliEditPage {
  readonly page: Page;
  readonly goToPembeli: Locator;
  readonly daftarPembeli: Locator;
  readonly editPembeliButton: Locator;
  readonly tambahPembeli: Locator;
  readonly namaInput: Locator;
  readonly alamatInput: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToPembeli = page.locator("a", { hasText: "Pembeli" });
    this.daftarPembeli = page.locator("h1", { hasText: "Daftar Pembeli" });
    this.editPembeliButton = page
      .getByRole("row")
      .locator("#editpembeli")
      .first();
    this.tambahPembeli = page.locator("h1", { hasText: "Tambah Pembeli" });
    this.namaInput = page.locator("input#pembeli_nama");
    this.alamatInput = page.locator("input#pembeli_alamat");
    this.simpanButton = page.getByRole("button", { name: "Simpan" });
  }

  async editPembeli(pembeli_nama: string) {
    const pembeli_alamat = faker.location.streetAddress();

    await this.goToPembeli.click();
    await expect(
      this.page.locator("h1", { hasText: "Daftar Pembeli" })
    ).toBeVisible();

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
}
