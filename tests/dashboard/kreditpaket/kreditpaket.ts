import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

export class PlaywrightKreditPaketPage {
  readonly page: Page;
  readonly daftarKreditPaket: Locator;
  readonly tambahKreditPaket: Locator;
  readonly kodePaketInput: Locator;
  readonly hargaCashInput: Locator;
  readonly uangMukaInput: Locator;
  readonly jumlahCicilanInput: Locator;
  readonly bungaInput: Locator;
  readonly nilaiCicilanInput: Locator;
  readonly editKreditPaketButton: Locator;
  readonly hargaCashEdit: Locator;
  readonly uangMukaEdit: Locator;
  readonly hapusKreditPaketButton: Locator;
  readonly KonfirmasihapusKreditPaket: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.daftarKreditPaket = page.locator("h1", {
      hasText: "Daftar Paket Kredit",
    });
    this.tambahKreditPaket = page.locator("a", {
      hasText: "Tambah Paket Kredit",
    });
    this.kodePaketInput = page.locator("input#paket_kode");
    this.hargaCashInput = page.locator("input#paket_harga_cash");
    this.uangMukaInput = page.locator("input#paket_uang_muka");
    this.jumlahCicilanInput = page.locator("input#paket_jumlah_cicilan");
    this.bungaInput = page.locator("input#paket_bunga");
    this.nilaiCicilanInput = page.locator("input#paket_nilai_cicilan");

    this.editKreditPaketButton = page
      .getByRole("row")
      .locator("#editkreditpaket")
      .first();
    this.hargaCashEdit = page.locator("input#paket_harga_cash");
    this.uangMukaEdit = page.locator("input#paket_uang_muka");

    this.hapusKreditPaketButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .first();
    this.KonfirmasihapusKreditPaket = page.getByRole("button", {
      name: "Ya, Hapus!",
    });

    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  //INPUT KREDIT PAKET
  async inputKreditPaket(
    paket_harga_cash: string,
    paket_uang_muka: string,
    paket_jumlah_cicilan: string,
    paket_bunga: string,
    paket_nilai_cicilan: string
  ) {
    const paket_kode = faker.string.numeric(4);

    await this.tambahKreditPaket.first().click();
    await this.page.locator("input#paket_kode").waitFor({ state: "visible" });
    await this.kodePaketInput.fill(paket_kode);

    await this.page
      .locator("input#paket_harga_cash")
      .waitFor({ state: "visible" });
    await this.hargaCashInput.fill(paket_harga_cash);

    await this.page
      .locator("input#paket_uang_muka")
      .waitFor({ state: "visible" });
    await this.uangMukaInput.fill(paket_uang_muka);

    await this.page
      .locator("input#paket_jumlah_cicilan")
      .waitFor({ state: "visible" });
    await this.jumlahCicilanInput.fill(paket_jumlah_cicilan);

    await this.page.locator("input#paket_bunga").waitFor({ state: "visible" });
    await this.bungaInput.fill(paket_bunga);

    await this.page
      .locator("input#paket_nilai_cicilan")
      .waitFor({ state: "visible" });
    await this.nilaiCicilanInput.fill(paket_nilai_cicilan);
  }

  async submitFormKreditPaket() {
    await this.simpanButton.click();
  }

  async MemastikanKreditPaketMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Paket Kredit" })
    ).toBeVisible();
  }

  //EDIT KREDIT PAKET
  async editKreditPaket(paket_harga_cash: string, paket_uang_muka: string) {
    await this.editKreditPaketButton.click();

    await this.page
      .locator("input#paket_harga_cash")
      .waitFor({ state: "visible" });
    await this.uangMukaEdit.fill(paket_harga_cash);
    await this.page
      .locator("input#paket_uang_muka")
      .waitFor({ state: "visible" });
    await this.hargaCashEdit.fill(paket_uang_muka);
  }

  async submitEditKreditPaket() {
    await this.simpanButton.click();
  }

  async MemastikanEditKreditPaketMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Paket Kredit" })
    ).toBeVisible();
  }
  //HAPUS KREDIT PAKET
  async hapusKreditPaket() {
    await this.hapusKreditPaketButton.click();
    await this.KonfirmasihapusKreditPaket.click();
    await expect(this.daftarKreditPaket).toBeVisible();
  }
}
