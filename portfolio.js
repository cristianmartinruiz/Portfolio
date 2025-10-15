document.addEventListener("DOMContentLoaded", () => {

// =========================
// MENÚ HAMBURGER GENERAL
// =========================
const hamburgers = document.querySelectorAll('.hamburger-btn');
const menus = document.querySelectorAll('.wellcome-menu');

hamburgers.forEach(btn => {
  btn.addEventListener('click', () => {
    menus.forEach(menu => menu.classList.toggle('open'));
  });
});

// CERRAR MENÚ AL HACER CLICK EN UN LINK
const navLinks = document.querySelectorAll('.wellcome-menu .nav-links li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menus.forEach(menu => menu.classList.remove('open'));
  });
});

// ANIMACIÓN DE NAV LINKS
navLinks.forEach(link => {
  const line = link.querySelector(".line");
  const text = link.querySelector("span");

  const activateLine = () => {
    if (line && window.innerWidth > 550) {
      line.style.width = "140px";
      line.style.height = "4px";
    }
    if (text) text.style.fontWeight = "700"; // siempre bold
  }

  const deactivateLine = () => {
    if (line && window.innerWidth > 550) {
      line.style.width = "80px";
      line.style.height = "2px";
    }
    if (text) text.style.fontWeight = "500"; // siempre normal si no activo
  }

  if (link.classList.contains("active")) activateLine();

  link.addEventListener("mouseenter", activateLine);
  link.addEventListener("mouseleave", () => {
    if (!link.classList.contains("active")) deactivateLine();
  });
});

  // =========================
  // BARRA DE PROGRESO EXPERIENCE
  // =========================
  const progressBar = document.getElementById("progress-bar");
  const progressTrack = document.getElementById("progress-track");
  const allYears = document.querySelectorAll(".experience-year");

  const updateProgressPosition = () => {
    if (allYears.length === 0) return;

    const firstYear = allYears[0];
    const lastYear = allYears[allYears.length - 1];

    const firstRect = firstYear.getBoundingClientRect();
    const scrollLeft = window.scrollX || window.pageXOffset;
    const leftPosition = firstRect.left + scrollLeft + firstRect.width / 2;

    progressTrack.style.left = `${leftPosition}px`;
    progressBar.style.left = `${leftPosition}px`;

    const trackTop = firstYear.getBoundingClientRect().top + window.scrollY + firstRect.height / 2;
    const lastRect = lastYear.getBoundingClientRect();
    const trackBottom = lastRect.top + window.scrollY + lastRect.height / 2;

    const trackHeight = trackBottom - trackTop;
    progressTrack.style.top = `${trackTop}px`;
    progressTrack.style.height = `${trackHeight}px`;

    progressBar.style.top = `${trackTop}px`;
    progressBar.dataset.maxHeight = trackHeight;
  }

  const updateProgressHeight = () => {
    if (!progressBar) return;
    const maxHeight = parseFloat(progressBar.dataset.maxHeight) || 0;
    const scrollMiddle = window.scrollY + window.innerHeight / 2;
    let progress = (scrollMiddle - parseFloat(progressBar.style.top)) / maxHeight;
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.height = `${progress * maxHeight}px`;
  }

  updateProgressPosition();
  updateProgressHeight();
  window.addEventListener("scroll", updateProgressHeight);
  window.addEventListener("resize", () => {
    updateProgressPosition();
    updateProgressHeight();
  });

  // =========================
  // BARRA DE PROGRESO EDUCATION
  // =========================
  const eduProgressBar = document.getElementById("edu-progress-bar");
  const eduProgressTrack = document.getElementById("edu-progress-track");
  const allEduYears = document.querySelectorAll(".education-year");

  const updateEduProgressPosition = () => {
    if (allEduYears.length === 0) return;

    const firstYear = allEduYears[0];
    const lastYear = allEduYears[allEduYears.length - 1];

    const firstRect = firstYear.getBoundingClientRect();
    const scrollLeft = window.scrollX || window.pageXOffset;
    const leftPosition = firstRect.left + scrollLeft + firstRect.width / 2;

    eduProgressTrack.style.left = `${leftPosition}px`;
    eduProgressBar.style.left = `${leftPosition}px`;

    const trackTop = firstYear.getBoundingClientRect().top + window.scrollY + firstRect.height / 2;
    const lastRect = lastYear.getBoundingClientRect();
    const trackBottom = lastRect.top + window.scrollY + lastRect.height / 2;

    const trackHeight = trackBottom - trackTop;
    eduProgressTrack.style.top = `${trackTop}px`;
    eduProgressTrack.style.height = `${trackHeight}px`;

    eduProgressBar.style.top = `${trackTop}px`;
    eduProgressBar.dataset.maxHeight = trackHeight;
  }

  const updateEduProgressHeight = () => {
    if (!eduProgressBar) return;
    const maxHeight = parseFloat(eduProgressBar.dataset.maxHeight) || 0;
    const scrollMiddle = window.scrollY + window.innerHeight / 2;
    let progress = (scrollMiddle - parseFloat(eduProgressBar.style.top)) / maxHeight;
    progress = Math.max(0, Math.min(1, progress));
    eduProgressBar.style.height = `${progress * maxHeight}px`;
  }

  updateEduProgressPosition();
  updateEduProgressHeight();
  window.addEventListener("scroll", updateEduProgressHeight);
  window.addEventListener("resize", () => {
    updateEduProgressPosition();
    updateEduProgressHeight();
  });

});
