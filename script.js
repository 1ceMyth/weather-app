const apiKey = "f06b5ff53afd673227c7e9816c4a68de"; // Replace with your actual API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = "Please enter a city name.";
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    weatherResult.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `Error: ${error.message}`;
  }
}
