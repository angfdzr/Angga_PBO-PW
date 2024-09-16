let umur;
let nama;

nama = prompt("Siapa nama Anda?");
umur = prompt("Berapa usia Anda?");

if (umur <= 20 && umur >= 15){
        alert("Selamat Datang " + nama +", usia Anda " + umur + ", Anda belum cukup umur");
    }else if (umur <= 15) {
        alert("Selamat Datang " + nama +", usia Anda " + umur + ", Anda terlalu muda");
    }else {
        alert("Selamat Datang " + nama +", usia Anda " + umur + ", Anda sudah dewasa dan cukup umur");
    }