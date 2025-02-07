import { test as base, BrowserContext, Page } from "@playwright/test";
import { PlaywrightLoginPage } from "./auth/login";
import { PlaywrightRegisterPage } from "./auth/register";
import { PlaywrightDashboardPage } from "./dashboard/dashboard";
import { PlaywrightSidebarPage } from "./dashboard/sidebar";
import { PlaywrightPenjualanPage } from "./dashboard/dashboardpenjualan/penjualan";

import { PlaywrightMotorPage } from "./dashboard/motor/motor";

import { PlaywrightPembeliPage } from "./dashboard/pembeli/pembeli";

import { PlaywrightBeliCashPage } from "./dashboard/belicash/belicash";
// // import { PlaywrightBeliCashEditPage } from "./dashboard/belicash/editbelicash";
// import { PlaywrightHapusBeliCashPage } from "./dashboard/belicash/hapusbelicash";

import { PlaywrightKreditPaketPage } from "./dashboard/kreditpaket/kreditpaket";

import { PlaywrightBeliKreditPage } from "./dashboard/belikredit/belikredit";
import { PlaywrightBeliKreditEditPage } from "./dashboard/belikredit/editbelikredit";
import { PlaywrightLihatBeliKreditPage } from "./dashboard/belikredit/lihatbelikredit";
import { PlaywrightHapusBeliKreditPage } from "./dashboard/belikredit/hapusbelikredit";

import { PlaywrightBayarCicilanPage } from "./dashboard/bayarcicilan/bayarcicilan";

import { PlaywrightRolePage } from "./dashboard/role/role";

import { PlaywrightUserPage } from "./dashboard/user/user";

import { PlaywrightKontakPage } from "./dashboard/kontak/kontak";

import { PlaywrightLogoutPage } from "./auth/logout";
import { register } from "module";

let context: BrowserContext;
let page: Page;

const test = base.extend({
  loginPage: async ({}, use) => {
    await use(new PlaywrightLoginPage(page));
  },
  registerPage: async ({}, use) => {
    await use(new PlaywrightRegisterPage(page));
  },
  dashboardPage: async ({}, use) => {
    await use(new PlaywrightDashboardPage(page));
  },
  sidebarPage: async ({}, use) => {
    await use(new PlaywrightSidebarPage(page));
  },
  penjualanPage: async ({}, use) => {
    await use(new PlaywrightPenjualanPage(page));
  },
  //MOTOR
  motorPage: async ({}, use) => {
    await use(new PlaywrightMotorPage(page));
  },
  editMotorPage: async ({}, use) => {
    await use(new PlaywrightMotorPage(page));
  },
  hapusmotorPage: async ({}, use) => {
    await use(new PlaywrightMotorPage(page));
  },
  //PEMBELI
  pembeliPage: async ({}, use) => {
    await use(new PlaywrightPembeliPage(page));
  },
  editpembeliPage: async ({}, use) => {
    await use(new PlaywrightPembeliPage(page));
  },
  lihatpembeliPage: async ({}, use) => {
    await use(new PlaywrightPembeliPage(page));
  },
  hapuspembeliPage: async ({}, use) => {
    await use(new PlaywrightPembeliPage(page));
  },
  //BELI CASH
  belicashPage: async ({}, use) => {
    await use(new PlaywrightBeliCashPage(page));
  },
  editbelicashPage: async ({}, use) => {
    await use(new PlaywrightBeliCashPage(page));
  },
  hapusbelicashPage: async ({}, use) => {
    await use(new PlaywrightBeliCashPage(page));
  },
  //KREDIT PAKET
  kreditpaketPage: async ({}, use) => {
    await use(new PlaywrightKreditPaketPage(page));
  },
  editkreditpaketPage: async ({}, use) => {
    await use(new PlaywrightKreditPaketPage(page));
  },
  hapuskreditpaketPage: async ({}, use) => {
    await use(new PlaywrightKreditPaketPage(page));
  },
  //BELI KREDIT
  belikreditPage: async ({}, use) => {
    await use(new PlaywrightBeliKreditPage(page));
  },
  editbelikreditPage: async ({}, use) => {
    await use(new PlaywrightBeliKreditEditPage(page));
  },
  lihatbelikreditPage: async ({}, use) => {
    await use(new PlaywrightLihatBeliKreditPage(page));
  },
  hapusbelikreditPage: async ({}, use) => {
    await use(new PlaywrightHapusBeliKreditPage(page));
  },
  //BAYAR CICILAN
  bayarcicilanPage: async ({}, use) => {
    await use(new PlaywrightBayarCicilanPage(page));
  },
  editbayarcicilanPage: async ({}, use) => {
    await use(new PlaywrightBayarCicilanPage(page));
  },
  hapusbayarcicilanPage: async ({}, use) => {
    await use(new PlaywrightBayarCicilanPage(page));
  },
  //ROLE
  rolePage: async ({}, use) => {
    await use(new PlaywrightRolePage(page));
  },
  editrolePage: async ({}, use) => {
    await use(new PlaywrightRolePage(page));
  },
  hapusrolePage: async ({}, use) => {
    await use(new PlaywrightRolePage(page));
  },
  //USER
  userPage: async ({}, use) => {
    await use(new PlaywrightUserPage(page));
  },
  edituserPage: async ({}, use) => {
    await use(new PlaywrightUserPage(page));
  },
  hapususerPage: async ({}, use) => {
    await use(new PlaywrightUserPage(page));
  },
  //KONTAK
  KontakPage: async ({}, use) => {
    await use(new PlaywrightKontakPage(page));
  },
  logoutPage: async ({}, use) => {
    await use(new PlaywrightLogoutPage(page));
  },
});

