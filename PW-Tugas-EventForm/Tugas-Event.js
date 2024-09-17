document.title = 'Tugas-Form-Event';
const body = document.body;
body.style.backgroundColor = 'bisque';
body.style.fontFamily = 'Verdana, sans-serif'; // Font default untuk body

// Container div untuk heading
const div = document.createElement('div');
div.style.textAlign = 'center';
div.style.fontFamily = 'verdana';

const h2 = document.createElement('h2');
h2.innerHTML = 'DATA MAHASISWA';
h2.style.color = '#007bff'; // Menambahkan warna
const h3 = document.createElement('h3');
h3.innerHTML = 'SISTEM INFORMASI KELAUTAN';
h3.style.color = '#007bff'; // Menambahkan warna

div.append(h2);
div.append(h3);
document.body.append(div);

// Form
const form = document.createElement('form');
form.style.margin = '20px';
form.style.padding = '20px';
form.style.border = '1px solid #ddd';
form.style.borderRadius = '10px'; // Membuat sudut lebih membulat
form.style.backgroundColor = '#ffffff'; // Background form putih

const namaInput = createInput('text', 'nama', 'Nama Lengkap');
const nimInput = createInput('text', 'nim', 'Nomor Induk Mahasiswa');
const jurusanInput = createInput('text', 'jurusan', 'Jurusan');
const alamatInput = createInput('text', 'alamat', 'Alamat');
const submitButton = createButton('Tambah Mahasiswa');

function createInput(type, id, placeholder) {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    input.style.display = 'block';
    input.style.marginBottom = '10px';
    input.style.padding = '10px'; // Padding lebih besar
    input.style.width = '100%';
    input.style.boxSizing = 'border-box';
    input.style.border = '1px solid #ccc'; // Border input lebih lembut
    input.style.borderRadius = '5px'; // Border radius untuk input
    return input;
}

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.type = 'submit';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.margin = '0 auto';
    button.style.display = 'block';
    button.style.fontSize = '16px'; // Ukuran font yang lebih besar
    return button;
}

form.append(namaInput);
form.append(nimInput);
form.append(jurusanInput);
form.append(alamatInput);
form.append(submitButton);

document.body.append(form);

// Table
const table = document.createElement('table');
table.id = 'mahasiswaTable';
table.style.width = '100%';
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';

const thead = document.createElement('thead');
thead.style.backgroundColor = '#007bff';
thead.style.color = '#fff';
thead.style.textAlign = 'left';

thead.innerHTML = `
  <tr>
    <th>Nama Lengkap</th>
    <th>Nomor Induk Mahasiswa</th>
    <th>Jurusan</th>
    <th>Alamat</th>
    <th>Action</th>
  </tr>
`;

const tbody = document.createElement('tbody');

table.append(thead);
table.append(tbody);

document.body.append(table);

table.querySelectorAll('th').forEach(th => {
    th.style.padding = '10px';
    th.style.border = '1px solid #ddd';
});

table.querySelectorAll('td').forEach(td => {
    td.style.padding = '10px';
    td.style.border = '1px solid #ddd';
    td.style.transition = 'background-color 0.3s'; // Transisi saat hover
});

// Event Listeners
submitButton.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'orange';
});

submitButton.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = '#007bff';
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const nama = namaInput.value;
    const nim = nimInput.value;
    const jurusan = jurusanInput.value;
    const alamat = alamatInput.value;

    if (nama && nim && jurusan && alamat) {
        const table = document.getElementById('mahasiswaTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${nama}</td>
            <td>${nim}</td>
            <td>${jurusan}</td>
            <td>${alamat}</td>
            <td><button class="delete-button">Hapus</button></td>
        `;

        newRow.querySelector('.delete-button').addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        });

        nimInput.value = '';
        namaInput.value = '';
        jurusanInput.value = '';
        alamatInput.value = '';
    } else {
        alert('Semua field harus diisi!');
    }
});

// Hover effect for table rows
table.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'TD') {
        event.target.parentElement.style.backgroundColor = '#f0f0f0';
    }
});

table.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'TD') {
        event.target.parentElement.style.backgroundColor = '';
    }
});

// Style for delete buttons
const style = document.createElement('style');
style.textContent = `
    .delete-button {
        padding: 5px 10px;
        background-color: #dc3545;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s, transform 0.2s;
    }

    .delete-button:hover {
        background-color: #c82333;
        transform: scale(1.05);
    }

    .delete-button:active {
        background-color: #bd2130;
    }
`;
document.head.append(style);