const menubtn = document.querySelector("#open-menu-nav");
const closebtn = document.querySelector("#close-menu-nav");
const menu = document.querySelector(".nav_menu");

//open nav menu
menubtn.addEventListener("click", () => {
  menu.style.display = "block";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
});

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
};

closebtn.addEventListener("click", closeNav);

//close nav menu after items clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll(".nav_menu li a").forEach((navitem) => {
    navitem.addEventListener("click", closeNav);
  });
}

//change navbar after scrolling down
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
});

// show plus skill
const skills = document.querySelectorAll(".skill_content");

skills.forEach((skill_content) => {
  skill_content.addEventListener("click", () => {
    skill_content.classList.toggle("open");
    //change icon
    const icon = skill_content.querySelector(".plus_icon i");
    if (icon.className === "uil uil-plus-circle") {
      icon.className = "uil uil-minus-circle";
    } else {
      icon.className = "uil uil-plus-circle";
    }
  });
});
