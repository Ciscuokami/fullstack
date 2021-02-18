const API_KEY = "pk.eyJ1IjoiY2lzY3UiLCJhIjoiY2trZnBwaWExMWRmNTJvcGFmaXo5NzNoYiJ9.yQdi76P2soIYqwSUjfTpHQ";

const myMap = L.map("mapId").setView([41.4991214, 2.1376046], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);


navigator.geolocation.getCurrentPosition((position) => {
    myMap.setViem([position.coords.latitude, position.coords.longitude], 9)
    const positionMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(myMap);
    positionMarker.on("click", () => {
        console.log("CLick");
    })
    positionMarker.bindPopup("Tu posición");
    console.log(position);

}, (error) => console.error(error));



const polygon = L.polygon([
    [41.49, 2.13],
    [41.54, 2.4],
    [41.8, 2.8],
]).addTo(myMap);

polygon.bindPopup("Una zona aleatoria");

fetch("https://nominatim.openstreetmap.org/search.php?q=Comunidad+de+madrid&polygon_geojson=1&format=json").then(r => r.json()).then(([data]) => {
    L.geoJSON(data.geojson).addTo(myMap);
    console.log(data.geojson);
})
L.geoJSON()