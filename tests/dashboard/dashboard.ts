import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightDashboardPage {
  readonly page: Page;
  readonly cekHeader: Locator;
  readonly cekMotor: Locator;
  readonly cekPembeli: Locator;
  readonly cekBeliCash: Locator;
  readonly cekKreditPaket: Locator;
  readonly cekBeliKredit: Locator;
  readonly cekBayarCicilan: Locator;
  readonly cekKontak: Locator;

  readonly TambahPembeliButton: Locator;
  readonly TambahPembeli: Locator;
  readonly EditPembeliButton: Locator;
  readonly EditPembeli: Locator;

  readonly TambahTransaksiCashButton: Locator;
  readonly TambahTransaksiCash: Locator;
  readonly EditBeliCashButton: Locator;
  readonly EditBeliCash: Locator;

  readonly TambahTransaksiKreditButton: Locator;
  readonly TambahTransaksiKredit: Locator;
  readonly EditBeliKreditButton: Locator;
  readonly EditBeliKredit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cekHeader = page.locator("h1", { hasText: "Dashboard" });
    this.cekMotor = page.locator("h1", { hasText: "Daftar Motor" });
    this.cekPembeli = page.locator("h1", { hasText: " Daftar Pembeli" });
    this.cekBeliCash = page.locator("h1", {
      hasText: " Daftar Transaksi Cash",
    });
    this.cekKreditPaket = page.locator("h1", {
      hasText: "Daftar Paket Kredit",
    });
    this.cekBeliKredit = page.locator("h1", {
      hasText: " Daftar Transaksi Kredit",
    });
    this.cekBayarCicilan = page.locator("h1", {
      hasText: "Daftar Pembayaran Cicilan",
    });
    this.cekKontak = page.locator("h1", { hasText: "Kontak Help & Info" });

    this.TambahPembeliButton = page.locator("a", { hasText: "Tambah Pembeli" });
    this.TambahPembeli = page.locator("h1", { hasText: "Tambah Pembeli" });
    this.EditPembeli = page.locator("h1", { hasText: "Edit Pembeli" });

    this.TambahTransaksiCashButton = page.locator("a", {
      hasText: "Tambah Transaksi Cash",
    });
    this.TambahTransaksiCash = page.locator("h1", {
      hasText: "Tambah Transaksi Cash",
    });
    this.EditBeliCash = page.locator("h1", {
      hasText: "Edit Transaksi Cash",
    });

    this.TambahTransaksiKreditButton = page.locator("a", {
      hasText: "Tambah Transaksi Kredit",
    });
    this.TambahTransaksiKredit = page.locator("h1", {
      hasText: "Tambah Transaksi Kredit",
    });
    this.TambahTransaksiKredit = page.locator("h1", {
      hasText: "Tambah Transaksi Kredit",
    });
    this.EditBeliKredit = page.locator("h1", {
      hasText: "Edit Transaksi Kredit",
    });
  }

  async cekTitle() {
    await expect(this.cekHeader).toBeVisible();
  }

  async cekKontenMotor() {
    await expect(this.cekMotor).toBeVisible();
  }

  async cekKontenPembeli() {
    await expect(this.cekPembeli).toBeVisible();
  }

  async cekKontenBeliCash() {
    await expect(this.cekBeliCash).toBeVisible();
  }

  async cekKontenKreditPaket() {
    await expect(this.cekKreditPaket).toBeVisible();
  }

  async cekKontenBeliKredit() {
    await expect(this.cekBeliKredit).toBeVisible();
  }

  async cekKontenBayarCicilan() {
    await expect(this.cekBayarCicilan).toBeVisible();
  }

  async cekKontenKontak() {
    await expect(this.cekKontak).toBeVisible();
  }

  async cekTambahPembeli() {
    await this.TambahPembeliButton.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/pembelis/create");
    await expect(this.TambahPembeli).toBeVisible();
  }

  async cekEditPembeli() {
    await expect(this.page).toHaveURL(
      "http://127.0.0.1:8000/pembelis/1234567890123456/edit"
    );
    await expect(this.EditPembeli).toBeVisible();
  }

  async cekTambahTransaksiCash() {
    await this.TambahTransaksiCashButton.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/beli-cash/create");
    await expect(this.TambahTransaksiCash).toBeVisible();
  }

  async cekEditBeliCash() {
    await expect(this.page).toHaveURL(
      "http://127.0.0.1:8000/beli-cash/C001/edit"
    );
    await expect(this.EditBeliCash).toBeVisible();
  }

  async cekTambahTransaksiKredit() {
    await this.TambahTransaksiKreditButton.click();
    await expect(this.page).toHaveURL(
      "http://127.0.0.1:8000/beli-kredit/create"
    );
    await expect(this.TambahTransaksiKredit).toBeVisible();
  }

  async cekEditBeliKredit() {
    await expect(this.page).toHaveURL(
      "http://127.0.0.1:8000/beli-kredit/K001/edit"
    );
    await expect(this.EditBeliKredit).toBeVisible();
  }
}
