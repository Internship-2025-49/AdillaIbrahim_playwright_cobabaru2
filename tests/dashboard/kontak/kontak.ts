import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightKontakPage {
  readonly page: Page;
  readonly goToKontak: Locator;
  readonly cekKontakPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToKontak = page.locator("a", { hasText: "Kontak" });
    this.cekKontakPage = page.locator("h1", { hasText: "Kontak Help & Info" });
  }

  async toKontakPage() {
    await this.goToKontak.click();
    await expect(this.cekKontakPage).toBeVisible();
  }
}
