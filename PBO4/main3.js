class SensorPasut {
    constructor (nama, lokasi){
        this.nama = nama;
        this.lokasi = lokasi;
        this._status = "mati";
    }
    aktifkan(){
        this._status = "aktif";
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah diaktifkan`;
    }
    nonaktif(){
        this._status = "nonaktif";
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah dinonaktifkan`
    }
    getStatus(){
        return `Status sensor ${this.nama} adalah ${this._status}`;
    }
}

class UsiaSensor extends SensorPasut{
    constructor (){
        
    }
}

let SensorPasutMerak = new SensorPasut("Selat Sunda", "Merak");

console.log(SensorPasutMerak.aktifkan());
console.log(SensorPasutMerak.getStatus());
console.log(SensorPasutMerak.nonaktif());
console.log(SensorPasutMerak.getStatus());