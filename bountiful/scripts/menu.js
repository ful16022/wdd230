const btn = document.getElementById("hamburgerBtn");

btn.addEventListener("click", toggleMenu);



function toggleMenu() {
  document.getElementById("primarynav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

