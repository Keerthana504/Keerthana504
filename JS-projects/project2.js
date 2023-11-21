//variables

let openBtn = document.getElementById("open-btn");
let modalContainer = document.querySelector(".modal-container");
let closeBtn = document.getElementById("close-btn");

//event listeners

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

// Project 3 Accordian JS

const accordian = document.querySelectorAll(".content-container");

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//project 4 Stop Watch
//variables for buttons
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zeros

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for set interval and timerstatus

let timerInterval = null;
let timerStatus = "stopped";

//stop watch function
function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }
  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

//window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 100);
    document.getElementById("startStopBtn").innerHTML =
      '<i class="fa-solid fa-pause" id="pause"></i>';
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById("startStopBtn").innerHTML =
      '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
  document.getElementById("startStopBtn").innerHTML =
    '<i class="fa-solid fa-play" id="play"></i>';
  timerStatus = "stopped";
});

// Project 5 todo list

const inputTask = document.getElementById("add-task");
const addTask = document.getElementById("add-btn");
const newTask = document.getElementById("task-container");

addTask.addEventListener("click", function () {
  const task = document.createElement("div");
  task.classList.add("task");

  const li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fa-solid fa-check" id="checked"></i>`;
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can" id="deleted"></i>`;
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please enter a Task");
  } else {
    newTask.appendChild(task);
  }

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });
  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.id === "deleted"
      ? target.parentElement.parentElement.remove()
      : target.parentElement.remove();
  });

  inputTask.value = "";
});
