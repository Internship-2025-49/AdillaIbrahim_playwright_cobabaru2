import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightLogoutPage {
  readonly page: Page;
  readonly goToLogout: Locator;
  readonly checkLogout: Locator;

  constructor(page: Page) {
    this.goToLogout = page.getByRole("button", { name: "Logout" });
    this.checkLogout = page.getByRole("heading", { name: "Login" });
  }

  async logout() {
    await this.goToLogout.click();
    await expect(this.checkLogout).toBeVisible();
  }
}
