import { test, expect } from "@playwright/test";
import { PlaywrightLoginPage } from "./auth/login";
import { PlaywrightRegisterPage } from "./auth/register";
import { PlaywrightDashboardPage } from "./dashboard/dashboard";
import { PlaywrightSidebarPage } from "./dashboard/sidebar";

const emailUser = "adilla@gmail.com";
const passUser = "adilla0306";

test.describe("motomarker", () => {
  let dashboardPage: PlaywrightDashboardPage;
  let loginPage: PlaywrightLoginPage;
  let registerPage: PlaywrightRegisterPage;
  let sidebarPage: PlaywrightSidebarPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new PlaywrightDashboardPage(page);
    loginPage = new PlaywrightLoginPage(page);
    registerPage = new PlaywrightRegisterPage(page);
    sidebarPage = new PlaywrightSidebarPage(page);

    await page.goto("http://127.0.0.1:8000/login");

    await registerPage.toRegisPage();
    await loginPage.goToLoginPage();
    await loginPage.inputlogin(emailUser, passUser);
  });

  test("register page", async ({ page }) => {
    await dashboardPage.cekDashboard();
    await sidebarPage.cekMotor();
    await sidebarPage.cekPembeli();
    await sidebarPage.cekBeliCash();
    await sidebarPage.cekKreditPaket();
    await sidebarPage.cekBeliKredit();
    await sidebarPage.cekBayarCicilan();
    await sidebarPage.cekKontak();
  });
});
