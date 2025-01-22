import { test, expect } from "@playwright/test";
import { PlaywrightLoginPage } from "./auth/login";
import { PlaywrightRegisterPage } from "./auth/register";
import { PlaywrightDashboardPage } from "./dashboard/dashboard";
import { PlaywrightSidebarPage } from "./dashboard/sidebar";

import { PlaywrightPembeliPage } from "./dashboard/pembeli/pembeli";
import { PlaywrightPembeliEditPage } from "./dashboard/pembeli/editpembeli";
import { PlaywrightLihatPembeliPage } from "./dashboard/pembeli/lihatpembeli";
import { PlaywrightHapusPembeliPage } from "./dashboard/pembeli/hapuspembeli";

import { PlaywrightBeliCashPage } from "./dashboard/belicash/belicash";
import { PlaywrightBeliCashEditPage } from "./dashboard/belicash/editbelicash";
import { PlaywrightHapusBeliCashPage } from "./dashboard/belicash/hapusbelicash";

import { PlaywrightBeliKreditPage } from "./dashboard/belikredit/belikredit";
import { PlaywrightBeliKreditEditPage } from "./dashboard/belikredit/editbelikredit";
import { PlaywrightLihatBeliKreditPage } from "./dashboard/belikredit/lihatbelikredit";
import { PlaywrightHapusBeliKreditPage } from "./dashboard/belikredit/hapusbelikredit";

const emailUser = "adilla@gmail.com";
const passUser = "adilla0306";

test.describe("motomarker", () => {
  let dashboardPage: PlaywrightDashboardPage;
  let loginPage: PlaywrightLoginPage;
  let registerPage: PlaywrightRegisterPage;
  let sidebarPage: PlaywrightSidebarPage;
  let pembeliPage: PlaywrightPembeliPage;
  let editpembeliPage: PlaywrightPembeliEditPage;
  let lihatpembeliPage: PlaywrightLihatPembeliPage;
  let hapuspembeliPage: PlaywrightHapusPembeliPage;
  let belicashPage: PlaywrightBeliCashPage;
  let editbelicashPage: PlaywrightBeliCashEditPage;
  let hapusBeliCashPage: PlaywrightHapusBeliCashPage;
  let belikreditPage: PlaywrightBeliKreditPage;
  let editbelikreditPage: PlaywrightBeliKreditEditPage;
  let lihatbelikreditPage: PlaywrightLihatBeliKreditPage;
  let hapusBeliKreditPage: PlaywrightHapusBeliKreditPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new PlaywrightDashboardPage(page);
    loginPage = new PlaywrightLoginPage(page);
    registerPage = new PlaywrightRegisterPage(page);
    sidebarPage = new PlaywrightSidebarPage(page);
    pembeliPage = new PlaywrightPembeliPage(page);
    editpembeliPage = new PlaywrightPembeliEditPage(page);
    lihatpembeliPage = new PlaywrightLihatPembeliPage(page);
    hapuspembeliPage = new PlaywrightHapusPembeliPage(page);
    belicashPage = new PlaywrightBeliCashPage(page);
    editbelicashPage = new PlaywrightBeliCashEditPage(page);
    hapusBeliCashPage = new PlaywrightHapusBeliCashPage(page);
    belikreditPage = new PlaywrightBeliKreditPage(page);
    editbelikreditPage = new PlaywrightBeliKreditEditPage(page);
    lihatbelikreditPage = new PlaywrightLihatBeliKreditPage(page);
    hapusBeliKreditPage = new PlaywrightHapusBeliKreditPage(page);

    await page.goto("http://127.0.0.1:8000/login");

    await registerPage.toRegisPage();
    await loginPage.goToLoginPage();
    await loginPage.inputlogin(emailUser, passUser);
  });

  test("register page", async ({ page }) => {
    await dashboardPage.cekTitle();
    await sidebarPage.cekMotor();
    await dashboardPage.cekKontenMotor();

    await sidebarPage.cekPembeli();
    await dashboardPage.cekKontenPembeli();

    await sidebarPage.cekBeliCash();
    await dashboardPage.cekKontenBeliCash();

    await sidebarPage.cekKreditPaket();
    await dashboardPage.cekKontenKreditPaket();

    await sidebarPage.cekBeliKredit();
    await dashboardPage.cekKontenBeliKredit();

    await sidebarPage.cekBayarCicilan();
    await dashboardPage.cekKontenBayarCicilan();
    await sidebarPage.cekKontak();
    await dashboardPage.cekKontenKontak();
  });

  test("submit pembeli form", async ({ page }) => {
    await sidebarPage.cekPembeli();
    await pembeliPage.inputpembeli("Adilla Ibrahim");
    await pembeliPage.submitFormPembeli();
    await pembeliPage.MemastikanPembeliMasuk();
  });

  test("submit transaksi cash form", async ({ page }) => {
    await sidebarPage.cekBeliCash();
    await belicashPage.inputbelicash(
      "NMAX",
      "25000000",
      "Adilla Ibrahim",
      "2025-01-20"
    );
    await belicashPage.submitFormBeliCash();
    await belicashPage.MemastikanBeliCashMasuk();
  });

  test("submit transaksi kredit form", async ({ page }) => {
    await sidebarPage.cekBeliKredit();
    await belikreditPage.inputbelikredit(
      "Jelita Zalindra",
      "Beat",
      "2025-01-01",
      "P002",
      "Ya",
      "Tidak",
      "Tidak"
    );
    await belikreditPage.submitFormBeliKredit();
    await belikreditPage.MemastikanBeliKreditMasuk();
  });

  test("edit pembeli form", async ({ page }) => {
    await editpembeliPage.editPembeli("Adilla Ibrahim");
    await editpembeliPage.submitFormEditPembeli();
    await editpembeliPage.MemastikanEditPembeliMasuk();
    await lihatpembeliPage.goToLihatPembeli();
  });

  test("edit beli cash form", async ({ page }) => {
    await editbelicashPage.editbelicash("Beat", "Adilla Ibrahim");
    await editbelicashPage.submitFormEditBeliCash();
    await editbelicashPage.MemastikanEditBeliCashMasuk();
  });

  test("edit beli kredit form", async ({ page }) => {
    await editbelikreditPage.editbelikredit("P002", "Tidak");
    await editbelikreditPage.submitFormEditBeliKredit();
    await editbelikreditPage.MemastikanEditBeliKreditMasuk();
    await lihatbelikreditPage.goToLihatBeliKredit();
  });

  test("hapus pembeli", async () => {
    await sidebarPage.cekPembeli();
    await hapuspembeliPage.hapusPembeli();
  });

  test("hapus beli cash", async () => {
    await sidebarPage.cekBeliCash();
    await hapusBeliCashPage.hapusBeliCash();
  });

  test("hapus beli kredit", async () => {
    await sidebarPage.cekBeliKredit();
    await hapusBeliKreditPage.hapusBeliKredit();
  });
});