//USER
test.describe("User", () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    const loginPage = new PlaywrightLoginPage(page);
    const registerPage = new PlaywrightRegisterPage(page);

    await page.goto("/login");
    await registerPage.toRegisPage();
    await loginPage.goToLoginPage();
    await loginPage.inputlogin("adilla@gmail.com", "adilla0306");
  });

  test.beforeEach(async ({ dashboardPage }) => {
    await dashboardPage.cekTitle();
  });

  test.afterEach(async ({ page }) => {
    await page.reload();
  });

  test.afterAll(async ({}) => {
    const logoutPage = new PlaywrightLogoutPage(page);
    await logoutPage.logout();
    await context.close();
  });

  //SUBMIT
  test("submit pembeli form", async ({ sidebarPage, pembeliPage }) => {
    await sidebarPage.cekPembeli();
    await pembeliPage.inputpembeli("Adilla Ibrahim");
    await pembeliPage.submitFormPembeli();
    await pembeliPage.MemastikanPembeliMasuk();
  });

  test("submit transaksi cash form", async ({ sidebarPage, belicashPage }) => {
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

  test("submit transaksi kredit form", async ({
    sidebarPage,
    belikreditPage,
  }) => {
    await sidebarPage.cekBeliKredit();
    await belikreditPage.inputbelikredit(
      "Adilla Ibrahim",
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

  test("submit pembayaran cicilan form", async ({
    sidebarPage,
    bayarcicilanPage,
  }) => {
    await sidebarPage.cekBayarCicilan();
    await bayarcicilanPage.inputbayarcicilan("2", "2025-01-01");
    await bayarcicilanPage.submitFormBayarCicilan();
    await bayarcicilanPage.MemastikanBayarCicilanMasuk();
  });

  //EDIT
  test("edit pembeli form", async ({ editpembeliPage, lihatpembeliPage }) => {
    await editpembeliPage.editPembeli("Adilla Ibrahim");
    await editpembeliPage.submitFormEditPembeli();
    await editpembeliPage.MemastikanEditPembeliMasuk();
    await lihatpembeliPage.goToLihatPembeli();
  });

  test("edit beli cash form", async ({ editbelicashPage }) => {
    await editbelicashPage.editbelicash("Beat", "Adilla Ibrahim");
    await editbelicashPage.submitFormEditBeliCash();
    await editbelicashPage.MemastikanEditBeliCashMasuk();
  });

  test("edit beli kredit form", async ({
    editbelikreditPage,
    lihatbelikreditPage,
  }) => {
    await editbelikreditPage.editbelikredit("P002", "Tidak");
    await editbelikreditPage.submitFormEditBeliKredit();
    await editbelikreditPage.MemastikanEditBeliKreditMasuk();
    await lihatbelikreditPage.goToLihatBeliKredit();
  });

  //HAPUS
  test("hapus pembeli", async ({ sidebarPage, hapuspembeliPage }) => {
    await sidebarPage.cekPembeli();
    await hapuspembeliPage.hapusPembeli();
  });

  test("hapus beli cash", async ({ sidebarPage, hapusbelicashPage }) => {
    await sidebarPage.cekBeliCash();
    await hapusbelicashPage.hapusBeliCash();
  });

  test("hapus beli kredit", async ({ sidebarPage, hapusbelikreditPage }) => {
    await sidebarPage.cekBeliKredit();
    await hapusbelikreditPage.hapusBeliKredit();
  });

  test("kontak", async ({ sidebarPage, KontakPage }) => {
    await sidebarPage.cekKontak();
    await KontakPage.toKontakPage();
  });
});

//ADMIN
test.describe("Admin", () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    const loginPage = new PlaywrightLoginPage(page);
    const registerPage = new PlaywrightRegisterPage(page);

    await page.goto("/login");
    await registerPage.toRegisPage();
    await loginPage.goToLoginPage();
    await loginPage.inputlogin("admin@gmail.com", "admin123");
  });

  test.beforeEach(async ({ dashboardPage }) => {
    await dashboardPage.cekTitle();
  });

  test.afterEach(async ({ page }) => {
    await page.reload();
  });

  test.afterAll(async ({}) => {
    const logoutPage = new PlaywrightLogoutPage(page);
    await logoutPage.logout();
    await context.close();
  });

  test("dashboard penjualan", async ({ sidebarPage, penjualanPage }) => {
    await sidebarPage.cekPenjualan();
    await penjualanPage.toPenjualanPage();
  });

  //SUBMIT
  test("submit motor form", async ({ sidebarPage, motorPage }) => {
    await sidebarPage.cekMotor();
    await motorPage.inputMotor(
      "Kawasaki",
      "Kawasaki KLX 150",
      "merah",
      "25000000"
    );
    await motorPage.submitFormMotor();
    await motorPage.MemastikanMotorMasuk();
  });

  test("submit pembeli form", async ({ sidebarPage, pembeliPage }) => {
    await sidebarPage.cekPembeli();
    await pembeliPage.inputpembeli("Adilla Ibrahim");
    await pembeliPage.submitFormPembeli();
    await pembeliPage.MemastikanPembeliMasuk();
  });

  test("submit transaksi cash form", async ({ sidebarPage, belicashPage }) => {
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

  test("submit kredit paket form", async ({ sidebarPage, kreditpaketPage }) => {
    await sidebarPage.cekKreditPaket();
    await kreditpaketPage.inputKreditPaket(
      "25000000",
      "2000000",
      "36",
      "3",
      "1800000"
    );
    await kreditpaketPage.submitFormKreditPaket();
    await kreditpaketPage.MemastikanKreditPaketMasuk();
  });

  test("submit transaksi kredit form", async ({
    sidebarPage,
    belikreditPage,
  }) => {
    await sidebarPage.cekBeliKredit();
    await belikreditPage.inputbelikredit(
      "Adilla Ibrahim",
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

  test("submit pembayaran cicilan form", async ({
    sidebarPage,
    bayarcicilanPage,
  }) => {
    await sidebarPage.cekBayarCicilan();
    await bayarcicilanPage.inputbayarcicilan("8", "2025-01-01");
    await bayarcicilanPage.submitFormBayarCicilan();
    await bayarcicilanPage.MemastikanBayarCicilanMasuk();
  });

  test("submit role form", async ({ sidebarPage, rolePage }) => {
    await sidebarPage.cekRoles();
    await rolePage.inputRoles("hai");
    await rolePage.submitFormRoles();
    await rolePage.MemastikanRolesMasuk();
  });

  test("submit user form", async ({ sidebarPage, userPage }) => {
    await sidebarPage.cekUser();
    await userPage.inputUser();
    await userPage.submitFormUser();
    await userPage.MemastikanUserMasuk();
  });

  //EDIT
  test("edit motor form", async ({ editMotorPage, sidebarPage }) => {
    await sidebarPage.cekMotor();
    await editMotorPage.editMotor("Suzuki", "Suzuki GSX-S150");
    await editMotorPage.submitEditMotor();
    await editMotorPage.MemastikanEditMotorMasuk();
  });

  test("edit pembeli form", async ({ editpembeliPage, lihatpembeliPage }) => {
    await editpembeliPage.editPembeli("Adilla Ibrahim");
    await editpembeliPage.submitFormEditPembeli();
    await editpembeliPage.MemastikanEditPembeliMasuk();
    await lihatpembeliPage.goToLihatPembeli();
  });

  test("edit beli cash form", async ({ editbelicashPage }) => {
    await editbelicashPage.editbelicash("Beat", "Adilla Ibrahim");
    await editbelicashPage.submitFormEditBeliCash();
    await editbelicashPage.MemastikanEditBeliCashMasuk();
  });

  test("edit kredit paket form", async ({
    editkreditpaketPage,
    sidebarPage,
  }) => {
    await sidebarPage.cekKreditPaket();
    await editkreditpaketPage.editKreditPaket("20000000", "15000000");
    await editkreditpaketPage.submitFormKreditPaket();
    await editkreditpaketPage.MemastikanKreditPaketMasuk();
  });

  test("edit beli kredit form", async ({
    editbelikreditPage,
    lihatbelikreditPage,
  }) => {
    await editbelikreditPage.editbelikredit("P002", "Tidak");
    await editbelikreditPage.submitFormEditBeliKredit();
    await editbelikreditPage.MemastikanEditBeliKreditMasuk();
    await lihatbelikreditPage.goToLihatBeliKredit();
  });

  test("edit bayar cicilan form", async ({
    editbayarcicilanPage,
    sidebarPage,
  }) => {
    await sidebarPage.cekBayarCicilan();
    await editbayarcicilanPage.editBayarCicilan("10000000", "3");
    await editbayarcicilanPage.submitEditBayarCicilan();
    await editbayarcicilanPage.MemastikanEditBayarCicilanMasuk();
  });

  test("edit roles form", async ({ editrolePage, sidebarPage }) => {
    await sidebarPage.cekRoles();
    await editrolePage.editRoles("hallo");
    await editrolePage.submitEditRoles();
    await editrolePage.MemastikanEditRolesMasuk();
  });

  test("edit user form", async ({ edituserPage, sidebarPage }) => {
    await sidebarPage.cekUser();
    await edituserPage.editUser("hallo");
    await edituserPage.submitEditUser();
    await edituserPage.MemastikanEditUserMasuk();
  });

  //HAPUS
  test("hapus motor", async ({ sidebarPage, hapusmotorPage }) => {
    await sidebarPage.cekMotor();
    await hapusmotorPage.hapusMotor();
  });

  test("hapus pembeli", async ({ sidebarPage, hapuspembeliPage }) => {
    await sidebarPage.cekPembeli();
    await hapuspembeliPage.hapusPembeli();
  });

  test("hapus beli cash", async ({ sidebarPage, hapusbelicashPage }) => {
    await sidebarPage.cekBeliCash();
    await hapusbelicashPage.hapusBeliCash();
  });

  test("hapus kredit paket", async ({ sidebarPage, hapuskreditpaketPage }) => {
    await sidebarPage.cekKreditPaket();
    await hapuskreditpaketPage.hapusKreditPaket();
  });

  test("hapus beli kredit", async ({ sidebarPage, hapusbelikreditPage }) => {
    await sidebarPage.cekBeliKredit();
    await hapusbelikreditPage.hapusBeliKredit();
  });

  test("hapus bayar cicilan", async ({
    sidebarPage,
    hapusbayarcicilanPage,
  }) => {
    await sidebarPage.cekBayarCicilan();
    await hapusbayarcicilanPage.hapusBayarCicilan();
  });

  test("hapus role", async ({ sidebarPage, hapusrolePage }) => {
    await sidebarPage.cekRoles();
    await hapusrolePage.hapusRoles();
  });

  test("hapus user", async ({ sidebarPage, hapususerPage }) => {
    await sidebarPage.cekUser();
    await hapususerPage.hapusUser();
  });

  test("kontak", async ({ sidebarPage, KontakPage }) => {
    await sidebarPage.cekKontak();
    await KontakPage.toKontakPage();
  });
});
