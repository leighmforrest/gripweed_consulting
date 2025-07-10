document.addEventListener("DOMContentLoaded", () => {

  /** DOM ELEMENTS THAT MATTER */
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navMenu");
  const main = document.querySelector("main");

  /** Event Listeners */
  hamburger?.addEventListener("click", () => {
    navMenu?.classList.toggle("hidden");
    console.log(navMenu)
  });

  main?.addEventListener("click", ()=> {
    if (!navMenu.classList.contains("hidden")) navMenu.classList.add("hidden")
  })
});
