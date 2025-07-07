document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".navMenu").classList.toggle("hidden")
})

document.querySelector(".darkMode").addEventListener("click", ()=> {
    document.querySelector("body")?.classList.toggle("dark")
})