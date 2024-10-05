class Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna) {
      this.nama = nama;
      this.jenis = jenis;
      this.nomor = nomor;
      this.kapasitas = kapasitas;
      this.warna = warna;
    }
  
    // Method untuk menampilkan info kapal
    infoKapal() {
      return `Kapal ini bernama ${this.nama} yang berjenis kapal ${this.jenis} dengan nomor kapal ${this.nomor} dan memiliki kapasitas sekitar ${this.kapasitas} serta warna ${this.warna} yang keren.`;
    }
  }
  
  class Penumpang extends Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna, penumpang) {
      super(nama, jenis, nomor, kapasitas, warna);
      let _penumpang = penumpang; // Properti dengan enkapsulasi
  
      // Method untuk menambahkan penumpang
      this.tambahPenumpang = function (jumlah) {
        if (jumlah > 0 && jumlah + _penumpang <= this.kapasitas) {
          _penumpang += jumlah;
          console.log(`${jumlah} penumpang berhasil ditambahkan. Total penumpang: ${_penumpang}`);
        } else {
          console.log("Tidak bisa menambahkan penumpang, kapasitas penuh atau jumlah tidak valid.");
        }
      };
  
      // Method publik untuk mendapatkan jumlah penumpang
      this.getPenumpang = function () {
        return _penumpang;
      };
    }
  
    // Method untuk menampilkan info penumpang
    infoPenumpang() {
      return `Kapal ${this.nama} saat ini membawa ${this.getPenumpang()} penumpang.`;
    }
  }
  
  // Membuat objek kapal baru
  const kapalPenumpang = new Penumpang("Bintang Laut", "Feri", "12345", 100, "Biru", 80);
  
  console.log(kapalPenumpang.infoKapal()); // Menampilkan informasi kapal
  console.log(kapalPenumpang.infoPenumpang()); // Menampilkan jumlah penumpang awal
  
  kapalPenumpang.tambahPenumpang(20); // Menambahkan 20 penumpang
  console.log(kapalPenumpang.infoPenumpang()); // Menampilkan jumlah penumpang setelah ditambah