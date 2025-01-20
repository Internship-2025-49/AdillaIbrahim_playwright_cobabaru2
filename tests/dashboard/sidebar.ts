import { expect, type Locator, type Page } from "@playwright/test";
import { exec } from "child_process";

export class PlaywrightSidebarPage {
  readonly page: Page;
  readonly goToMotor: Locator;
  readonly goToPembeli: Locator;
  readonly goToEditPembeli: Locator;
  readonly goToBeliCash: Locator;
  readonly goToEditBeliCash: Locator;
  readonly goToKreditPaket: Locator;
  readonly goToBeliKredit: Locator;
  readonly goToEditBeliKredit: Locator;
  readonly goToBayarCicilan: Locator;
  readonly goToKontak: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToMotor = page.locator("a", { hasText: "Motor" });
    this.goToPembeli = page.locator("a", { hasText: "Pembeli" });
    this.goToEditPembeli = page
      .getByRole("row", { name: "1234567890123456 Adilla" })
      .locator("#editpembeli");
    this.goToEditBeliCash = page
      .getByRole("row", { name: "C001 Budi Santoso Beat 2025-" })
      .locator("#editbelicash");
    this.goToBeliCash = page.locator("a", { hasText: "Beli Cash" });
    this.goToKreditPaket = page.locator("a", { hasText: "Kredit Paket" });
    this.goToBeliKredit = page.locator("a", { hasText: "Beli Kredit" });
    this.goToEditBeliKredit = page
      .getByRole("row", { name: "K001 Budi Santoso Scoppy -" })
      .locator("#editbelikredit");
    this.goToBayarCicilan = page.locator("a", { hasText: "Bayar Cicilan" });
    this.goToKontak = page.locator("a", { hasText: "Kontak" });
  }

  async cekMotor() {
    await expect(this.goToMotor).toBeVisible();
    await this.goToMotor.click();
  }

  async cekPembeli() {
    await expect(this.goToPembeli).toBeVisible();
    await this.goToPembeli.click();
  }

  async cekEditPembeli() {
    await expect(this.goToPembeli).toBeVisible();
    await this.goToPembeli.click();
    await expect(this.goToEditPembeli).toBeVisible();
    await this.goToEditPembeli.click();
  }

  async cekBeliCash() {
    await expect(this.goToBeliCash).toBeVisible();
    await this.goToBeliCash.click();
  }

  async cekEditBeliCash() {
    await expect(this.goToBeliCash).toBeVisible();
    await this.goToBeliCash.click();
    await expect(this.goToEditBeliCash).toBeVisible();
    await this.goToEditBeliCash.click();
  }

  async cekKreditPaket() {
    await expect(this.goToKreditPaket).toBeVisible();
    await this.goToKreditPaket.click();
  }

  async cekBeliKredit() {
    await expect(this.goToBeliKredit).toBeVisible();
    await this.goToBeliKredit.click();
  }

  async cekEditBeliKredit() {
    await expect(this.goToBeliKredit).toBeVisible();
    await this.goToBeliKredit.click();
    await expect(this.goToEditBeliKredit).toBeVisible();
    await this.goToEditBeliKredit.click();
  }

  async cekBayarCicilan() {
    await expect(this.goToBayarCicilan).toBeVisible();
    await this.goToBayarCicilan.click();
  }

  async cekKontak() {
    await expect(this.goToKontak).toBeVisible();
    await this.goToKontak.click();
  }
}
