const alertBtn = document.querySelector(".alertBtn");
const promptBtn = document.querySelector('.promptBtn');
const confirmBtn = document.querySelector('.confirmBtn')
alertBtn.addEventListener("click", function () {
    alert("Halo, Ini Alert!");
});

promptBtn.addEventListener('click', function(){
    const hasil = prompt("Masukkan Sesuatu");
    document.write(hasil);
});


confirmBtn.addEventListener('click', function(){
    const hasil = confirm("Menerima?");
    document.write(hasil);
})