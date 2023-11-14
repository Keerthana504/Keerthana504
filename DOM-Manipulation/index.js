//Dom Manipulation

// Selecting elements
//getElementById - Single element is selected with the mentioned id
let title = document.getElementById("main-heading");
//console.log("ID ", title);

//Multiple elements (array) are returned with the mentioned class name
let listItems = document.getElementsByClassName("list-items");
//console.log("ClassName ", listItems);

//Multiple elements (array) are returned with the mentioned tag name
let divItems = document.getElementsByTagName("ul");
//console.log("tagName ", divItems);

//Accept the .className #id Returns the first matched element
let firstItem = document.querySelector("div");
//console.log("QuerySelector ", firstItem);

//querySelectorAll
//Returns all the matched elements in array
let itemsList = document.querySelectorAll("div");
//console.log("QuerySelectorAll ", itemsList);

//styling elements

const title1 = document.querySelector("#main-heading");
title1.style.color = "blue";
//console.log(title1);

const listItems1 = document.querySelectorAll(".list-items");
for (i = 0; i < listItems1.length; i++) {
  listItems1[i].style.fontSize = "1rem";
}
//console.log(listItems1);

//creating elements
const ul = document.querySelector("ul");
const li = document.createElement("li");

//adding elements
ul.append(li);

//Modifying elements
li.innerText = "India";

//Modifying attributes and classes
li.classList.add("list-items");

//console.log(li.classList.contains("list-items"));

li.setAttribute("id", "first");
//console.log("id:", li.getAttribute("id"));
li.removeAttribute("id", "first");

//remove the element
li.remove();

//Parent node traversal
const ul1 = document.querySelector("ul");
// console.log(ul1.parentNode.parentNode);
// console.log(ul1.parentElement.parentElement);

//child node travesal
//console.log(ul.childNodes);

//ul1.childNodes[1].style.backgroundColor = "yellow";

//incorrect
//ul1.firstChild.style.backgroundColor = "yellow";

// console.log(ul1.children);
// console.log(ul1.firstElementChild);
// console.log(ul1.lastElementChild);

//sibling node travesal
const div = document.querySelector("div");

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

//firstChild returns the first child node (an element node, a text node or a comment node). Whitespace between elements are also text nodes.
//console.log(ul1.firstChild);
//firstElementChild returns the first child element (not text and comment nodes).
//console.log(ul1.firstElementChild);

//event listeners

//element.addeventListener("click", function(){},true/false);

const btn = document.querySelector(".btn-1");
function alertBtn() {
  alert("I also like JS");
}

btn.addEventListener("click", alertBtn);

//mouseover events
const newbgColor = document.querySelector(".btn-1");

function changeBgColor() {
  newbgColor.style.backgroundColor = "Red";
}

newbgColor.addEventListener("mouseover", changeBgColor);

//Reveal Event

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hiddenContent");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);

//event propogation
window.addEventListener(
  "click",
  function () {
    //console.log("Window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    // console.log("Document");
  },
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    //e.stopPropagation();
    console.log("Div 2");
  },
  false
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("Div 1");
  },
  false
);

document.querySelector(".btn-event").addEventListener(
  "click",
  function (e) {
    // console.log(e);
    console.log((e.target.value = "clicked"));
  },
  false
);

const first = document.querySelector("#pacific");
//console.log(first);
first.addEventListener("click", function () {
  //console.log("Pacific Ocean");
  //first.style.backgroundColor = "lightgrey";
});

document.querySelector("#indian").addEventListener("click", function (e) {
  //console.log("Indian Ocean");
  const target = e.target;
  if (target.matches("li")) {
    // target.style.backgroundColor = "lightblue";
  }
});

document.querySelector("#atlantic").addEventListener("click", function (e) {
  //console.log("Indian Ocean");
  const target = e.target;
  if (target.matches("li")) {
    //  target.style.backgroundColor = "lightyellow";
  }
});

document.querySelector("#arctic").addEventListener("click", function (e) {
  //console.log("Indian Ocean");
  const target = e.target;
  if (target.matches("li")) {
    // target.style.fontSize = "20px";
  }
});

document.querySelector("#antarctic").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id"));
  const target = e.target;
  if (target.matches("li")) {
    // target.style.color = "blue";
  }
});

document.querySelector("#oceans").addEventListener("click", function (e) {
  console.log("event delegation, clicked", e.target.id);
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "orange";
  } else {
  }
});

const oceans = document.querySelector("#oceans");
const newOcean = document.createElement("li");
newOcean.innerText = "or Southern";
newOcean.setAttribute("id", "southern");
newOcean.setAttribute("class", "list-items");

oceans.appendChild(newOcean);
