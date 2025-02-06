import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

export class PlaywrightRolePage {
  readonly page: Page;
  readonly daftarRoles: Locator;
  readonly tambahRoles: Locator;
  readonly namaRoleInput: Locator;

  readonly editRolesButton: Locator;
  readonly editNamaRoleInput: Locator;

  readonly hapusRolesButton: Locator;
  readonly konfirmasiHapusRoles: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.daftarRoles = page.locator("h1", {
      hasText: "Daftar Role",
    });
    this.tambahRoles = page.locator("a", {
      hasText: "Tambah Role",
    });
    this.namaRoleInput = page.locator("input#role_name");

    this.editRolesButton = page.getByRole("row").locator("#editroles").last();
    this.editNamaRoleInput = page.locator("input#role_name");

    this.hapusRolesButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .last();
    this.konfirmasiHapusRoles = page.getByRole("button", {
      name: "Ya, Hapus!",
    });
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  //INPUT ROLES
  async inputRoles(role_name: string) {
    await this.tambahRoles.first().click();
    await this.page.locator("input#role_name").waitFor({ state: "visible" });
    await this.namaRoleInput.fill(role_name);
  }

  async submitFormRoles() {
    await this.simpanButton.click();
  }

  async MemastikanRolesMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Role" })
    ).toBeVisible();
  }

  //EDIT ROLES
  async editRoles(role_name: string) {
    await this.editRolesButton.click();

    await this.page.locator("input#role_name").waitFor({ state: "visible" });
    await this.editNamaRoleInput.fill(role_name);
  }

  async submitEditRoles() {
    await this.simpanButton.click();
  }

  async MemastikanEditRolesMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Role" })
    ).toBeVisible();
  }

  //HAPUS KREDIT PAKET
  async hapusRoles() {
    await this.hapusRolesButton.click();
    await this.konfirmasiHapusRoles.click();
    await expect(this.daftarRoles).toBeVisible();
  }
}
