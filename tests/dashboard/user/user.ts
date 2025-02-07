import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

export class PlaywrightUserPage {
  readonly page: Page;
  readonly daftarUser: Locator;
  readonly tambahUser: Locator;
  readonly namaInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly konfirPassInput: Locator;
  readonly role: Locator;

  readonly editUserButton: Locator;
  readonly editnamaInput: Locator;

  readonly hapusUserButton: Locator;
  readonly konfirmasiHapusUser: Locator;
  readonly simpanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.daftarUser = page.locator("h1", {
      hasText: "Daftar Pengguna",
    });
    this.tambahUser = page.locator("a", {
      hasText: "Tambah Pengguna",
    });
    this.namaInput = page.locator("input#name");
    this.emailInput = page.locator("input#email");
    this.passwordInput = page.locator("input#password");
    this.konfirPassInput = page.locator("input#password_confirmation");
    this.role = page.locator("select#role_id").last();

    this.editUserButton = page.getByRole("row").locator("#edituser").last();
    this.editnamaInput = page.locator("input#name");

    this.hapusUserButton = page
      .locator("button", {
        hasText: "Hapus",
      })
      .last();
    this.konfirmasiHapusUser = page.getByRole("button", {
      name: "Ya, Hapus!",
    });
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  //INPUT USER
  async inputUser(role_id: string) {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password({ length: 8 });
    const password_confirmation = password;

    await this.tambahUser.first().click();
    await this.page.locator("input#name").waitFor({ state: "visible" });
    await this.namaInput.fill(name);
    await this.page.locator("input#email").waitFor({ state: "visible" });
    await this.emailInput.fill(email);
    await this.page.locator("input#password").waitFor({ state: "visible" });
    await this.passwordInput.fill(password);
    await this.page
      .locator("input#password_confirmation")
      .waitFor({ state: "visible" });
    await this.konfirPassInput.fill(password_confirmation);

    await this.page.locator("select#role_id").waitFor({ state: "visible" });
    await this.role.selectOption({ label: role_id });
  }

  async submitFormUser() {
    await this.simpanButton.click();
  }

  async MemastikanUserMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Pengguna" })
    ).toBeVisible();
  }

  //EDIT USER
  async editUser() {
    const name = faker.person.fullName();
    await this.editUserButton.click();

    await this.page.locator("input#name").waitFor({ state: "visible" });
    await this.editnamaInput.fill(name);
  }

  async submitEditUser() {
    await this.simpanButton.click();
  }

  async MemastikanEditUserMasuk() {
    await expect(
      this.page.locator("h1", { hasText: "Daftar Pengguna" })
    ).toBeVisible();
  }

  //HAPUS USER
  async hapusUser() {
    await this.hapusUserButton.click();
    await this.konfirmasiHapusUser.click();
    await expect(this.daftarUser).toBeVisible();
  }
}
