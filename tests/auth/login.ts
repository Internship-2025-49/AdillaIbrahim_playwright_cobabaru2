import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightLoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly sudahTerdaftar: Locator;
  readonly passwordIcon: Locator;
  readonly signUpLink: Locator;
  readonly errorMessage: Locator;
  readonly cekHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sudahTerdaftar = page.locator("a", { hasText: "Sudah terdaftar?" });
    this.emailInput = page.locator("input#email");
    this.passwordInput = page.locator("input#password");
    this.loginButton = page.locator("button", { hasText: "Login" });
    this.cekHeader = page.locator("h1", { hasText: "Dashboard" });
  }

  async goToLoginPage() {
    await this.sudahTerdaftar.click();
  }

  async inputlogin(email: string, password: string) {
    await this.page.locator("input#email").waitFor({ state: "visible" });
    await this.emailInput.fill(email);
    await this.page.locator("input#password").waitFor({ state: "visible" });
    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }
}
