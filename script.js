document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".passeportTitle a[data-section]");

  // Les boîtes
  const BoxFormation = document.getElementById("BoxFormation");
  const BoxExperience = document.getElementById("BoxExperience");
  const BoxCompetence = document.getElementById("BoxCompetence");

  // Le contenu à afficher
  const contents = {
    formation: `
      <h5>Formation</h5>
      <p>2023 - 2025 : Développement Web Fullstack</p>
      <p>2022 : Graphisme & Identité visuelle</p>
    `,
    experience: `
      <h5>Expérience</h5>
      <p>2021 - 2023 : Stage et projets personnels</p>
      <p>2020 : Freelance graphiste</p>
    `,
    competence: `
      <h5>Compétences</h5>
      <p>HTML, CSS, JavaScript, Figma, Photoshop...</p>
    `
  };

  function closeAllBoxes() {
    [BoxFormation, BoxExperience, BoxCompetence].forEach(b => b.classList.add("hidden"));
  }

  // Fonction utilitaire pour gérer ouverture/fermeture
  function openBox(section) {
    closeAllBoxes(); // Ferme les autres avant d'ouvrir
    const box = document.getElementById(`Box${section.charAt(0).toUpperCase() + section.slice(1)}`);
    const contentDiv = box.querySelector(".infoContent");
    contentDiv.innerHTML = contents[section];
    box.classList.remove("hidden");
  }



  // Ajout des écouteurs sur les liens
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = link.dataset.section;
      if (contents[section]) openBox(section);
    });
  });

  // Boutons de fermeture
  document.querySelectorAll(".closeBox").forEach(btn => {
    btn.addEventListener("click", function () {
      btn.parentElement.classList.add("hidden");
    });
  });
});
