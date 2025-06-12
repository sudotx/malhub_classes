const API_KEY = "2fb2eeedd45d406cb39165101241010";
const weatherContainer = document.getElementById("weatherData");
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return;

  showLoading(true);
  showError("");

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
        city
      )}&aqi=no`
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    displayWeather(data);
  } catch (error) {
  } finally {
    showLoading(false);
  }

  // try {
  //   const response = await fetch(
  //     `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
  //       city
  //     )}&aqi=no`
  //   );
  //   console.log(response);
  //   if (!response.ok) throw new Error("City not found");

  //   const data = await response.json();
  //   console.log(data);
  //   displayWeather(data);
  // } catch (error) {
  //   showError(error.message);
  //   weatherContainer.innerHTML = "";
  // } finally {
  //   showLoading(false);
  // }
}

function displayWeather(data) {
  const { location, current } = data;

  weatherContainer.innerHTML = `
                <div class="weather-card">
                    <div class="location-info">
                        <h2>${location.name}</h2>
                        <div>${location.region}, ${location.country}</div>
                        <div>Local time: ${location.localtime}</div>
                    </div>
                    
                    <div class="main-temp">
                        ${current.temp_c}°C
                    </div>
                    
                    <div class="condition">
                        <img src="https:${current.condition.icon}" alt="${current.condition.text}">
                        <span>${current.condition.text}</span>
                    </div>
                    
                    <div class="weather-details">
                        <div class="weather-detail">
                            <span class="detail-label">Feels Like</span>
                            <span>${current.feelslike_c}°C</span>
                        </div>
                        <div class="weather-detail">
                            <span class="detail-label">Wind</span>
                            <span>${current.wind_kph} km/h</span>
                        </div>
                        <div class="weather-detail">
                            <span class="detail-label">Humidity</span>
                            <span>${current.humidity}%</span>
                        </div>
                        <div class="weather-detail">
                            <span class="detail-label">Precipitation</span>
                            <span>${current.precip_mm} mm</span>
                        </div>
                        <div class="weather-detail">
                            <span class="detail-label">Pressure</span>
                            <span>${current.pressure_mb} mb</span>
                        </div>
                        <div class="weather-detail">
                            <span class="detail-label">UV Index</span>
                            <span>${current.uv}</span>
                        </div>
                    </div>
                </div>
            `;
}

function showLoading(val) {
  if (loadingElement) {
    // Check if loadingElement exists
    loadingElement.style.display = val ? "block" : "none";
  }
}

function showError(message) {
  errorElement.style.display = message ? "block" : "none";
  errorElement.textContent = message;
}
