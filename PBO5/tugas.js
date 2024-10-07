// Kelas induk Kapal dengan enkapsulasi
class Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna) {
      let _nama = nama;
      let _nomor = nomor;
      let _kapasitas = kapasitas;
  
      this.jenis = jenis;
      this.warna = warna;
  
      // Getter dan Setter untuk properti yang dienkapsulasi
      this.getNama = function () {
        return _nama;
      };
      
      this.setNama = function (namaBaru) {
        _nama = namaBaru;
      };
  
      this.getNomor = function () {
        return _nomor;
      };
  
      this.setNomor = function (nomorBaru) {
        _nomor = nomorBaru;
      };
  
      this.getKapasitas = function () {
        return _kapasitas;
      };
  
      this.setKapasitas = function (kapasitasBaru) {
        if (kapasitasBaru > 0) {
          _kapasitas = kapasitasBaru;
        } else {
          console.log("Kapasitas tidak valid.");
        }
      };
    }
  
    // Method untuk menampilkan info kapal
    infoKapal() {
      return `Kapal ini bernama ${this.getNama()} yang berjenis kapal ${this.jenis} dengan nomor kapal ${this.getNomor()} dan memiliki kapasitas sekitar ${this.getKapasitas()} serta warna ${this.warna}.`;
    }
  }
  
  // Kelas turunan Penumpang
  class Penumpang extends Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna, penumpang) {
      super(nama, jenis, nomor, kapasitas, warna);
      this.penumpang = penumpang;
    }
  
    // Override method infoKapal
    infoKapal() {
      return `${super.infoKapal()} Kapal ini adalah kapal penumpang yang membawa ${this.penumpang} orang.`;
    }
  }
  
  // Kelas turunan Kargo
  class Kargo extends Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna, muatan) {
      super(nama, jenis, nomor, kapasitas, warna);
      this.muatan = muatan;
    }
  
    // Override method infoKapal
    infoKapal() {
      return `${super.infoKapal()} Kapal ini digunakan untuk mengangkut ${this.muatan} ton muatan.`;
    }
  }
  
  // Kelas turunan Nelayan
  class Nelayan extends Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna, jaring) {
      super(nama, jenis, nomor, kapasitas, warna);
      this.jaring = jaring;
    }
  
    // Override method infoKapal
    infoKapal() {
      return `${super.infoKapal()} Kapal ini dilengkapi dengan jaring sepanjang ${this.jaring} meter untuk menangkap ikan.`;
    }
  }
  
  // Kelas turunan Kapal Pesiar
  class KapalPesiar extends Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna, fasilitas) {
      super(nama, jenis, nomor, kapasitas, warna);
      this.fasilitas = fasilitas;
    }
  
    // Override method infoKapal
    infoKapal() {
      return `${super.infoKapal()} Kapal ini adalah kapal pesiar dengan fasilitas ${this.fasilitas}.`;
    }
  }
  
  // Kelas turunan Patroli
  class Patroli extends Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna, senjata) {
      super(nama, jenis, nomor, kapasitas, warna);
      this.senjata = senjata;
    }
  
    // Override method infoKapal
    infoKapal() {
      return `${super.infoKapal()} Kapal ini adalah kapal patroli yang dipersenjatai dengan ${this.senjata}.`;
    }
  }
  
  // Membuat objek dari setiap kelas
  const kapalPenumpang = new Penumpang("Bintang Laut", "Feri", "12345", 100, "Biru", 80);
  const kapalKargo = new Kargo("Samudra", "Kapal Kargo", "67890", 2000, "Putih", 1500);
  const kapalNelayan = new Nelayan("Pancing Jaya", "Kapal Nelayan", "11223", 50, "Hijau", 100);
  const kapalPesiar = new KapalPesiar("Royal Ocean", "Pesiar", "33445", 500, "Emas", "Kolam renang, Restoran");
  const kapalPatroli = new Patroli("Penjaga Pantai", "Patroli", "55667", 10, "Merah", "Senjata otomatis");
  
  // Menampilkan info dari setiap kapal
  console.log(kapalPenumpang.infoKapal());
  console.log(kapalKargo.infoKapal());
  console.log(kapalNelayan.infoKapal());
  console.log(kapalPesiar.infoKapal());
  console.log(kapalPatroli.infoKapal());
  
  // Menggunakan getter dan setter untuk mengakses/mengubah properti yang dienkapsulasi
  kapalPenumpang.setNama("Laut Biru");
  console.log(kapalPenumpang.infoKapal());
  