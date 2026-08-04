// Smooth Scroll Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Background Music Controller
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const musicStatus = document.querySelector('.music-status');

if (musicBtn && bgMusic) {
  musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.textContent = '⏸ Pause';
      if (musicStatus) musicStatus.textContent = 'Playing';
    } else {
      bgMusic.pause();
      musicBtn.textContent = '▶ Play';
      if (musicStatus) musicStatus.textContent = 'Paused';
    }
  });
}

// Easter Egg Interactive Button
const easterBtn = document.getElementById('easterBtn');
const easterMessage = document.getElementById('easterMessage');

if (easterBtn && easterMessage) {
  easterBtn.addEventListener('click', () => {
    if (easterMessage.style.display === 'block') {
      easterMessage.style.display = 'none';
      easterBtn.textContent = 'Click me! 🎁';
    } else {
      easterMessage.style.display = 'block';
      easterBtn.textContent = 'Tutup ❌';
    }
  });
}
