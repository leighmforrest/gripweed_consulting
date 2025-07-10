document.addEventListener("DOMContentLoaded", () => {

  /** DOM ELEMENTS THAT MATTER */
  const hamburger = document.querySelector(".hamburger");
  const darkModeButton = document.querySelector(".darkMode");
  const navMenu = document.querySelector(".navMenu");
  const main = document.querySelector("main");

  /** Event Listeners */
  hamburger?.addEventListener("click", () => {
    navMenu?.classList.toggle("hidden");
  });

  main?.addEventListener("click", ()=> {
    if (!navMenu.classList.contains("hidden")) navMenu.classList.add("hidden")
  })

  // darkModeButton?.addEventListener("click", () => {
  //   document.querySelector("body")?.classList.toggle("dark");
  // });
});
