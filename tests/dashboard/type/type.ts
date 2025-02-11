export interface FormMotor {
  motor_kode: string;
  motor_merk: string;
  motor_type: string;
  motor_warna_pilihan: string;
  motor_harga: string;
}

export interface FormPembeli {
  pembeli_No_KTP: string;
  pembeli_nama: string;
  pembeli_alamat: string;
  pembeli_telpon: string;
}

export interface FormBeliCash {
  cash_kode: string;
  pembeli_No_KTP: string;
  // motor_kode: string;
  cash_tanggal: string;
  cash_bayar: string;
}

export interface FormKreditPaket {
  paket_kode: string;
  paket_harga_cash: string;
  paket_uang_muka: string;
  paket_jumlah_cicilan: string;
  paket_bunga: string;
  paket_nilai_cicilan: string;
}

export interface FormBeliKredit {
  kridit_kode: string;
  // pembeli_No_KTP: string;
  // // motor_kode: string;
  // paket_kode: string;
  kridit_tanggal: string;
  fotokopi_KTP: string;
  fotokopi_KK: string;
  fotokopi_slip_gaji: string;
}

export interface FormBayarCicilan {
  cicilan_kode: string;
  // kridit_kode: string;
  cicilan_tanggal: string;
  cicilan_jumlah: string;
  cicilan_ke: string;
  cicilan_sisa_ke: string;
  cicilan_sisa_harga: string;
}

export interface FormRoles {
  role_name: string;
}

export interface FormUser {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  // role_id: string;
}
