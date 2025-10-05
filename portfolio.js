document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ELEMENTOS DEL DOM
    // =========================
    const progressBar = document.getElementById("progress-bar");    
    const progressTrack = document.getElementById("progress-track"); 
    const allCards = document.querySelectorAll("#experiences .experience-card"); 
  
    // =========================
    // ANIMACIÓN BOTONES DEL MENÚ
    // =========================
    const links = document.querySelectorAll(".nav-links li a");
    links.forEach(link => {
      const line = link.querySelector(".line");
      const text = link.querySelector("span");
  
      if (link.classList.contains("active")) {
        line.style.width = "140px";
        line.style.height = "4px";
        text.style.transform = "translateX(20px)";
        text.style.fontWeight = "700";
      }
  
      link.addEventListener("mouseenter", () => {
        line.style.width = "140px";
        line.style.height = "4px";
        text.style.transform = "translateX(20px)";
        text.style.fontWeight = "700";
      });
  
      link.addEventListener("mouseleave", () => {
        if (!link.classList.contains("active")) {
          line.style.width = "80px";
          line.style.height = "2px";
          text.style.transform = "translateX(0)";
          text.style.fontWeight = "500";
        }
      });
    });
  
    // =========================
    // CONFIGURAR TRACK GRIS Y BARRA DE PROGRESO
    // =========================
    let trackTop = 0;
    let trackHeight = 0;
  
    if (allCards.length > 0) {
      const firstCard = allCards[0];                       
      const lastCard = allCards[allCards.length - 1];      
  
      // Top absoluto de la primera tarjeta
      trackTop = firstCard.getBoundingClientRect().top + window.scrollY;
  
      // Top de la última tarjeta (para que track acabe ahí)
      const lastCardTop = lastCard.getBoundingClientRect().top + window.scrollY;
  
      // Altura del track gris: hasta la parte superior de la última tarjeta
      trackHeight = lastCardTop - trackTop;
  
      // Altura de la barra de progreso: hasta la mitad de la última tarjeta
      const lastCardHeight = lastCard.getBoundingClientRect().height;
      const progressHeight = (lastCardTop + lastCardHeight / 2) - trackTop;
  
      // Aplicamos al track gris
      progressTrack.style.top = trackTop + "px";
      progressTrack.style.height = trackHeight + "px";
  
      // Inicializamos barra de progreso
      progressBar.style.top = trackTop + "px";
      progressBar.dataset.maxHeight = progressHeight; // guardamos altura máxima
      progressBar.style.height = "0px";
    }
  
    // =========================
    // ANIMACIÓN SCROLL PARA BARRA DE PROGRESO
    // =========================
    window.addEventListener("scroll", () => {
      const scrollMiddle = window.scrollY + window.innerHeight / 2;
  
      // Altura máxima que puede alcanzar la barra
      const maxHeight = parseFloat(progressBar.dataset.maxHeight) || 0;
  
      // Progreso relativo dentro del track
      let progress = (scrollMiddle - trackTop) / maxHeight;
      progress = Math.max(0, Math.min(1, progress)); // limitar entre 0 y 1
  
      // Altura de la barra según progreso
      const barHeight = progress * maxHeight;
  
      progressBar.style.height = barHeight + "px";
    });
  
  });
  