// script.js - Pemutar Musik Aman & Animasi
var myAudio = document.getElementById("myAudio");
var musicBtn = document.getElementById("music-btn");

function toggleMusic() {
  if (myAudio.paused) {
    myAudio.play();
    musicBtn.innerHTML = "❚❚ Pause"; // Ganti jadi Pause
    musicBtn.style.background = "#ffcccc"; // Warna soft
    musicBtn.style.color = "#1a0a0a";
  } else {
    myAudio.pause();
    musicBtn.innerHTML = "▶ Play"; // Ganti jadi Play
    musicBtn.style.background = "#ff4d4d"; // Warna merah
    musicBtn.style.color = "white";
  }
}

// Menangani error jika file lagu tidak ditemukan
myAudio.onerror = function() {
  console.log("Error: File lagu song.mp3 tidak ditemukan!");
  musicBtn.innerHTML = "Song Error";
  musicBtn.disabled = true;
};

// Menangani error jika file chibi tidak ditemukan
document.addEventListener("DOMContentLoaded", function() {
    var chibiImg = document.querySelector(".chibi-img");
    if (chibiImg) {
        chibiImg.onerror = function() {
            this.src = "https://via.placeholder.com/200?text=Chibi+Gagal"; // Gambar sementara
        };
    }
});
