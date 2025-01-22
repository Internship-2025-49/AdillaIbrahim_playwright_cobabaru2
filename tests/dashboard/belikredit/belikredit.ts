import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

export class PlaywrightBeliKreditPage {
  readonly page: Page;
  readonly tambahTransaksiKredit: Locator;
  readonly kodeTransaksiInput: Locator;
  readonly pembeliDropdown: Locator;
  readonly motorDropdown: Locator;
  readonly paketKreditDropdown: Locator;
  readonly tanggalInput: Locator;
  readonly fotoKTPDropdown: Locator;
  readonly fotoKKDropdown: Locator;
  readonly fotoGajiDropdown: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tambahTransaksiKredit = page.locator("a", {
      hasText: "Tambah Transaksi Kredit",
    });
    this.kodeTransaksiInput = page.locator("input#kridit_kode");
    this.pembeliDropdown = page.locator("select#pembeli_No_KTP");
    this.motorDropdown = page.locator("select#motor_kode");
    this.paketKreditDropdown = page.locator("select#paket_kode");
    this.tanggalInput = page.locator("input#kridit_tanggal");
    this.fotoKTPDropdown = page.locator("select#fotokopi_KTP");
    this.fotoKKDropdown = page.locator("select#fotokopi_KK");
    this.fotoGajiDropdown = page.locator("select#fotokopi_slip_gaji");
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  async inputbelikredit(
    pembeli_No_KTP: string,
    motor_kode: string,
    kridit_tanggal: string,
    paket_kode: string,
    fotokopi_KTP: string,
    fotokopi_KK: string,
    fotokopi_slip_gaji: string
  ) {
    const kridit_kode = faker.string.numeric();

    await this.tambahTransaksiKredit.first().click();
    await this.page.locator("input#kridit_kode").waitFor({ state: "visible" });
    await this.kodeTransaksiInput.fill(kridit_kode);

    await this.page
      .locator("select#pembeli_No_KTP")
      .waitFor({ state: "visible" });
    await this.pembeliDropdown.first().selectOption({ label: pembeli_No_KTP });

    await this.page.locator("select#motor_kode").waitFor({ state: "visible" });
    await this.motorDropdown.selectOption({ label: motor_kode });

    await this.page.locator("select#paket_kode").waitFor({ state: "visible" });
    await this.paketKreditDropdown.selectOption({ label: paket_kode });

    await this.page
      .locator("input#kridit_tanggal")
      .waitFor({ state: "visible" });
    await this.tanggalInput.fill(kridit_tanggal);

    await this.page
      .locator("select#fotokopi_KTP")
      .waitFor({ state: "visible" });
    await this.fotoKTPDropdown.selectOption({ label: fotokopi_KTP });

    await this.page.locator("select#fotokopi_KK").waitFor({ state: "visible" });
    await this.fotoKKDropdown.selectOption({ label: fotokopi_KK });

    await this.page
      .locator("select#fotokopi_slip_gaji")
      .waitFor({ state: "visible" });
    await this.fotoGajiDropdown.selectOption({ label: fotokopi_slip_gaji });
  }

  async submitFormBeliKredit() {
    await this.simpanButton.click();
  }

  async MemastikanBeliKreditMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Kredit" })
    ).toBeVisible();
  }
}
