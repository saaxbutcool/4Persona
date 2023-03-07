const container = document.querySelector(".container");

const personas = document.querySelectorAll(".persona");

const articles = document.querySelectorAll(".article");

personas.forEach((persona) => {
  persona.addEventListener("click", (e) => {
    let key = persona.getAttribute("data-key");

    articles.forEach((art) => {
      art.classList.remove("active");
    });

    let targetArticle = document.querySelector(`.article[data-key="${key}"]`);

    targetArticle.classList.add("active");
    container.classList.add("deactive");
  });
});

articles.forEach((art) => {
  let btn = art.querySelector("i");
  btn.addEventListener("click", (e) => {
    let targetArticle = btn.parentElement;
    targetArticle.classList.remove("active");
    container.classList.remove("deactive");
  });
});

window.addEventListener("keydown", (e) => {
  if (container.classList.contains("deactive")) {
    let currentArticle = document.querySelector(".active");
    if (e.key == "Escape") {
      currentArticle.classList.remove("active");
      container.classList.remove("deactive");
    }
  }
});

window.oncontextmenu = function () {
  return false;
};

document.onkeydown = function (e) {
  if (window.event.keyCode == 123 || e.button == 2) return false;
};

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top : " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px"
  );
});
cursor.addEventListener("click", (e) => {
  cursor.classList.add("clicked");
});

const intro = document.querySelector(".intro");
const h1 = document.querySelector(".into-title");
window.addEventListener("load", (e) => {
  setTimeout((e) => {
    intro.classList.add("action");
  }, 1400);
});