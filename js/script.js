console.log("hello World");
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
      console.log(data);
    });
});

// var city = "savannah";

// $.getJSON(
//   `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=802ca1b07e0582315a580a218f0ae4d5`
// ).done((response) => {
//   console.log(response);
// });
