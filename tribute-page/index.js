function makeApiRequest() {
  var category = "happiness";
  var apiKey = "8vbNHEPam7E0Cl6HyQyhT5y7Bg4oXrb5DWwWC9Yd"; // Replace with your actual API key

  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
    success: function (result) {
      //console.log(result[0].quote);
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
  setInterval(makeApiRequest, 30000);
});

let showContaniers = document.querySelectorAll(".show-replies");
console.log(showContaniers);
showContaniers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    let parentcontainer = e.target.closest(".comment-container");
    console.log(parentcontainer);
    let id = parentcontainer.id;
    console.log(id);
    if (id) {
      let childrenContainer = parentcontainer.querySelectorAll(
        `[dataset=${id}]`
      );
      console.log(childrenContainer);
      childrenContainer.forEach((child) => {
        child.classList.toggle("opened");
      });
    }
  });
});
