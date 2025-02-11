import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";
import { FormBeliCash } from "../type/type";

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
    this.motorDropdown = page.locator("select#motor_kode").last();
    this.jumlahBayarInput = page.locator("input#cash_bayar");
    this.pembeliDropdown = page.locator("select#pembeli_No_KTP").last();
    this.tanggalInput = page.locator("input#cash_tanggal");

    this.editBeliCashButton = page
      .getByRole("row")
      .locator("#editbelicash")
      .first();
    this.tambahTransaksiCash = page.locator("a", {
      hasText: "Tambah Transaksi Cash",
    });
    this.editmotorDropdown = page.locator("select#motor_kode").last();
    this.editpembeliDropdown = page.locator("select#pembeli_No_KTP").last();

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
    InputBeliCash: FormBeliCash,
    // pembeli_No_KTP: string,
    motor_kode: string
  ) {
    await this.tambahTransaksiCash.first().click();
    await this.page.locator("input#cash_kode").waitFor({ state: "visible" });
    await this.kodeTransaksiInput.fill(InputBeliCash.cash_kode);
    await this.page
      .locator("select#pembeli_No_KTP")
      .waitFor({ state: "visible" });

    await this.pembeliDropdown.selectOption(InputBeliCash.pembeli_No_KTP);
    await this.page.locator("select#motor_kode").waitFor({ state: "visible" });
    await this.page.getByLabel("Motor").selectOption("select#motor_kode");
    await this.motorDropdown.selectOption({ label: motor_kode });
    await this.page.locator("input#cash_tanggal").waitFor({ state: "visible" });
    await this.tanggalInput.fill(InputBeliCash.cash_tanggal);
    await this.page.locator("input#cash_bayar").waitFor({ state: "visible" });
    await this.jumlahBayarInput.fill(InputBeliCash.cash_bayar);
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
  async editbelicash(
    EditBeliCash: FormBeliCash,
    pembeli_No_KTP: string,
    motor_kode: string
  ) {
    await this.goToBeliCash.click();
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Cash" })
    ).toBeVisible();
    await this.editBeliCashButton.click();
    // await this.page.locator("input#cash_kode").waitFor({ state: "visible" });
    // await this.page
    //   .locator("input#cash_kode ")
    //   .evaluate((el) => el.removeAttribute("readonly"));
    // await this.kodeTransaksiInput.fill(EditBeliCash.cash_kode);
    await this.page
      .locator("select#pembeli_No_KTP")
      .waitFor({ state: "visible" });
    await this.editpembeliDropdown.selectOption({ label: pembeli_No_KTP });
    await this.page.locator("select#motor_kode").waitFor({ state: "visible" });
    await this.editmotorDropdown.selectOption({ label: motor_kode });

    await this.page.locator("input#cash_tanggal").waitFor({ state: "visible" });
    await this.tanggalInput.fill(String(EditBeliCash.cash_tanggal));
    await this.page.locator("input#cash_bayar").waitFor({ state: "visible" });
    await this.jumlahBayarInput.fill(EditBeliCash.cash_bayar);
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
