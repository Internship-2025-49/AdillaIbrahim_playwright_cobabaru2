import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";
import {
  FormMotor,
  FormPembeli,
  FormBeliCash,
  FormKreditPaket,
  FormBeliKredit,
  FormBayarCicilan,
  FormRoles,
  FormUser,
} from "../type/type";

const kode = faker.number.hex(255);
const merk = faker.vehicle.manufacturer();
const type = faker.vehicle.model();
const warna = faker.vehicle.color();
const harga = faker.commerce.price({
  min: 10000000,
  max: 1000000000,
  dec: 0,
});

const noKTP = faker.string.numeric(16);
const nama = faker.person.fullName();
const alamat = faker.location.streetAddress();
const telpon = faker.phone.number({ style: "human" });

const buffTanggal = faker.date.past();
const tanggal =
  buffTanggal.getFullYear() +
  "-" +
  ("0" + (buffTanggal.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + buffTanggal.getDate()).slice(-2);

const cicilan = faker.number.int({ min: 6, max: 36 }).toString();
const bunga = faker.number
  .float({ multipleOf: 0.25, min: 0, max: 10 })
  .toString();

// const KTP = faker.helpers.arrayElement(["Ada", "Tidak Ada"]);
// const KK = faker.helpers.arrayElement(["Ada", "Tidak Ada"]);
// const slipGaji = faker.helpers.arrayElement(["Ada", "Tidak Ada"]);

const role = faker.name.jobType();

const email = faker.internet.email();
const password = faker.internet.password({ length: 8 });
const password_confirmation = password;

export const defaultValueMotor: FormMotor = {
  motor_kode: kode,
  motor_merk: merk,
  motor_type: type,
  motor_warna_pilihan: warna,
  motor_harga: harga,
};

export const defaultValuePembeli: FormPembeli = {
  pembeli_No_KTP: noKTP,
  pembeli_nama: nama,
  pembeli_alamat: alamat,
  pembeli_telpon: telpon,
};

export const defaultValueBeliCash: FormBeliCash = {
  cash_kode: kode,
  // pembeli_No_KTP: noKTP,
  // motor_kode: kode,
  cash_tanggal: tanggal,
  cash_bayar: harga,
};

export const defaultValueKreditPaket: FormKreditPaket = {
  paket_kode: kode,
  paket_harga_cash: harga,
  paket_uang_muka: harga,
  paket_jumlah_cicilan: cicilan,
  paket_bunga: bunga,
  paket_nilai_cicilan: harga,
};

export const defaultValueBeliKredit: FormBeliKredit = {
  kridit_kode: kode,
  // pembeli_No_KTP: noKTP,
  // motor_kode: kode,
  // paket_kode: kode,
  kridit_tanggal: tanggal,
  // fotokopi_KTP: KTP,
  // fotokopi_KK: KK,
  // fotokopi_slip_gaji: slipGaji,
};

export const defaultValueBayarCicilan: FormBayarCicilan = {
  cicilan_kode: kode,
  // kridit_kode: kode,
  cicilan_tanggal: tanggal,
  cicilan_jumlah: harga,
  cicilan_ke: cicilan,
  cicilan_sisa_ke: cicilan,
  cicilan_sisa_harga: harga,
};

export const defaultValueRoles: FormRoles = {
  role_name: role,
};

export const defaultValueUser: FormUser = {
  name: nama,
  email: email,
  password: password,
  password_confirmation: password_confirmation,
  // role_id: role,
};
