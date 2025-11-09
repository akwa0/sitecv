document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".passeportTitle a[data-section]");

  // Les boîtes
  const BoxFormation = document.getElementById("BoxFormation");
  const BoxExperience = document.getElementById("BoxExperience");
  const BoxCompetence = document.getElementById("BoxCompetence");

  // Le contenu à afficher
  const contents = {
    formation: `
      <span class="code-block">
  <pre id="formation-code">
<span class="tag">&lt;h5&gt;</span><span class="text">Formation</span><span class="tag">&lt;/h5&gt;</span>
<span class="spacer"></span>
<span class="tag">&lt;p&gt;</span><span class="value">2023 - 2025 : Développement Web Fullstack</span><span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p&gt;</span><span class="value">2022 : Graphisme &amp; Identité visuelle</span><span class="tag">&lt;/p&gt;</span>
  </pre>
  </span>


    `,
    experience: `
    <span class="code-block">
  <pre id="formation-code">
  <span class="tag">&lt;h5&gt;</span><span class="text">Expérience</span><span class="tag">&lt;/h5&gt;</span>
  <span class="spacer"></span>
  <span class="tag">&lt;p&gt;</span><span class="value">2023 - 2025 : Stage et projets personnels</span><span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;p&gt;</span><span class="value">2022 : Freelance graphiste</span><span class="tag">&lt;/p&gt;</span>
   </pre>
     </span>
    
    `,
    competence: `
     
      <span class="code-block">
  <pre id="formation-code">
  <span class="tag">&lt;h5&gt;</span><span class="text">Compétences</span><span class="tag">&lt;/h5&gt;</span>
  <span class="spacer"></span>
  <span class="tag">&lt;p&gt;</span><span class="value">HTML, CSS, JavaScript, Figma, Photoshop...</span><span class="tag">&lt;/p&gt;</span>
  </pre>
  </span>
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

 const notebook = document.querySelector(".notebook");
if (notebook) {
  const frontImg = notebook.querySelector("#carnet");
  const pagesImg = notebook.querySelector(".pages img");

  if (frontImg && pagesImg) {
    // mémorise le src original pour pouvoir revenir en arrière si besoin
    const originalSrc = frontImg.src;
    const targetSrc = pagesImg.src;

    notebook.addEventListener("click", () => {
      // remplace l'image de la couverture par celle de l'intérieur
      frontImg.src = targetSrc;
      // si tu veux masquer la zone .pages (optionnel)
      // notebook.querySelector(".pages").style.display = "none";
    });
  }
}

});
