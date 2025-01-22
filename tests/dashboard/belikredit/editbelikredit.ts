import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightBeliKreditEditPage {
  readonly page: Page;
  readonly goToBeliKredit: Locator;
  readonly daftarTransaksiKredit: Locator;
  readonly editBeliKreditPaket: Locator;
  readonly tambahTransaksiKredit: Locator;
  readonly paketKreditDropdown: Locator;
  readonly fotoKTPDropdown: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToBeliKredit = page.locator("a", { hasText: "Beli Kredit" });
    this.daftarTransaksiKredit = page.locator("h1", {
      hasText: "Daftar Transaksi Kredit",
    });
    this.editBeliKreditPaket = page
      .getByRole("row")
      .locator("#editbelikredit")
      .first();
    this.tambahTransaksiKredit = page.locator("h1", {
      hasText: "Tambah Transaksi Kredit",
    });
    this.paketKreditDropdown = page.locator("select#paket_kode");
    this.fotoKTPDropdown = page.locator("select#fotokopi_KTP");
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  async editbelikredit(paket_kode: string, fotokopi_KTP: string) {
    await this.goToBeliKredit.click();
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Kredit" })
    ).toBeVisible();
    await this.editBeliKreditPaket.click();

    await this.page.locator("select#paket_kode").waitFor({ state: "visible" });
    await this.paketKreditDropdown.selectOption({ label: paket_kode });
    await this.page
      .locator("select#fotokopi_KTP")
      .waitFor({ state: "visible" });
    await this.fotoKTPDropdown.selectOption({ label: fotokopi_KTP });
  }

  async submitFormEditBeliKredit() {
    await this.simpanButton.click();
  }

  async MemastikanEditBeliKreditMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Kredit" })
    ).toBeVisible();
  }
}
