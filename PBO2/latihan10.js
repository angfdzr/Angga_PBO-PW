function bentukSegitiga(alas, tinggi){
    var bentuk = ""
    for (let i = 0; i < alas; i++){
        for (let j = 0; j <= i; j++){
            bentuk += "* ";
            console.log(bentuk);
        }
    }
}

bentukSegitiga(3);

// Piramida

function buatSegitigaSamaKaki(tinggi) {
    for (let i = 1; i <= tinggi; i++) {
      let baris = "";

      for (let j = 1; j <= tinggi - i; j++) {
        baris += " ";
      }

      for (let k = 1; k <= 2 * i - 1; k++) {
        baris += "*";
      }
      console.log(baris);
    }
  }
  
  buatSegitigaSamaKaki(10);