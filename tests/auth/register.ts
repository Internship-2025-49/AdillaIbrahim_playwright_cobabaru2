import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightRegisterPage {
  readonly page: Page;
  readonly goToSignup: Locator;
  readonly cekSignupPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToSignup = page.locator("a", { hasText: "Buat akun" });
    this.cekSignupPage = page.locator("h2", { hasText: "Register" });
  }

  async toRegisPage() {
    await this.goToSignup.click();
    await expect(this.cekSignupPage).toBeVisible();
  }
}
