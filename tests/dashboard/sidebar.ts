import { expect, type Locator, type Page } from "@playwright/test";
import { exec } from "child_process";

export class PlaywrightSidebarPage {
  readonly page: Page;
  readonly goToMotor: Locator;
  readonly goToPembeli: Locator;
  readonly goToEditPembeli: Locator;
  readonly buttonSimpanPembeli: Locator;
  readonly buttonKembaliSimpanPembeli: Locator;
  readonly goToLihatPembeli: Locator;
  readonly buttonLihatPembeli: Locator;
  readonly buttonKembaliLihatPembeli: Locator;
  readonly goToBeliCash: Locator;
  readonly goToEditBeliCash: Locator;
  readonly buttonSimpanBeliCash: Locator;
  readonly DaftarBeliCash: Locator;
  readonly goToKreditPaket: Locator;
  readonly goToBeliKredit: Locator;
  readonly goToEditBeliKredit: Locator;
  readonly buttonSimpanBeliKredit: Locator;
  readonly DaftarBeliKredit: Locator;
  readonly buttonLihatBeliKredit: Locator;
  readonly goToBayarCicilan: Locator;
  readonly goToKontak: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToMotor = page.locator("a", { hasText: "Motor" });

    this.goToPembeli = page.locator("a", { hasText: "Pembeli" });
    this.goToEditPembeli = page
      .getByRole("row", { name: "1234567890123456 Adilla" })
      .locator("#editpembeli");
    this.buttonSimpanPembeli = page.locator("button", { hasText: "Simpan" });
    this.buttonKembaliSimpanPembeli = page.locator("h1", {
      hasText: "Daftar Pembeli",
    });
    this.goToLihatPembeli = page
      .getByRole("row", { name: "1234567890123456 Adilla Baros" })
      .locator("#lihatpembeli");
    this.buttonLihatPembeli = page.locator("button", { hasText: "Kembali" });
    this.buttonKembaliLihatPembeli = page.locator("h1", {
      hasText: "Daftar Pembeli",
    });

    this.goToBeliCash = page.locator("a", {
      hasText: "Beli Cash",
    });
    this.goToEditBeliCash = page
      .getByRole("row", { name: "C001 Renataa Beat 2025-01-07" })
      .locator("#editbelicash");
    this.buttonSimpanBeliCash = page.locator("button", { hasText: "Simpan" });
    this.DaftarBeliCash = page.locator("h1", {
      hasText: "Daftar Transaksi Cash",
    });

    this.goToKreditPaket = page.locator("a", { hasText: "Kredit Paket" });
    this.goToBeliKredit = page.locator("a", { hasText: "Beli Kredit" });
    this.buttonSimpanBeliKredit = page.locator("button", { hasText: "Simpan" });
    this.goToEditBeliKredit = page
      .getByRole("row", { name: "K001 Budi Santoso Scoppy -" })
      .locator("#editbelikredit");
    this.buttonLihatBeliKredit = page
      .getByRole("row", { name: "K001 Budi Santoso Scoppy -" })
      .locator("#lihatbelikredit");
    this.DaftarBeliKredit = page.locator("h1", {
      hasText: "Daftar Transaksi Kredit",
    });

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
    await expect(this.buttonSimpanPembeli).toBeVisible();
    await this.buttonSimpanPembeli.click();
    await expect(this.buttonKembaliSimpanPembeli).toBeVisible();
    await this.buttonKembaliSimpanPembeli.click();
  }

  async cekLihatPembeli() {
    await expect(this.goToLihatPembeli).toBeVisible();
    await this.goToLihatPembeli.click();
    await expect(this.buttonLihatPembeli).toBeVisible();
    await this.buttonLihatPembeli.click();
    await expect(this.buttonKembaliSimpanPembeli).toBeVisible();
  }

  async cekBeliCash() {
    await expect(this.goToBeliCash).toBeVisible();
    await this.goToBeliCash.click();
  }

  async cekEditBeliCash() {
    await expect(this.buttonSimpanBeliCash).toBeVisible();
    await this.buttonSimpanBeliCash.click();
    await expect(this.DaftarBeliCash).toBeVisible();
    await this.DaftarBeliCash.click();
    await expect(this.goToEditBeliCash).toBeVisible();
    await this.goToEditBeliCash.click();
    await expect(this.buttonSimpanBeliCash).toBeVisible();
    await this.buttonSimpanBeliCash.click();
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
    await expect(this.buttonSimpanBeliKredit).toBeVisible();
    await this.buttonSimpanBeliKredit.click();
    await expect(this.DaftarBeliKredit).toBeVisible();
    await this.DaftarBeliKredit.click();
  }

  async cekLihatBeliKredit() {
    await expect(this.buttonLihatBeliKredit).toBeVisible();
    await this.buttonLihatBeliKredit.click();
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
