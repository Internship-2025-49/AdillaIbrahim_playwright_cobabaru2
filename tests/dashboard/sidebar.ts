import { expect, type Locator, type Page } from "@playwright/test";
import { exec } from "child_process";

export class PlaywrightSidebarPage {
  readonly page: Page;
  readonly goToPenjualan: Locator;
  readonly goToMotor: Locator;
  readonly goToPembeli: Locator;
  readonly goToBeliCash: Locator;
  readonly goToKreditPaket: Locator;
  readonly goToBeliKredit: Locator;
  readonly goToBayarCicilan: Locator;
  readonly goToRole: Locator;
  readonly goToUser: Locator;
  readonly goToKontak: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToPenjualan = page.locator("a", { hasText: "Dashboard Penjualan" });
    this.goToMotor = page.locator("a", { hasText: "Motor" });
    this.goToPembeli = page.locator("a", { hasText: "Pembeli" });
    this.goToBeliCash = page.locator("a", {
      hasText: "Beli Cash",
    });
    this.goToKreditPaket = page.locator("a", { hasText: "Kredit Paket" });
    this.goToBeliKredit = page.locator("a", { hasText: "Beli Kredit" });
    this.goToBayarCicilan = page.locator("a", { hasText: "Bayar Cicilan" });
    this.goToRole = page.locator("a", { hasText: "Roles" });
    this.goToUser = page.locator("a", { hasText: "User" });
    this.goToKontak = page.locator("a", { hasText: "Kontak" });
  }

  async cekPenjualan() {
    await expect(this.goToPenjualan).toBeVisible();
    await this.goToPenjualan.click();
  }

  async cekMotor() {
    await expect(this.goToMotor).toBeVisible();
    await this.goToMotor.click();
  }

  async cekPembeli() {
    await expect(this.goToPembeli).toBeVisible();
    await this.goToPembeli.click();
  }

  async cekBeliCash() {
    await expect(this.goToBeliCash).toBeVisible();
    await this.goToBeliCash.click();
  }

  async cekKreditPaket() {
    await expect(this.goToKreditPaket).toBeVisible();
    await this.goToKreditPaket.click();
  }

  async cekBeliKredit() {
    await expect(this.goToBeliKredit).toBeVisible();
    await this.goToBeliKredit.click();
  }

  async cekBayarCicilan() {
    await expect(this.goToBayarCicilan).toBeVisible();
    await this.goToBayarCicilan.click();
  }

  async cekRoles() {
    await expect(this.goToRole).toBeVisible();
    await this.goToRole.click();
  }

  async cekUser() {
    await expect(this.goToUser).toBeVisible();
    await this.goToUser.click();
  }

  async cekKontak() {
    await expect(this.goToKontak).toBeVisible();
    await this.goToKontak.click();
  }
}
