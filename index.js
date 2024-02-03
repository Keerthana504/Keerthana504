//     ******************* skills scroll infinite  **************************

const skillSet = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Redux",
  "API",
  "Bootstrap",
  "Tailwind",
  "responsive design",
  "accesibility",
  "page performance",
  "optimisation",
  "testing",
  "SEO",
  "best practices",
  "react-hooks",
  "react-router",
  "SDLC",
  "Analysis",
  "Design",
  "Testing",
  "Debugging",
  "Deployment",
  "Cloud",
  "Git",
  "Azure",
  "Development",
  "Agile",
  "Scrum",
  "Gulp",
  "NPM",
  "JEnkins",
  "AWS",
  "DOM Manipulation",
  "JSX",
  "PHP",
  "AJAX",
  "NodeJS",
  "ES6",
  "Parcel",
  "Babel",
  "Github",
  "Oracle",
  "MySQL",
  "SQL",
  "Server",
  "MongoDB",
];

document.addEventListener("DOMContentLoaded", function () {
  // Function to create and append buttons
  // const skillContainer = document.querySelector(".skillset");

  // const part1 = document.createElement("div");
  // part1.setAttribute("id", "part-1");
  // const part2 = document.createElement("div");
  // part2.setAttribute("id", "part-2");
  // const part3 = document.createElement("div");
  // part3.setAttribute("id", "part-3");

  let count = 0;
});

//    *******************  section smooth scrolling   **********************

const navigationHeight = document.querySelector(".nav-bar").offsetHeight;

// console.log(document.documentElement);

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

//     *******************  Image caurosel  **************************

const moveLeft = document.querySelector(".arrow-left");
const moveRight = document.querySelector(".arrow-right");
const frame = document.querySelector(".slider");
const slideShowImages = document.querySelectorAll(".quotes-tile");
const images = document.querySelectorAll(".celeb-photo");

let move = 1;
let length = images.length;

const nextImageDelay = 7000;
let currentImageCount = 0;

const autoSlider = () => {
  currentImageCount = (currentImageCount + 1) % slideShowImages.length;
  frame.style.transform = `translateX(-${currentImageCount * 940}px)`;
  console.log(currentImageCount, "here", move);
};

setInterval(autoSlider, nextImageDelay);

const firstQuote = () => {
  move = 1;
  console.log("first", move);
  frame.style.transform = `translateX(0px)`;
};

const lastQuote = () => {
  frame.style.transform = `translateX(-${(length - 1) * 940}px)`;
  move = length;
};

const nextQuote = () => {
  console.log("next", move);
  frame.style.transform = `translateX(-${move * 940}px)`;
  move++;
};

const prevQuote = () => {
  frame.style.transform = `translateX(-${(move - 2) * 940}px)`;
  move--;
};

moveRight.addEventListener("click", () => {
  console.log(move);
  move >= length ? firstQuote() : nextQuote();
});

moveLeft.addEventListener("click", () => {
  console.log(move);
  move <= 1 ? lastQuote() : prevQuote();
});

// ************************ Responsive Navigation ******************

const showSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
};

const hideSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};

const sidebar = document.querySelector(".sidebar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

sidebar.addEventListener("click", () => {
  sidebar.style.display = "none";
});
