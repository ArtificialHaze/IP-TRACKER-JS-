const trackerBtn = document.querySelector(".track-btn");
const ipDisplay = document.querySelector(".ip");
const locDisplay = document.querySelector(".loc");
const geoLocation = document.querySelector(".geoLocation");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details-container");

trackerBtn.addEventListener("click", () => {
  loader.style.display = "flex";
  details.style.display = "none";
  axios.get("https://ipapi.co/json/").then((res) => {
    loader.style.display = "none";
    details.style.display = "block";
    trackerBtn.style.display = "none";
    ipDisplay.textContent = `IP: ${res.data.ip}`;
    locDisplay.textContent = `Location: ${res.data.city}`;
    geoLocation.textContent = `Geo-Location: Lat: ${res.data.latitude} - Long: ${res.data.longitude}`;
  });
});
