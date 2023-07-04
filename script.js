$(document).ready(function () {
  const hiddenElements = document.querySelectorAll(".hidden");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));

  $(".hamburger").click(function () {
    $(".hamburgerMenu").animate({ right: "0px" }, 300);
  });

  $(".hamburgerCross").click(function () {
    $(".hamburgerMenu").animate({ right: "-100vw" }, 300);
  });
});
