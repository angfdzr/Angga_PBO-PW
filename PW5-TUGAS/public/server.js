// Memuat modul Express
const express = require('express');
const path = require('path');

// Membuat aplikasi Express
const app = express();

// Mengatur folder 'public' untuk menyajikan file statis (HTML, CSS, gambar)
app.use(express.static(path.join(__dirname, 'public')));

// Menjalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
