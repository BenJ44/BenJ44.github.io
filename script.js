document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".navbar-burger");
    const menu = document.getElementById(burger.dataset.target);
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar-item[href^='#']");
    const sections = [...document.querySelectorAll("section[id]")];

    // Toggle menu mobile
    burger.addEventListener("click", () => {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
    });

    // Fermer menu après clic
    navLinks.forEach(link =>
        link.addEventListener("click", () => {
            burger.classList.remove("is-active");
            menu.classList.remove("is-active");
        })
    );

    // Scroll + lien actif
    const handleScroll = () => {
        const scrollPos = window.scrollY;

        navbar.classList.toggle("is-scrolled", scrollPos > 10);

        let active = null;

        for (const section of sections) {
            const top = section.offsetTop - 120;
            const bottom = top + section.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                active = section.id;
            }
        }

        navLinks.forEach(link => {
            link.classList.toggle("is-active", link.getAttribute("href").includes(active));
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Footer année
    document.getElementById("year").textContent = new Date().getFullYear();
});
