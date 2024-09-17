function proses(){
    let nama = document.getElementById('nama');
    const tulis = document.getElementById('tulis');

    tulis.innerHTML = "Selamat Datang " + nama.value + " si Ganteng ";
}

function ganti(){
    const tulis = document.getElementById("tulis");
    tulis.style.color = "red";

    tulis.innerHTML = "Mouse baru saja lewat";
}