// * on first page load
//     * check local storage for city names
//     * recall $.getJSON with city
// * variable for input field/searcbbar
// * variable for the search button
// * click event handler for the search button:
//     * grab input value & reassign city variable
//     * recall $.getJSON
//     * push city var into local storage

var city = "savannah";

$.getJSON(
  `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=802ca1b07e0582315a580a218f0ae4d5`
).done((response) => {
  console.log(response);
  
});
