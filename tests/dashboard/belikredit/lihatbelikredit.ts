import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightLihatBeliKreditPage {
  readonly page: Page;
  readonly headerBeliKredit: Locator;
  readonly lihatButton: Locator;
  readonly kembaliButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerBeliKredit = page.locator("h1", {
      hasText: "Daftar Transaksi Kredit",
    });
    this.lihatButton = page.locator("a", { hasText: "Lihat" });
    this.kembaliButton = page.locator("button", { hasText: "Kembali" });
  }

  async goToLihatBeliKredit() {
    await expect(this.headerBeliKredit).toBeVisible();
    await this.lihatButton.first().click();
    await expect(
      this.page.locator("h1", { hasText: "Lihat Beli Kredit" })
    ).toBeVisible();
    await this.kembaliButton.click();
    await expect(this.headerBeliKredit).toBeVisible();
  }
}
