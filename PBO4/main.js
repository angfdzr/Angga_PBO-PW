// Object
const sik = {
    depan : "angga",
    belakang : "fadzar",
    nim : 2306201,
    prodi : "SIK"
}

console.log(sik.depan);
console.log(sik.belakang);
console.log(sik.nim);
console.log(sik.prodi);

const sik1 = {}

sik1.atb1 = "contoh atribut 1";
sik1.atb2 = "contoh atribut 2";
sik1.atb3 = "contoh atribut 3";

console.log(sik1.atb1);
console.log(sik1.atb2);
console.log(sik1.atb3);

delete sik.depan;

let orang = {
    nama : "Angga",
    pekerjaan : "pengusaha",
    kendaraan : {
        mobil : "fortuner",
        motor : "kawasaki",
        pesawat : "boeing"
    }
}

console.log(orang.kendaraan.mobil);

orang.kendaraan.mobil = "pajero"
console.log(orang.kendaraan.mobil);

let tampil = "nama saya "+ orang.nama + ", saya bekerja sebagai "+ orang.pekerjaan + ". Sehari-hari saya terbiasa nebeng teman menggunakan pesawat pribadi dengan jenis "+ orang.kendaraan.pesawat + ".";

document.getElementById("objek").innerHTML = tampil;

let mahasiswa = {
    namaDpn: "Angga",
    namaBlkng: "Fadzar",
    fullname : function() {
        return this.namaDpn + " " + this.namaBlkng;
    }
}

tampilMhs = "Nama saya "+ mahasiswa.namaDpn + " dan nama lengkap saya "+ mahasiswa.fullname();
document.getElementById("objek").innerHTML = tampilMhs;

// Constructor
function dataMhs(nama, nim, prodi){
    this.nama = nama;
    this.nim = nim;
    this.prodi = prodi;
}

const mhs1 = new dataMhs("Angga Fadzar", "2306201", "SIK");
const mhs2 = new dataMhs("Annisa Nur Fadillah", "2300349", "SIK");

console.log("nama mahasiswa pertama adalah: "+mhs1.nama);
console.log("nama mahasiswa kedua adalah: "+mhs2.nama);