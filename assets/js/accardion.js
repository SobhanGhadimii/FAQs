document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelectorAll(".myImage");
  const contents = document.querySelectorAll(".accordion-text");
  image.forEach((myImage) => {
    myImage.addEventListener("click", function () {
      const content = this.closest(".accordion-header").nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        this.src = "/assets/images/icon-minus.svg";
      } else {
        content.style.display = "block";
        this.src = "/assets/images/icon-plus.svg";
      }
    });
  });
});
