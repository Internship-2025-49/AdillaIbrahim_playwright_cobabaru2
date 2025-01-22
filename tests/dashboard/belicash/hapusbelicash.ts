import { expect, Locator, type Page } from "@playwright/test";

export class PlaywrightHapusBeliCashPage {
  readonly page: Page;
  readonly HapusBeliCashButton: Locator;
  readonly BeliCashHeader: Locator;
  readonly KonfirmasiHapusButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HapusBeliCashButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .first();
    this.BeliCashHeader = page.locator("h1", {
      hasText: "Daftar Transaksi Cash",
    });
    this.KonfirmasiHapusButton = page.getByRole("button", {
      name: "Ya, Hapus!",
    });
  }

  async hapusBeliCash() {
    await this.HapusBeliCashButton.click();
    await this.KonfirmasiHapusButton.click();
    await expect(this.BeliCashHeader).toBeVisible();
  }
}
