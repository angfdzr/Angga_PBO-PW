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
        <span class="delete-btn-curhat" onclick="deleteCurhat(this)">Hapus</span>
        <span class="edit-btn-curhat" onclick="editCurhat(this)">Edit</span>
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
