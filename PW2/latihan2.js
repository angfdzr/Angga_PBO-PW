// const h1 = document.createElement("h1");
// h1.innerHTML = ("Angbro");
// document.body.append(h1);
// const img = document.createElement("img");
// img.src = "gambar/te.jpg";
// document.body.append(img);

const form = document.createElement('form')
form.innerHTML = "<input type='text' placeholder='Masukkan Nama'> "
form.innerHTML += "<input type='submit' value='kirim'>"
document.body.append(form)

// const form = createelem("form");
// form.innerHTML = "<input type='text' placeholder='Masukkan Nama'> <input type='submit' value='Kirim'>";
// document.body.append(form);

const table = document.createElement("table");
table.innerHTML = `
  <thead>
    <tr>
      <th>Nama</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Angga</td>
      <td>anggafadzar21@gmail.com</td>
    </tr>
    <tr>
      <td>cihuy</td>
      <td>jcihuy@gmail.com</td>
    </tr>
  </tbody>
`;

document.body.append(table);


// const table = document.createElement("table");
// table.style.border = "1px solid black"
// table.innerHTML = `
// <table
//   <tr><td>No</td>
//   <td>Nama</td></tr>
//   <tr><td>1</td>
//   <td>Angga Fadzar</td></tr>
//   </table>
// `;
// document.body.append(table);

const form2 = document.createElement("form");
document.body.append(form2);

const input = document.createElement("input");
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Nama Lengkap');

const tombol = document.createElement("input");
tombol.setAttribute('type', 'submit');
tombol.setAttribute('value', 'simpan');

form2.append(input);
form2.append(tombol);