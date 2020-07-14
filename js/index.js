// Your code goes here
const nav = document.querySelectorAll(".nav-link");
for (let i = 0; i < nav.lenght; i++) {
  navLink = nav[i];
  navLink.addEventListener("mouseenter", () => {
    event.preventDefault();
    nav.style.transform = "scale(1.2)";
  });
  navLink.addEventListener("mouseleave", () => {
    navLink.style.transform = "scale(1)";
  });
}

const allImg = document.querySelector(".intro img");
allImg.addEventListener("resize", () => {
  if (event.target.innerWidth < 1000) {
    allImg.src =
      "https//www.google.com/search?q=breaking+bad+meth+rv&tbm=isch&ved=2ahUKEwiblc_O5qrpAhWRi54KHX2BCu0Q2-cCegQIABAA&oq=breaking+bad+meth+rv&gs_lcp=CgNpbWcQAzICCAAyBggAEAgQHjoECCMQJzoECAAQQzoFCAAQgwE6BwgAEIMBEEM6BAgAEBhQyVxYv4sBYNyMAWgAcAB4AIABX4gBqgySAQIyMJgBAKABAaoBC2d3cy13aXotaW1n&sclient=img&ei=hL24XpvDMZGX-gT9gqroDg&bih=969&biw=1920&rlz=1C1CHBF_enUS836US836#imgrc=ZxGxt4YCfhsvvM";
  } else {
    ("im5g/fun-bus.jpg");
  }
});
const navA = document.querySelector(".nav-link");
navA.addEventListener("click", () => {
  navA.style.transform = "scale(1.5)";
});
navA.addEventListener("dblclick", () => {
  navA.style.transform = "scale(1)";
});
const signBtn = document.querySelector(".destination .btn");
signBtn.addEventListener("mousedown", () => {
  signBtn.style.transform = "scale(1.2)";
});
signBtn.addEventListener("mouseup", () => {
  signBtn.style.transform = "scale(1)";
});
signBtn.addEventListener("auxclick", () => {
  alert("potato salad");
});
signBtn.addEventListener("contextmenu", () => {
  alert("dalas otatop");
});
signBtn.addEventListener("wheel", () => {
  alert("stop that");
});
signBtn.addEventListener("mouseout", () => {
  alert("come back");
});
//this last is not an accident.
//signBtn.addEventListener("mouseover", () => {
alert("you're stuck now");
//});
