import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

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
  readonly jumlahBayarEdit: Locator;
  readonly cicilankeEdit: Locator;

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
    this.jumlahBayarEdit = page.locator("input#cicilan_jumlah");
    this.cicilankeEdit = page.locator("input#cicilan_ke");

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
  async inputbayarcicilan(kridit_kode: string, cicilan_tanggal: string) {
    const cicilan_kode = faker.string.numeric();
    const cicilan_jumlah = faker.string.numeric();
    const cicilan_ke = faker.string.numeric();
    const cicilan_sisa_ke = faker.string.numeric();
    const cicilan_sisa_harga = faker.string.numeric();

    await this.tambahPembayaranCicilan.first().click();
    await this.page.locator("input#cicilan_kode").waitFor({ state: "visible" });
    await this.kodeCicilan.fill(cicilan_kode);

    await this.page.locator("select#kridit_kode").waitFor({ state: "visible" });
    await this.kodeKredit.selectOption({ label: kridit_kode });

    await this.page
      .locator("input#cicilan_tanggal")
      .waitFor({ state: "visible" });
    await this.tanggalInput.fill(cicilan_tanggal);

    await this.page
      .locator("input#cicilan_jumlah")
      .waitFor({ state: "visible" });
    await this.jumlahBayarInput.fill(cicilan_jumlah);

    await this.page.locator("input#cicilan_ke").waitFor({ state: "visible" });
    await this.cicilanke.fill(cicilan_ke);

    await this.page
      .locator("input#cicilan_sisa_ke")
      .waitFor({ state: "visible" });
    await this.sisacicilan.fill(cicilan_sisa_ke);

    await this.page
      .locator("input#cicilan_sisa_harga")
      .waitFor({ state: "visible" });
    await this.sisaharga.fill(cicilan_sisa_harga);
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
  async editBayarCicilan(cicilan_jumlah: string, cicilan_ke: string) {
    await this.editBayarCicilanButton.click();

    await this.page
      .locator("input#cicilan_jumlah")
      .waitFor({ state: "visible" });
    await this.jumlahBayarEdit.fill(cicilan_jumlah);
    await this.page.locator("input#cicilan_ke").waitFor({ state: "visible" });
    await this.cicilankeEdit.fill(cicilan_ke);
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
