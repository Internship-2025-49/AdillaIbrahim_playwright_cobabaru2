import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightLihatPembeliPage {
  readonly page: Page;
  readonly headerPembeli: Locator;
  readonly lihatButton: Locator;
  readonly kembaliButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerPembeli = page.locator("h1", { hasText: "Daftar Pembeli" });
    this.lihatButton = page.locator("input#lihat_pembeli");
    this.kembaliButton = page.locator("a", { hasText: "Kembali" });
  }

  async goToLihatPembeli() {
    await expect(this.headerPembeli).toBeVisible();
    await this.lihatButton.click();
    await expect(
      this.page.locator("h1", { hasText: "Lihat Pembeli" })
    ).toBeVisible();
    await this.kembaliButton.click();
  }
}
