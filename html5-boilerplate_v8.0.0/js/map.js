console.log("mappppppppppppp")
/*var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreeMap</a>contributors'
}).addTo(map);

L.marker([51.505, -0.09]).addTo(map).bindPopup('A pretty css3 popup. <br> Easily customizable.').openPopup();
*/


var map = L.map('map').setView([32.53198, -116.965656], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([32.53198, -116.965656]).addTo(map)
    .bindPopup('Pet Salon <br> Location.')
    .openPopup();