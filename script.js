document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".passeportTitle a[data-section]");

  // Les boîtes
  const BoxFormation = document.getElementById("BoxFormation");
  const BoxExperience = document.getElementById("BoxExperience");
  const BoxCompetence = document.getElementById("BoxCompetence");

  function closeAllBoxes() {
    [BoxFormation, BoxExperience, BoxCompetence].forEach(b => b.classList.add("hidden"));
  }

  // Fonction pour relancer l'animation typing
  function restartAnimation(section) {
    const pre = document.getElementById(`formation-code-${section}`);
    if (pre) {
      // Supprime et re-ajoute la classe pour relancer l'animation
      pre.style.animation = 'none';
      setTimeout(() => {
        pre.style.animation = 'typing 5s steps(100, end) forwards, blink 1s step-end infinite';
      }, 10);
    }
  }

  // Fonction utilitaire pour gérer ouverture/fermeture
  function openBox(section) {
    closeAllBoxes(); // Ferme les autres avant d'ouvrir
    const box = document.getElementById(`Box${section.charAt(0).toUpperCase() + section.slice(1)}`);
    box.classList.remove("hidden");

    // Relance l'animation typing pour cette box
    restartAnimation(section);
  }

  // Ajout des écouteurs sur les liens
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = link.dataset.section;
      openBox(section);
    });
  });

  // Boutons de fermeture
  document.querySelectorAll(".closeBox").forEach(btn => {
    btn.addEventListener("click", function () {
      btn.parentElement.classList.add("hidden");
    });
  });
   const zone1 = document.getElementById('zone1');
  const zone2 = document.getElementById('zone2');
  const notebook = document.querySelector(".notebook");
  const frontImg = notebook.querySelector("#carnet");
  const pagesImg = notebook.querySelector(".pagesPRo img");
  const pagesImgPerso = notebook.querySelector(".pagesPerso img");
  const originalSrc = frontImg.src; 

  zone1.addEventListener('click', () => {
    frontImg.src = pagesImg.src;
  });

  zone2.addEventListener('click', () => {
    frontImg.src = pagesImgPerso.src;
  });

 const zonePasseport = document.getElementById('Zone4');
 const zoneContact = document.getElementById('Zone5');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom > 0
    );
  }

  // 🔹 Quand on scroll, on vérifie si zonePasseport ou zoneContact est visible
  window.addEventListener('scroll', () => {
    if (isInViewport(zonePasseport) || isInViewport(zoneContact)) {
      // remet l’image d’origine du carnet
      frontImg.src = originalSrc;
    }
  });

  const codebarre = document.querySelector('.codebarre');
  const tooltipCodeBarre = document.querySelector('.tooltipCodeBarre');

  codebarre.addEventListener('mouseenter', function(){
    tooltipCodeBarre.classList.remove('hidden');
  });

  codebarre.addEventListener('mouseleave', function(){
    tooltipCodeBarre.classList.add('hidden');
  });

});
