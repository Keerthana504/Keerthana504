const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 900}px)`;
    btn.style.backgroundColor = "white";
    slideNumber = i + 1;
  });
});

const newSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 900}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 900}px)`;
  slideNumber--;
};
const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 900}px)`;
  slideNumber = length;
};

right.addEventListener("click", () => {
  slideNumber < length ? newSlide() : firstSlide();
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : lastSlide();
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
});
