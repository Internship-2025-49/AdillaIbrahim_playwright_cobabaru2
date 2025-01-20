import { test, expect } from "@playwright/test";
import { PlaywrightLoginPage } from "./auth/login";
import { PlaywrightRegisterPage } from "./auth/register";
import { PlaywrightDashboardPage } from "./dashboard/dashboard";
import { PlaywrightSidebarPage } from "./dashboard/sidebar";

import { PlaywrightPembeliPage } from "./dashboard/pembeli/pembeli";
import { PlaywrightPembeliEditPage } from "./dashboard/pembeli/editpembeli";

import { PlaywrightBeliCashPage } from "./dashboard/belicash/belicash";
import { PlaywrightBeliCashEditPage } from "./dashboard/belicash/editbelicash";

import { PlaywrightBeliKreditPage } from "./dashboard/belikredit/belikredit";
import { PlaywrightBeliKreditEditPage } from "./dashboard/belikredit/editbelikredit";

const emailUser = "adilla@gmail.com";
const passUser = "adilla0306";

test.describe("motomarker", () => {
  let dashboardPage: PlaywrightDashboardPage;
  let loginPage: PlaywrightLoginPage;
  let registerPage: PlaywrightRegisterPage;
  let sidebarPage: PlaywrightSidebarPage;
  let pembeliPage: PlaywrightPembeliPage;
  let editpembeliPage: PlaywrightPembeliEditPage;
  let belicashPage: PlaywrightBeliCashPage;
  let editbelicashPage: PlaywrightBeliCashEditPage;
  let belikreditPage: PlaywrightBeliKreditPage;
  let editbelikreditPage: PlaywrightBeliKreditEditPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new PlaywrightDashboardPage(page);
    loginPage = new PlaywrightLoginPage(page);
    registerPage = new PlaywrightRegisterPage(page);
    sidebarPage = new PlaywrightSidebarPage(page);
    pembeliPage = new PlaywrightPembeliPage(page);
    editpembeliPage = new PlaywrightPembeliEditPage(page);
    belicashPage = new PlaywrightBeliCashPage(page);
    editbelicashPage = new PlaywrightBeliCashEditPage(page);
    belikreditPage = new PlaywrightBeliKreditPage(page);
    editbelikreditPage = new PlaywrightBeliKreditEditPage(page);

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
    await dashboardPage.cekTambahPembeli();
    await sidebarPage.cekEditPembeli();

    await sidebarPage.cekBeliCash();
    await dashboardPage.cekKontenBeliCash();
    await dashboardPage.cekTambahTransaksiCash();
    await sidebarPage.cekEditBeliCash();

    await sidebarPage.cekKreditPaket();
    await dashboardPage.cekKontenKreditPaket();

    await sidebarPage.cekBeliKredit();
    await dashboardPage.cekKontenBeliKredit();
    await dashboardPage.cekTambahTransaksiKredit();
    await sidebarPage.cekEditBeliKredit();

    await sidebarPage.cekBayarCicilan();
    await dashboardPage.cekKontenBayarCicilan();
    await sidebarPage.cekKontak();
    await dashboardPage.cekKontenKontak();
  });

  test("submit pembeli form", async ({ page }) => {
    await sidebarPage.cekPembeli();
    await dashboardPage.cekTambahPembeli();
    await pembeliPage.inputpembeli(
      "1234567890123456",
      "Adilla Ibrahim",
      "Cimahi, Indonesia",
      "08123456789"
    );
    await pembeliPage.submitFormPembeli();
    await pembeliPage.MemastikanPembeliMasuk();
  });

  test("submit transaksi cash form", async ({ page }) => {
    await sidebarPage.cekBeliCash();
    await dashboardPage.cekTambahTransaksiCash();
    await belicashPage.inputbelicash(
      "TXC-001",
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
    await dashboardPage.cekTambahTransaksiKredit();
    await belikreditPage.inputbelikredit(
      "K002",
      "Renataa",
      "Beat",
      "P002",
      "2025-01-01",
      "Ya",
      "Ya",
      "Tidak"
    );
    await belikreditPage.submitFormBeliKredit();
    await belikreditPage.MemastikanBeliKreditMasuk();
  });

  test("edit pembeli form", async ({ page }) => {
    await sidebarPage.cekEditPembeli();
    await dashboardPage.cekEditPembeli();
    await editpembeliPage.editPembeli("Adilla", "Baros");
    await editpembeliPage.submitFormEditPembeli();
    await editpembeliPage.MemastikanEditPembeliMasuk();
  });

  test("edit beli cash form", async ({ page }) => {
    await sidebarPage.cekEditBeliCash();
    await dashboardPage.cekEditBeliCash();
    await editbelicashPage.editbelicash("Beat", "Renataa");
    await editbelicashPage.submitFormEditBeliCash();
    await editbelicashPage.MemastikanEditBeliCashMasuk();
  });

  test("edit beli kredit form", async ({ page }) => {
    await sidebarPage.cekEditBeliKredit();
    await dashboardPage.cekEditBeliKredit();
    await editbelikreditPage.editbelikredit("P002", "Tidak");
    await editbelikreditPage.submitFormEditBeliKredit();
    await editbelikreditPage.MemastikanEditBeliKreditMasuk();
  });
});
