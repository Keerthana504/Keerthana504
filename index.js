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
  console.log("js");
  const skillContainer = document.querySelector(".skillset");

  const part1 = document.createElement("div");
  part1.setAttribute("id", "part-1");
  const part2 = document.createElement("div");
  part2.setAttribute("id", "part-2");
  const part3 = document.createElement("div");
  part3.setAttribute("id", "part-3");

  let count = 0;
  //Assign different attributes to the element.
  skillSet.forEach((item) => {
    count++;
    const skill = document.createElement("div");
    skill.setAttribute("class", "skill-container");
    skill.innerHTML = item;
    let child;
    if (count < 16) {
      part1.appendChild(skill);
      skillContainer.appendChild(part1);
    } else if (count < 30) {
      part2.appendChild(skill);
      skillContainer.appendChild(part2);
    } else {
      part3.appendChild(skill);
      skillContainer.appendChild(part3);
    }
  });
});

const navigationHeight = document.querySelector(".nav-bar").offsetHeight;

console.log(document.documentElement);

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);
