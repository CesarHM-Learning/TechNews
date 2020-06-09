/* Agrega un event listener al evento clic del elemento que tenga la clase 'menu-btn' */
document.querySelector(".menu-btn").addEventListener("click", () => {
  /* Selecciona al elemento con la clase '.nav-menu' y le agrega / quita la clase que se especifica*/
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal(".showcase", { delay: 100 });
ScrollReveal().reveal(".news-cards", { delay: 200 });
ScrollReveal().reveal(".cards-banner-one", { delay: 200 });
ScrollReveal().reveal(".cards-banner-two", { delay: 200 });
