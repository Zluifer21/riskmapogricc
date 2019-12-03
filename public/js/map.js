var map = L.map('mapid').setView([11.248702, -74.205179], 12);
var gejson='assets/barrios.geo.json';
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiemx1aWZlcjIxIiwiYSI6ImNqbmVyZ2RydDE3aTMzd3A4bnhpd2Q2cWkifQ.Pe5NcznXOZe9P3eAHEMpFA', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 24,
   id: 'mapbox.streets'
}).addTo(map);
var smrLayer = L.geoJson(false, {
    style: function (feature) {
        return {};
    }
});
$.getJSON('barrios.geo.json', function (data) {
    smrLayer.addData(data).addTo(map);
});