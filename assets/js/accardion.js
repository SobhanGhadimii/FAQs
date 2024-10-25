
document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelectorAll(".myImage");
  const contents = document.querySelectorAll(".accordion-text");
  image.forEach((myImage) => {
    myImage.addEventListener("click", function () {
      const content = this.closest(".accordion-header").nextElementSibling;
      const isOpen = content.style.display === "block";
      content.style.display = isOpen ? "none" : "block";
      this.src = isOpen ? "/assets/images/icon-plus.svg" : "/assets/images/icon-minus.svg";
       
    });
  });
});
