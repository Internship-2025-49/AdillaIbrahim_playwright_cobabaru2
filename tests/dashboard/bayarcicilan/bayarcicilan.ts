import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";
import { FormBayarCicilan } from "../type/type";

export class PlaywrightBayarCicilanPage {
  readonly page: Page;
  readonly daftarBayarCicilan: Locator;
  readonly tambahPembayaranCicilan: Locator;
  readonly kodeCicilan: Locator;
  readonly kodeKredit: Locator;
  readonly tanggalInput: Locator;
  readonly jumlahBayarInput: Locator;
  readonly cicilanke: Locator;
  readonly sisacicilan: Locator;
  readonly sisaharga: Locator;

  readonly editBayarCicilanButton: Locator;
  readonly editkodeKredit: Locator;

  readonly hapusBayarCicilanButton: Locator;
  readonly konfirmasiHapusBayarCicilan: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.daftarBayarCicilan = page.locator("h1", {
      hasText: "Daftar Pembayaran Cicilan",
    });
    this.tambahPembayaranCicilan = page.locator("a", {
      hasText: "Tambah Pembayaran Cicilan",
    });
    this.kodeCicilan = page.locator("input#cicilan_kode");
    this.kodeKredit = page.locator("select#kridit_kode").first();
    this.tanggalInput = page.locator("input#cicilan_tanggal");
    this.jumlahBayarInput = page.locator("input#cicilan_jumlah");
    this.cicilanke = page.locator("input#cicilan_ke");
    this.sisacicilan = page.locator("input#cicilan_sisa_ke");
    this.sisaharga = page.locator("input#cicilan_sisa_harga");

    this.editBayarCicilanButton = page
      .getByRole("row")
      .locator("#editbayarcicilan")
      .first();
    this.editkodeKredit = page.locator("select#kridit_kode").last();

    this.hapusBayarCicilanButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .first();
    this.konfirmasiHapusBayarCicilan = page.getByRole("button", {
      name: "Ya, Hapus!",
    });
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  //INPUT BAYAR CICILAN
  async inputbayarcicilan(
    InputBayarCicilan: FormBayarCicilan,
    kridit_kode: string
  ) {
    await this.tambahPembayaranCicilan.first().click();
    await this.page.locator("input#cicilan_kode").waitFor({ state: "visible" });
    await this.kodeCicilan.fill(InputBayarCicilan.cicilan_kode);

    await this.page.locator("select#kridit_kode").waitFor({ state: "visible" });
    await this.kodeKredit.selectOption({ label: kridit_kode });

    await this.page
      .locator("input#cicilan_tanggal")
      .waitFor({ state: "visible" });
    await this.tanggalInput.fill(String(InputBayarCicilan.cicilan_tanggal));

    await this.page
      .locator("input#cicilan_jumlah")
      .waitFor({ state: "visible" });
    await this.jumlahBayarInput.fill(InputBayarCicilan.cicilan_jumlah);

    await this.page.locator("input#cicilan_ke").waitFor({ state: "visible" });
    await this.cicilanke.fill(InputBayarCicilan.cicilan_ke);

    await this.page
      .locator("input#cicilan_sisa_ke")
      .waitFor({ state: "visible" });
    await this.sisacicilan.fill(InputBayarCicilan.cicilan_sisa_ke);

    await this.page
      .locator("input#cicilan_sisa_harga")
      .waitFor({ state: "visible" });
    await this.sisaharga.fill(InputBayarCicilan.cicilan_sisa_harga);
  }

  async submitFormBayarCicilan() {
    await this.simpanButton.click();
  }

  async MemastikanBayarCicilanMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Pembayaran Cicilan" })
    ).toBeVisible();
  }

  //EDIT KREDIT PAKET
  async editBayarCicilan(
    EditBayarCicilan: FormBayarCicilan,
    kridit_kode: string
  ) {
    await this.editBayarCicilanButton.click();

    // await this.page.locator("input#cicilan_kode").waitFor({ state: "visible" });
    // await this.page
    //   .locator("input#cicilan_kode")
    //   .evaluate((el) => el.removeAttribute("readonly"));
    // await this.kodeCicilan.fill(EditBayarCicilan.cicilan_kode);

    await this.page.locator("select#kridit_kode").waitFor({ state: "visible" });
    await this.editkodeKredit.selectOption({ label: kridit_kode });

    await this.page
      .locator("input#cicilan_tanggal")
      .waitFor({ state: "visible" });
    await this.tanggalInput.fill(String(EditBayarCicilan.cicilan_tanggal));

    await this.page
      .locator("input#cicilan_jumlah")
      .waitFor({ state: "visible" });
    await this.jumlahBayarInput.fill(EditBayarCicilan.cicilan_jumlah);

    await this.page.locator("input#cicilan_ke").waitFor({ state: "visible" });
    await this.cicilanke.fill(EditBayarCicilan.cicilan_ke);

    await this.page
      .locator("input#cicilan_sisa_ke")
      .waitFor({ state: "visible" });
    await this.sisacicilan.fill(EditBayarCicilan.cicilan_sisa_ke);

    await this.page
      .locator("input#cicilan_sisa_harga")
      .waitFor({ state: "visible" });
    await this.sisaharga.fill(EditBayarCicilan.cicilan_sisa_harga);
  }

  async submitEditBayarCicilan() {
    await this.simpanButton.click();
  }

  async MemastikanEditBayarCicilanMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Pembayaran Cicilan" })
    ).toBeVisible();
  }
  //HAPUS KREDIT PAKET
  async hapusBayarCicilan() {
    await this.hapusBayarCicilanButton.click();
    await this.konfirmasiHapusBayarCicilan.click();
    await expect(this.daftarBayarCicilan).toBeVisible();
  }
}
