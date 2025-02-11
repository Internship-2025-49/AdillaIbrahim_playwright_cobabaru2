import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";
import { FormBeliKredit } from "../type/type";

export class PlaywrightBeliKreditPage {
  readonly page: Page;
  readonly goToBeliKredit: Locator;
  readonly daftarTransaksiKredit: Locator;

  readonly tambahTransaksiKredit: Locator;
  readonly kodeTransaksiInput: Locator;
  readonly pembeliDropdown: Locator;
  readonly motorDropdown: Locator;
  readonly paketKreditDropdown: Locator;
  readonly tanggalInput: Locator;
  readonly fotoKTPDropdown: Locator;
  readonly fotoKKDropdown: Locator;
  readonly fotoGajiDropdown: Locator;

  readonly editBeliKreditPaket: Locator;
  readonly editpembeliDropdown: Locator;
  readonly editmotorDropdown: Locator;
  readonly editpaketKreditDropdown: Locator;

  readonly lihatButton: Locator;
  readonly kembaliButton: Locator;

  readonly HapusBeliKreditButton: Locator;
  readonly KonfirmasiHapusButton: Locator;

  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToBeliKredit = page.locator("a", { hasText: "Beli Kredit" });
    this.daftarTransaksiKredit = page.locator("h1", {
      hasText: "Daftar Transaksi Kredit",
    });
    this.tambahTransaksiKredit = page.locator("a", {
      hasText: "Tambah Transaksi Kredit",
    });
    this.kodeTransaksiInput = page.locator("input#kridit_kode");
    this.pembeliDropdown = page.locator("select#pembeli_No_KTP").first();
    this.motorDropdown = page.locator("select#motor_kode").first();
    this.paketKreditDropdown = page.locator("select#paket_kode").first();
    this.tanggalInput = page.locator("input#kridit_tanggal").first();
    this.fotoKTPDropdown = page.locator("select#fotokopi_KTP");
    this.fotoKKDropdown = page.locator("select#fotokopi_KK").first();
    this.fotoGajiDropdown = page.locator("select#fotokopi_slip_gaji").first();

    this.editBeliKreditPaket = page
      .getByRole("row")
      .locator("#editbelikredit")
      .first();
    this.editpembeliDropdown = page.locator("select#pembeli_No_KTP").last();
    this.editmotorDropdown = page.locator("select#motor_kode").last();
    this.editpaketKreditDropdown = page.locator("select#paket_kode").last();
    this.simpanButton = page.locator("button", { hasText: "Simpan" });

    this.daftarTransaksiKredit = page.locator("h1", {
      hasText: "Daftar Transaksi Kredit",
    });
    this.lihatButton = page.locator("a", { hasText: "Lihat" });
    this.kembaliButton = page.locator("button", { hasText: "Kembali" });

