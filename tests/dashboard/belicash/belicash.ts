import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

export class PlaywrightBeliCashPage {
  readonly page: Page;
  readonly goToBeliCash: Locator;
  readonly daftarTransaksiCash: Locator;

  readonly tambahTransaksiCash: Locator;
  readonly kodeTransaksiInput: Locator;
  readonly motorDropdown: Locator;
  readonly jumlahBayarInput: Locator;
  readonly pembeliDropdown: Locator;
  readonly tanggalInput: Locator;

  readonly editBeliCashButton: Locator;
  readonly editmotorDropdown: Locator;
  readonly editpembeliDropdown: Locator;
  readonly simpanButton: Locator;

  readonly HapusBeliCashButton: Locator;
  readonly KonfirmasiHapusButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToBeliCash = page.locator("a", { hasText: "Beli Cash" });
    this.daftarTransaksiCash = page.locator("h1", {
      hasText: "Daftar Transaksi Cash",
    });

    this.tambahTransaksiCash = page.locator("a", {
      hasText: "Tambah Transaksi Cash",
    });
    this.kodeTransaksiInput = page.locator("input#cash_kode");
    this.motorDropdown = page.locator("select#motor_kode");
    this.jumlahBayarInput = page.locator("input#cash_bayar");
    this.pembeliDropdown = page.locator("select#pembeli_No_KTP");
    this.tanggalInput = page.locator("input#cash_tanggal");

    this.editBeliCashButton = page
      .getByRole("row")
      .locator("#editbelicash")
      .first();
    this.tambahTransaksiCash = page.locator("a", {
      hasText: "Tambah Transaksi Cash",
    });
    this.editmotorDropdown = page.locator("select#motor_kode");
    this.editpembeliDropdown = page.locator("select#pembeli_No_KTP");

    this.simpanButton = page.locator("button", { hasText: "Simpan" });

    this.HapusBeliCashButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .first();
    this.KonfirmasiHapusButton = page.getByRole("button", {
      name: "Ya, Hapus!",
    });
  }

  //INPUT BELI CASH
  async inputbelicash(
    motor_kode: string,
    cash_bayar: string,
    pembeli_No_KTP: string,
    cash_tanggal: string
  ) {
    const cash_kode = faker.string.numeric();

    await this.tambahTransaksiCash.first().click();
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

  //EDIT BELI CASH
  async editbelicash(motor_kode: string, pembeli_No_KTP: string) {
    await this.goToBeliCash.click();
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Cash" })
    ).toBeVisible();
    await this.editBeliCashButton.click();
    await this.page.locator("select#motor_kode").waitFor({ state: "visible" });
    await this.motorDropdown.selectOption({ label: motor_kode });
    await this.page
      .locator("select#pembeli_No_KTP")
      .waitFor({ state: "visible" });
    await this.pembeliDropdown.selectOption({ label: pembeli_No_KTP });
  }

  async submitFormEditBeliCash() {
    await this.simpanButton.click();
  }

  async MemastikanEditBeliCashMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Cash" })
    ).toBeVisible();
  }

  //HAPUS BELI CASH
  async hapusBeliCash() {
    await this.HapusBeliCashButton.click();
    await this.KonfirmasiHapusButton.click();
    await expect(this.daftarTransaksiCash).toBeVisible();
  }
}
