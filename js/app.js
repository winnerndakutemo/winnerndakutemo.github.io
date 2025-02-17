/**
 * A function that handles scroll animation for particular elements
 * @param {String} elementClass The class of the elements to animate
 * @param {String} revealClass The class that contains style of animation
 * @returns {IntersectionObserver} I don't know why but i just return that
 */
export function scrollAnimate(elementClass, revealClass) {
  const elements = document.querySelectorAll(`.${elementClass}`);
  const observer = new IntersectionObserver((entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add(revealClass);
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove(revealClass);
      }
    }
  });
  elements.forEach((e) => {
    observer.observe(e);
  });

  return observer;
}

scrollAnimate("intersect-element", "reveal");
scrollAnimate("intersect-element2", "reveal2");
const observer = new IntersectionObserver(
  (entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const actualActive = document.querySelector(".nav-link.active");
        if (actualActive.getAttribute("href") !== "#" + id) {
          console.log(actualActive.getAttribute("href"));
          const newActive = document.querySelector(
            `.navbar-nav [href="#${id}"]`
          );
          actualActive.classList.toggle("active");
          newActive.classList.toggle("active");
        }
      }
    }
  },
  {
    threshold: 0.1,
  }
);
document.querySelectorAll("section").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll(".carousel-item a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.StopPropagation();
  });
});
