import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightBeliCashEditPage {
  readonly page: Page;
  readonly goToBeliCash: Locator;
  readonly daftarTransaksiCash: Locator;
  readonly editBeliCashButton: Locator;
  readonly tambahTransaksiCash: Locator;
  readonly motorDropdown: Locator;
  readonly pembeliDropdown: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToBeliCash = page.locator("a", { hasText: "Beli Cash" });
    this.daftarTransaksiCash = page.locator("h1", {
      hasText: "Daftar Transaksi Cash",
    });
    this.editBeliCashButton = page
      .getByRole("row")
      .locator("#editbelicash")
      .first();
    this.tambahTransaksiCash = page.locator("h1", {
      hasText: "Tambah Transaksi Cash",
    });
    this.motorDropdown = page.locator("select#motor_kode");
    this.pembeliDropdown = page.locator("select#pembeli_No_KTP");
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  async editbelicash(motor_kode: string, pembeli_No_KTP: string) {
    await this.goToBeliCash.click();
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Cash" })
    ).toBeVisible();
    await this.editBeliCashButton.click();
    await this.page.locator("select#motor_kode").waitFor({ state: "visible" });
    await this.motorDropdown.selectOption({ label: motor_kode });
    await this.page
      .locator("select#pembeli_No_KTP")
      .waitFor({ state: "visible" });
    await this.pembeliDropdown.selectOption({ label: pembeli_No_KTP });
  }

  async submitFormEditBeliCash() {
    await this.simpanButton.click();
  }

  async MemastikanEditBeliCashMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Cash" })
    ).toBeVisible();
  }
}