    this.HapusBeliKreditButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .last();
    this.KonfirmasiHapusButton = page.getByRole("button", {
      name: "Ya, Hapus!",
    });
  }

  //INPUT BELI KREDIT
  async inputbelikredit(
    InputBeliKredit: FormBeliKredit,
    pembeli_No_KTP: string,
    motor_kode: string,
    paket_kode: string
    // fotokopi_KTP: string,
    // fotokopi_KK: string,
    // fotokopi_slip_gaji: string
  ) {
    await this.tambahTransaksiKredit.first().click();
    await this.page.locator("input#kridit_kode").waitFor({ state: "visible" });
    await this.kodeTransaksiInput.fill(InputBeliKredit.kridit_kode);

    await this.page
      .locator("select#pembeli_No_KTP")
      .waitFor({ state: "visible" });
    await this.pembeliDropdown.selectOption({ label: pembeli_No_KTP });
    await this.page.locator("select#motor_kode").waitFor({ state: "visible" });
    await this.motorDropdown.selectOption({ label: motor_kode });

    await this.page.locator("select#paket_kode").waitFor({ state: "visible" });
    await this.paketKreditDropdown.selectOption({ label: paket_kode });

    await this.page
      .locator("input#kridit_tanggal")
      .waitFor({ state: "visible" });
    await this.tanggalInput.fill(String(InputBeliKredit.kridit_tanggal));

    await this.page
      .locator("select#fotokopi_KTP")
      .waitFor({ state: "visible" });
    await this.fotoKTPDropdown.click();
    await this.fotoKTPDropdown.selectOption(InputBeliKredit.fotokopi_KTP);

    await this.page.locator("select#fotokopi_KK").waitFor({ state: "visible" });
    await this.fotoKKDropdown.click();
    await this.fotoKKDropdown.selectOption(InputBeliKredit.fotokopi_KK);

    await this.page
      .locator("select#fotokopi_slip_gaji")
      .waitFor({ state: "visible" });
    await this.fotoGajiDropdown.click();
    await this.fotoGajiDropdown.selectOption(
      InputBeliKredit.fotokopi_slip_gaji
    );
  }

  async submitFormBeliKredit() {
    await this.simpanButton.click();
  }

  async MemastikanBeliKreditMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Kredit" })
    ).toBeVisible();
  }

  //EDIT BELI KREDIT
  async editbelikredit(
    EditBeliKredit: FormBeliKredit,
    pembeli_No_KTP: string,
    motor_kode: string,
    paket_kode: string
  ) {
    await this.goToBeliKredit.click();
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Kredit" })
    ).toBeVisible();
    await this.editBeliKreditPaket.click();

    // await this.page.locator("input#kridit_kode").waitFor({ state: "visible" });
    // await this.page
    //   .locator("input#kridit_kode")
    //   .evaluate((el) => el.removeAttribute("readonly"));
    // await this.kodeTransaksiInput.fill(EditBeliKredit.kridit_kode);

    await this.page
      .locator("select#pembeli_No_KTP")
      .waitFor({ state: "visible" });
    await this.editpembeliDropdown.selectOption({ label: pembeli_No_KTP });
    await this.page.locator("select#motor_kode").waitFor({ state: "visible" });
    await this.editmotorDropdown.selectOption({ label: motor_kode });

    await this.page.locator("select#paket_kode").waitFor({ state: "visible" });
    await this.editpaketKreditDropdown.selectOption({ label: paket_kode });

    await this.page
      .locator("input#kridit_tanggal")
      .waitFor({ state: "visible" });
    await this.tanggalInput.fill(String(EditBeliKredit.kridit_tanggal));

    await this.page
      .locator("select#fotokopi_KTP")
      .waitFor({ state: "visible" });
    await this.fotoKTPDropdown.selectOption(EditBeliKredit.fotokopi_KTP);

    await this.page.locator("select#fotokopi_KK").waitFor({ state: "visible" });
    await this.fotoKKDropdown.selectOption(EditBeliKredit.fotokopi_KK);

    await this.page
      .locator("select#fotokopi_slip_gaji")
      .waitFor({ state: "visible" });
    await this.fotoGajiDropdown.selectOption(EditBeliKredit.fotokopi_slip_gaji);
  }

  async submitFormEditBeliKredit() {
    await this.simpanButton.click();
  }

  async MemastikanEditBeliKreditMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Transaksi Kredit" })
    ).toBeVisible();
  }

  //LIHAT BELI KREDIT
  async goToLihatBeliKredit() {
    await this.lihatButton.first().click();
    await expect(
      this.page.locator("h1", { hasText: "Lihat Beli Kredit" })
    ).toBeVisible();
    await this.kembaliButton.click();
    await expect(this.daftarTransaksiKredit).toBeVisible();
  }

  //HAPUS BELI KREDIT
  async hapusBeliKredit() {
    await this.HapusBeliKreditButton.click();
    await this.KonfirmasiHapusButton.click();
    await expect(this.daftarTransaksiKredit).toBeVisible();
  }
}
