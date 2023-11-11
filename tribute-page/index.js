function makeApiRequest() {
  var category = "happiness";
  var apiKey = "8vbNHEPam7E0Cl6HyQyhT5y7Bg4oXrb5DWwWC9Yd"; // Replace with your actual API key

  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
    success: function (result) {
      //$("#thought").append(result[0].quote);
      let quote = result[0].quote + " --- " + result[0].author;
      $("#thought").text(quote);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}
// Call makeApiRequest immediately
makeApiRequest();

// Schedule makeApiRequest to run every 5 minutes (300,000 milliseconds) using jQuery
$(document).ready(function () {
  setInterval(makeApiRequest, 20000);
  //$("#post-btn").css("display", "none");
  $("#post-btn").removeClass("display-btn");
});

let showContaniers = document.querySelectorAll(".show-replies");
showContaniers.forEach((btn) => {
  console.log("show replies");
  btn.addEventListener("click", (e) => {
    let parentcontainer = e.target.closest(".comment-container");
    let id = parentcontainer.id;
    if (id) {
      let childrenContainer = parentcontainer.querySelectorAll(
        `[dataset=${id}]`
      );
      childrenContainer.forEach((child) => {
        child.classList.toggle("opened");
      });
    }
  });
});

let countLikes = document.getElementById("likes-first-comment");
countLikes.addEventListener("click", (e) => {
  console.log("once clicked");
  let totalLikes = countLikes.value;
  let countElement = `<span>. 1 </span>`;
  if (value === 0) {
    totalLikes++;
    countLikes.value = totalLikes;
  } else {
    countLikes.innerHTML += countElement;
  }
});

let userComment = document.getElementById("user-comment");
userComment.addEventListener("keypress", (e) => {
  $("#post-btn").addClass("display-btn");
});

const USERID = {
  name: "New Comment",
  identity: null,
  message: null,
  date: null,
};

let commentAdd = document.querySelector("#post-btn");
commentAdd.addEventListener("click", (e) => {
  //adding a new comment to the section
  console.log("Button clicked");
  let comments = document.querySelector("#comments");
  let newMessage = document.getElementById("user-comment");
  USERID.message = newMessage.value;
  USERID.date = new Date().toLocaleString();
  let newComment = `<div class="comment-container opened" dataset="new-comment" id="new-comment-1">
    <div class="comment-card">
      <h4>${USERID.name}</h4>
      <p> ${USERID.message}</p>
      <div class="comment-card-footer">
        <span class="date">${USERID.date}</span>
        <div class="like"> 
          <div>Like</div>
          <div class="vertical-divider"></div>
          <div class="show-replies">Reply</div> 
        </div>
      </div>
    </div>
  </div>`;

  comments.insertAdjacentHTML("beforeend", newComment);
  //comments.innerHTML += newComment;
  newMessage.value = "";
  $("#post-btn").removeClass("display-btn");
  //commentAdd.classList.remove("display-btn");
});
