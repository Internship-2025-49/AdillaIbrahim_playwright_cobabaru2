import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

export class PlaywrightBayarCicilanPage {
  readonly page: Page;
  readonly tambahPembayaranCicilan: Locator;
  readonly kodeCicilan: Locator;
  readonly kodeKredit: Locator;
  readonly tanggalInput: Locator;
  readonly jumlahBayarInput: Locator;
  readonly cicilanke: Locator;
  readonly sisacicilan: Locator;
  readonly sisaharga: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
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
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

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
}
