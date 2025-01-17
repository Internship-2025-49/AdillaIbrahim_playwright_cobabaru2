import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightDashboardPage {
  readonly page: Page;
  readonly cekHeader: Locator;
  readonly cekMotor: Locator;
  readonly cekPembeli: Locator;
  readonly cekBeliCash: Locator;
  readonly cekKreditPaket: Locator;
  readonly cekBeliKredit: Locator;
  readonly cekBayarCicilan: Locator;
  readonly cekKontak: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cekHeader = page.locator("h1", { hasText: "Dashboard" });
    this.cekMotor = page.locator("h1", { hasText: "Daftar Motor" });
    this.cekPembeli = page.locator("h1", { hasText: " Daftar Pembeli" });
    this.cekBeliCash = page.locator("h1", {
      hasText: " Daftar Transaksi Cash",
    });
    this.cekKreditPaket = page.locator("h1", {
      hasText: "Daftar Paket Kredit",
    });
    this.cekBeliKredit = page.locator("h1", {
      hasText: " Daftar Transaksi Kredit",
    });
    this.cekBayarCicilan = page.locator("h1", {
      hasText: "Daftar Pembayaran Cicilan",
    });
    this.cekKontak = page.locator("h1", { hasText: "Kontak Help & Info" });
  }

  async cekDashboard() {
    await expect(this.cekHeader).toBeVisible();
  }
}
