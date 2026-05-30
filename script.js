console.log("Royal Cuts Loaded");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});