// * on first page load
//     * check local storage for city names
//     * recall $.getJSON with city
// * variable for input field/search bar
// * variable for the search button
// * click event handler for the search button:
//     * grab input value & reassign city variable
//     * recall $.getJSON
//     * push city var into local storage
var searchForm = $("#search-form");
var searchTermEl = $("#search-term");

searchForm.on("click", function (event) {
  event.preventDefault();

  var searchTerm = searchTermEl.val();
  console.log(searchTerm);
  var apiKey = "dqyD3BPdGhi3Vh2kttq0F4VigRwP5RgF";
  var queryURl =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    apiKey +
    "&q=" +
    searchTerm +
    "&limit=3";
  fetch(queryURl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data[0]);
    });
});
var repoList = document.querySelector("ul");
var fetchButton = document.getElementById("fetch-button");

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={802ca1b07e0582315a580a218f0ae4d5}";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener("click", getApi);




// var city = "savannah";

// $.getJSON(
//   `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=802ca1b07e0582315a580a218f0ae4d5`
// ).done((response) => {
//   console.log(response);
// });
