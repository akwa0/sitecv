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
  const btnProjets = document.getElementById('btnProjets');
  const btnProjetsPerso = document.getElementById('btnProjetsPerso');

  zone1.addEventListener('click', () => {
    frontImg.src = pagesImg.src;
    btnProjets.classList.add('visible');
    btnProjetsPerso.classList.remove('visible');
  });

  zone2.addEventListener('click', () => {
    frontImg.src = pagesImgPerso.src;
    btnProjets.classList.remove('visible');
    btnProjetsPerso.classList.add('visible');
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
      // remet l'image d'origine du carnet
      frontImg.src = originalSrc;
      btnProjets.classList.remove('visible');
      btnProjetsPerso.classList.remove('visible');
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

  // Gestion du formulaire de contact
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const messageTextarea = document.getElementById('message');
  const charCount = document.getElementById('charCount');

  // Compteur de caractères
  if (messageTextarea && charCount) {
    messageTextarea.addEventListener('input', function() {
      charCount.textContent = this.value.length;
    });
  }

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Formatage professionnel de l'email
    const subject = `Message de ${name} - Portfolio`;
    const body = `Bonjour,

Vous avez reçu un nouveau message depuis votre portfolio :

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

De : ${name}
Email : ${email}

Message :
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Envoyé depuis votre site portfolio
`;

    // Encodage pour URL
    const mailtoLink = `mailto:poinambalom.l@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Ouvre le client email
    window.location.href = mailtoLink;

    // Affiche un message de confirmation
    formStatus.textContent = '✓ Votre client email va s\'ouvrir. Cliquez sur "Envoyer" dans votre application email.';
    formStatus.classList.remove('hidden');
    formStatus.classList.add('success');

    // Réinitialise le formulaire
    contactForm.reset();

    // Réinitialise le compteur de caractères
    if (charCount) {
      charCount.textContent = '0';
    }

    // Cache le message après 5 secondes
    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 5000);
  });

});
