document.addEventListener("DOMContentLoaded", function(){
    const links= document.querySelectorAll(".passeportTitle a[data-section]");
    const infoBox=document.getElementById("infoBox");
    const infoContent =document.getElementById("infoContent");
    const closeBox=document.getElementById("closeBox");


    const contents= {
        competences: `
                <h5>Mes compétences</h5>
        <ul>
            <li>HTML / CSS / JavaScript</li>
            <li>React & Node.js</li>
            <li>Graphisme (Illustrator, Photoshop)</li>
            <li>UX / UI Design</li>
        </ul>
    `,
    formation: `
        <h5>Formation</h5>
        <p>2023 - 2025 : Développement Web Fullstack</p>
        <p>2022 : Graphisme & Identité visuelle</p>
    `,
    experience: `
        <h5>Expérience</h5>
        <p>2024 - Freelance Web & Graphisme</p>
        <p>2023 - Stage en design digital</p>
    `
};

links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const section = link.dataset.section;
        infoContent.innerHTML = contents[section];
        infoBox.classList.remove("hidden");
    });
});

closeBox.addEventListener("click", function(){
    infoBox.classList.add("hidden");
});

});