//FILM PENDEK
document.getElementById("edit-btn").addEventListener("click", showForm);
document.getElementById("tambah").addEventListener("click", addStory);

function showForm() {
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("edit-btn").style.display = "none"; // Sembunyikan tombol Edit saat form muncul
}

function hideForm() {
  document.getElementById("formContainer").style.display = "none";
  document.getElementById("edit-btn").style.display = "block"; // Tampilkan kembali tombol Edit
  document.getElementById("no").value = "";
  document.getElementById("judul").value = "";
  document.getElementById("sinopsis").value = "";
  document.getElementById("penulis").value = "";
  document.getElementById("waktu").value = "";
}

function addStory() {
  const no = document.getElementById("no").value;
  const judul = document.getElementById("judul").value;
  const sinopsis = document.getElementById("sinopsis").value;
  const penulis = document.getElementById("penulis").value;
  const waktu = document.getElementById("waktu").value;

  const table = document.getElementById("ceritaTable");

  // Cek apakah baris dengan nomor yang sama sudah ada
  // for (let i = 1; i < table.rows.length; i++) {
  //     if (table.rows[i].cells[0].innerText === no) {
  //         alert('Cerita dengan nomor yang sama sudah ada!');
  //         return; // Keluar dari fungsi jika sudah ada
  //     }
  // }

  // Menambahkan data ke tabel
  const row = table.insertRow();
  row.insertCell(0).innerText = no;
  row.insertCell(1).innerText = judul;
  row.insertCell(2).innerText = sinopsis;
  row.insertCell(3).innerText = penulis;
  row.insertCell(4).innerText = waktu;

  // Tambahkan tombol Edit dan Hapus
  const actionCell = row.insertCell(5);

  // Tombol Edit
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.className = 'edit-btn-table';
  editBtn.onclick = function() {
      editStory(row);
  };
  actionCell.appendChild(editBtn);

  // Tombol Hapus
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Hapus';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function() {
      deleteStory(row);
  };
  actionCell.appendChild(deleteBtn);

  // Menyembunyikan form setelah menambahkan cerita
  hideForm();
}

function deleteStory(row) {
  const table = document.getElementById("ceritaTable");
  const rowIndex = row.rowIndex; // Ambil index baris
  table.deleteRow(rowIndex); // Hapus baris cerita
}

function editStory(row) {
  const cells = row.cells;
  // Isi form dengan data yang ada di baris
  document.getElementById("no").value = cells[0].innerText;
  document.getElementById("judul").value = cells[1].innerText;
  document.getElementById("sinopsis").value = cells[2].innerText;
  document.getElementById("penulis").value = cells[3].innerText;
  document.getElementById("waktu").value = cells[4].innerText;

  // Sembunyikan tombol Edit dan tampilkan form
  showForm();
  document.getElementById("edit-btn").style.display = "none";
}

// CURHAT
document.getElementById('curhatTambah').addEventListener('click', addCurhat);

function addCurhat() {
    const curhatJudulValue = document.getElementById('curhatJudul').value;
    const curhatIsiValue = document.getElementById('curhatIsi').value;

    // Buat elemen curhat baru
    const curhatItem = document.createElement('div');
    curhatItem.className = 'curhat-item';

    // Tambahkan judul dan isi ke curhatItem
    curhatItem.innerHTML = `
        <h3>${curhatJudulValue}</h3>
        <p>${curhatIsiValue}</p>
        <span class="delete-btn" onclick="deleteCurhat(this)">Hapus</span>
        <span class="edit-btn" onclick="editCurhat(this)">Edit</span>
    `;

    // Tambahkan curhatItem ke container
    document.getElementById('curhatContainer').appendChild(curhatItem);

    // Reset form
    resetForm();
}

function deleteCurhat(element) {
    const curhatItem = element.parentElement;
    curhatItem.remove(); // Hapus curhat dari daftar
}

function editCurhat(element) {
    const curhatItem = element.parentElement;
    const curhatTitleValue = curhatItem.querySelector('h3').innerText;
    const curhatContentValue = curhatItem.querySelector('p').innerText;

    // Isi form dengan data curhat yang ada
    document.getElementById('curhatJudul').value = curhatTitleValue;
    document.getElementById('curhatIsi').value = curhatContentValue;

    // Hapus curhat yang sedang diedit
    curhatItem.remove();
}

function resetForm() {
    document.getElementById('curhatJudul').value = '';
    document.getElementById('curhatIsi').value = '';
}

