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
    this.lihatButton = page.locator("input#lihat_belikredit");
    this.kembaliButton = page.locator("a", { hasText: "Kembali" });
  }

  async goToLihatPembeli() {
    await expect(this.headerBeliKredit).toBeVisible();
    await this.lihatButton.click();
    await expect(
      this.page.locator("h1", { hasText: "Lihat Pembeli" })
    ).toBeVisible();
    await this.kembaliButton.click();
  }
}
