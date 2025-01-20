import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightBeliCashPage {
  readonly page: Page;
  readonly tambahTransaksiCash: Locator;
  readonly kodeTransaksiInput: Locator;
  readonly motorDropdown: Locator;
  readonly jumlahBayarInput: Locator;
  readonly pembeliDropdown: Locator;
  readonly tanggalInput: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tambahTransaksiCash = page.locator("h1", {
      hasText: "Tambah Transaksi Cash",
    });
    this.kodeTransaksiInput = page.locator("input#cash_kode");
    this.motorDropdown = page.locator("select#motor_kode");
    this.jumlahBayarInput = page.locator("input#cash_bayar");
    this.pembeliDropdown = page.locator("select#pembeli_No_KTP");
    this.tanggalInput = page.locator("input#cash_tanggal");
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  async inputbelicash(
    cash_kode: string,
    motor_kode: string,
    cash_bayar: string,
    pembeli_No_KTP: string,
    cash_tanggal: string
  ) {
    await this.page.locator("input#cash_kode").waitFor({ state: "visible" });
    await this.kodeTransaksiInput.fill(cash_kode);
    await this.page.locator("select#motor_kode").waitFor({ state: "visible" });
    await this.motorDropdown.selectOption({ label: motor_kode });

    await this.page.locator("input#cash_bayar").waitFor({ state: "visible" });
    await this.jumlahBayarInput.fill(cash_bayar);
    await this.page
      .locator("select#pembeli_No_KTP")
      .waitFor({ state: "visible" });
    await this.pembeliDropdown.selectOption({ label: pembeli_No_KTP });
    await this.page.locator("input#cash_tanggal").waitFor({ state: "visible" });
    await this.tanggalInput.fill(cash_tanggal);
  }

  async submitFormBeliCash() {
    await this.simpanButton.click();
  }

  async MemastikanBeliCashMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Cash" })
    ).toBeVisible();
  }
}
