import { expect, Locator, type Page } from "@playwright/test";

export class PlaywrightHapusPembeliPage {
  readonly page: Page;
  readonly HapusPembeliButton: Locator;
  readonly PembeliHeader: Locator;
  readonly KonfirmasiHapusButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HapusPembeliButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .first();
    this.PembeliHeader = page.locator("h1", { hasText: "Daftar Pembeli" });
    this.KonfirmasiHapusButton = page.getByRole("button", {
      name: "Ya, Hapus!",
    });
  }

  async hapusPembeli() {
    await this.HapusPembeliButton.click();
    await this.KonfirmasiHapusButton.click();
    await expect(this.PembeliHeader).toBeVisible();
  }
}
