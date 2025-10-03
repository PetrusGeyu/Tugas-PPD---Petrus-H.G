const buttons = document.querySelectorAll('.btn-kota');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close');

// kalau tombol diklik
buttons.forEach((btn) => {
  btn.addEventListener('click', function () {
    const imgSrc = btn.getAttribute('data-img'); // ambil gambar dari atribut
    popupImg.src = "https://cdn.betahita.id/5/8/9/7/5897_840x576.jpeg"; // set gambar ke popup
    popup.style.display = 'flex'; // tampilkan popup
  });
});

// tombol close ditekan
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// klik area gelap di luar gambar untuk close
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
