import { expect, Locator, type Page } from "@playwright/test";

export class PlaywrightHapusBeliKreditPage {
  readonly page: Page;
  readonly HapusBeliKreditButton: Locator;
  readonly BeliKreditHeader: Locator;
  readonly KonfirmasiHapusButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HapusBeliKreditButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .last();
    this.BeliKreditHeader = page.locator("h1", {
      hasText: "Daftar Transaksi Kredit",
    });
    this.KonfirmasiHapusButton = page.getByRole("button", {
      name: "Ya, Hapus!",
    });
  }

  async hapusBeliKredit() {
    await this.HapusBeliKreditButton.click();
    await this.KonfirmasiHapusButton.click();
    await expect(this.BeliKreditHeader).toBeVisible();
  }
}
