var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));
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
var weatherCard = $("#weather");
// var repoList = document.querySelector("ul");
// var fetchButton = document.getElementById("fetch-button");
var fetchButton = $("#fetch-button");

fetchButton.on("click", function (event) {
  event.preventDefault();

  var searchTerm = searchTermEl.val();
  getApi(searchTerm);
});

function getApi(city) {
  console.log(city);
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=802ca1b07e0582315a580a218f0ae4d5`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var weatherUl = document.createElement("ul");
      var temperatureLi = document.createElement("li");
      var humidityLi = document.createElement("Li");
      var windSpeedLi = document.createElement("Li");
      // var uvIndexLi = document.createElement("Li");
      temperatureLi.textContent = `Temp: ${data.list[0].main.temp}`;
      humidityLi.textContent = `humidity: ${data.list[0].main.humidity}`;
      windSpeedLi.textContent = `Wind Speed : ${data.list[0].wind.speed}`;

      weatherUl.appendChild(temperatureLi);
      weatherUl.appendChild(humidityLi);
      weatherUl.appendChild(windSpeedLi);

      weatherCard.append(weatherUl);
      localStorage.setItem(city, JSON.stringify(city));
      localStorage.getItem(city);
      JSON.parse(localStorage.getItem(city));

      // <li><a href="#temperature">Temperature</a></li>
      // <li><a href="#humidity">Humidity</a></li>
      // <li><a href="#wind speed">Wind Speed</a></li>
      // <li><a href="#uv index">UV Index</a></li>

      // data.list[3].wind.speed
      // for (var i = 0; i < data.length; i++) {
      //   var listItem = document.createElement("li");
      //   listItem.textContent = data[i].html_url;
      //   repoList.appendChild(listItem);
      // }
    });
}

// fetchButton.addEventListener("click", getApi);

// var city = "savannah";

// $.getJSON(
//   `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=802ca1b07e0582315a580a218f0ae4d5`
// ).done((response) => {
//   console.log(response);
// });
