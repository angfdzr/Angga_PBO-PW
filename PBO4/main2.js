class Kapal{
    constructor(nama, jenis, kapasitas, panjang, lebar){
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }
    infoKapal(){
        return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas}memiliki dimensi ${this.panjang} kali ${this.lebar}`;
    }
}

class infoTiket extends Kapal{
    constructor(){
        super(nama,jenis,this.kapasitas,this.panjang,this.lebar);
    }
    infoTiket(){
    }
}

let kapalPenumpang = new Kapal ("Budiono Siregar", "Ferry", 500, 200, 100);

console.log(kapalPenumpang.infoKapal());
document.getElementById("objek").innerHTML = kapalPenumpang.infoKapal();