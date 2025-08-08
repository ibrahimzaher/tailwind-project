document.querySelector("nav button").addEventListener("click", function () {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("pt-4");
  navList.classList.toggle("h-0");
  navList.classList.toggle("h-[220px]");
  navList.classList.toggle("opacity-0");
});
document.querySelectorAll("nav ul li a").forEach((ele) => {
  ele.addEventListener("click", (e) => {
    document.querySelectorAll("nav ul li a").forEach((anchor) => {
      anchor.classList.remove("bg-main", "text-white");
    });
    e.target.classList.add("bg-main", "text-white");
  });
});
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section,header");
  const navLinks = document.querySelectorAll("nav ul li a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("bg-main", "text-white");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("bg-main", "text-white");
    }
  });
});
