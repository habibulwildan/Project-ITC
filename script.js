// toog class activ
const navbar_ul = document.querySelector(".navbar-a");
// ketika hamburger menu di clik
document.querySelector("#hamburgerMneu").onclick = () => {
  navbar_ul.classList.toggle("active");
};

// klik diluar sidber untuk menghilangkan nav
const hamburger = document.querySelector("#hamburgerMneu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar_ul.contains(e.target)) {
    navbar_ul.classList.remove("active");
  }
});

// ========================================================================================
// window.addEventListener("scroll", function () {
//   const header = this.document.querySelector(".container-navbar");
//   header.classList.toggle("sticky", this.window.scrollY > 0);
// });

// ====================popup Gallery====================================================
document.querySelectorAll(".img-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-imag").style.display = "block";
    document.querySelector(".popup-imag img").src = image.getAttribute("src");
  };
});
document.querySelector(".img-container .popup-imag span").onclick = () => {
  document.querySelector(".popup-imag").style.display = "none";
};
