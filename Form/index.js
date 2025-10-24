// ambil elemen form
const form = document.querySelector("form");
const resetBtn = document.querySelectorAll("button")[1]; // tombol Hapus
let vara = "halo";
var var2 = 1
// ketika tombol Save ditekan
form.addEventListener("submit", function (e) {
  e.preventDefault(); // cegah reload
  
  // ambil nilai input
  const namaDepan = document.getElementById("nama-depan").value;
  const namaBelakang = document.getElementById("nama-belakang").value;
  const password = document.getElementById("password").value;
  const alamat = document.getElementById("alamat").value;

  // checkbox olahraga favorit (bisa lebih dari satu)
  const olahragaFavorit = [];
  document.querySelectorAll("input[name='olahraga_favorit']:checked")
    .forEach(cb => olahragaFavorit.push(cb.value));

  // radio jenis kelamin
  const jenisKelamin = document.querySelector("input[name='jenis_kelamin']:checked")?.value || "Belum dipilih";

  // select olahraga
  const olahraga = document.getElementById("olahraga").value;

  // tampilkan data
  const output = `
    Nama: ${namaDepan} ${namaBelakang}
    Password: ${password}
    Alamat: ${alamat}
    Olahraga Favorit: ${olahragaFavorit.join(", ")}
    Jenis Kelamin: ${jenisKelamin}
    Olahraga Dipilih: ${olahraga}
  `;

  alert(output);
  console.log(output);
});

// ketika tombol Hapus ditekan
resetBtn.addEventListener("click", function (e) {
  e.preventDefault(); // biar gak jalan default
  form.reset(); // reset semua field
});
