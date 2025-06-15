
document.querySelector(".contact-from").addEventListener("submit", function (e) {
  e.preventDefault();
  let prenom = document.getElementById("prenom").value.trim();
  let nom = document.getElementById("nom").value.trim();
  let projet = document.getElementById("projet").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!prenom || !nom || !projet || !message) {
    alert("Merci de remplir tous les champs du formulaire !");
  } else {
    alert("Votre message a bien été envoyé !");
    this.reset();
  }
});

let projets = document.querySelectorAll(".projet-item");

projets.forEach(function (projet) {
  projet.addEventListener("mouseenter", function () {
    projet.style.backgroundColor = "#f0f0f0";
    projet.style.transition = "background-color 0.3s";
  });
  projet.addEventListener("mouseleave", function () {
    projet.style.backgroundColor = "transparent";
  });
});
