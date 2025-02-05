import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightPenjualanPage {
  readonly page: Page;
  readonly goToPenjualan: Locator;
  readonly cekPenjualanPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToPenjualan = page.locator("a", { hasText: "Dashboard Penjualan" });
    this.cekPenjualanPage = page.locator("h1", {
      hasText: "Dashboard Penjualan",
    });
  }

  async toPenjualanPage() {
    await this.goToPenjualan.click();
    await expect(this.cekPenjualanPage).toBeVisible();
  }
}
