import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightDashboardPage {
  readonly page: Page;
  readonly cekHeader: Locator;
  readonly cekDashboardPenjualan: Locator;
  readonly cekMotor: Locator;
  readonly cekPembeli: Locator;
  readonly cekBeliCash: Locator;
  readonly cekKreditPaket: Locator;
  readonly cekBeliKredit: Locator;
  readonly cekBayarCicilan: Locator;
  readonly cekRoles: Locator;
  readonly cekUser: Locator;
  readonly cekKontak: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cekHeader = page.locator("h1", { hasText: "Dashboard" });
    this.cekDashboardPenjualan = page.locator("h1", {
      hasText: "Dashboard Penjualan",
    });
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
    this.cekRoles = page.locator("h1", { hasText: "Daftar Role" });
    this.cekUser = page.locator("h1", { hasText: " Daftar Pengguna" });
    this.cekKontak = page.locator("h1", { hasText: "Kontak Help & Info" });
  }

  async cekTitle() {
    await expect(this.cekHeader).toBeVisible();
  }

  async cekkontenPenjualan() {
    await expect(this.cekDashboardPenjualan).toBeVisible();
  }

  async cekKontenMotor() {
    await expect(this.cekMotor).toBeVisible();
  }

  async cekKontenPembeli() {
    await expect(this.cekPembeli).toBeVisible();
  }

  async cekKontenBeliCash() {
    await expect(this.cekBeliCash).toBeVisible();
  }

  async cekKontenKreditPaket() {
    await expect(this.cekKreditPaket).toBeVisible();
  }

  async cekKontenBeliKredit() {
    await expect(this.cekBeliKredit).toBeVisible();
  }

  async cekKontenBayarCicilan() {
    await expect(this.cekBayarCicilan).toBeVisible();
  }

  async cekKontenRoles() {
    await expect(this.cekRoles).toBeVisible();
  }

  async cekKontenUser() {
    await expect(this.cekUser).toBeVisible();
  }

  async cekKontenKontak() {
    await expect(this.cekKontak).toBeVisible();
  }
}
