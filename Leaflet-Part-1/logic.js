// Part 1

let earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Create the tile layer that will be the background of the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to determine the color of the marker based on the earthquake's depth
function getColor(depth) {
    if (depth > 90) return "#ff5f65";
    if (depth > 70) return "#fca35d";
    if (depth > 50) return "#fdb72a";
    if (depth > 30) return "#f7db11";
    if (depth > 10) return "#dcf400";
    return "#a3f600";
}

// Function to style each earthquake marker
function styleFeature(feature) {
    return {
        color: "black",
        weight: 0.5,
        fillColor: getColor(feature.geometry.coordinates[2]), // Depth
        radius: feature.properties.mag * 4, // Magnitude
        fillOpacity: 0.7
    };
}

// Fetch the GeoJSON data
d3.json(earthquakeUrl).then(function (data) {
    // Define a function to create circle markers for each earthquake
    function onEachFeature(feature, latlng) {
        return L.circleMarker(latlng, styleFeature(feature));
    }

    // Add the GeoJSON layer to the map
    L.geoJson(data, {
        pointToLayer: onEachFeature,
        onEachFeature: function (feature, layer) {
            layer.bindPopup(
                `<strong>Location:</strong> ${feature.properties.place}<br>
                 <strong>Magnitude:</strong> ${feature.properties.mag}<br>
                 <strong>Depth:</strong> ${feature.geometry.coordinates[2]} km<br>
                 <strong>Time:</strong> ${new Date(feature.properties.time)}`
            );
        }
    }).addTo(map);
});

// Add a legend to the map
var legend = L.control({ position: "bottomright" });

legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var depths = [-10, 10, 30, 50, 70, 90];
    var colors = ["#a3f600", "#dcf400", "#f7db11", "#fdb72a", "#fca35d", "#ff5f65"];

    for (let i = 0; i < depths.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
    }
    return div;
};

legend.addTo(map);
