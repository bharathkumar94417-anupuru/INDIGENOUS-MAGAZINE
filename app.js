window.addEventListener("load", () => {

  // HERO ANIMATION
  const hero = document.querySelector(".hero-logo");
  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(-40px)";

    setTimeout(() => {
      hero.style.transition = "1s";
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 300);
  }

  // CARD ANIMATION
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "0.5s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 200);
  });

});