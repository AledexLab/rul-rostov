const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.65 },
);

cards = document.querySelectorAll(".card");
cards.forEach((el) => observer.observe(el));

workCards = document.querySelectorAll(".work-card");
workCards.forEach((el) => observer.observe(el));
