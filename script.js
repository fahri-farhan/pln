// Inisialisasi peta
const map = L.map('map').setView([-6.9, 109.68], 12);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Data lokasi PLN
const locations = [
  {
    name: "PLN UP3 PEKALONGAN",
    lat: -6.885,
    lng: 109.684,
    image: "image/unnamed.jpg",
    detail: "Kantor utama UP3 Pekalongan."
  },
  {
    name: "PLN ULP UP3 PEKALONGAN",
    lat: -6.8850,
    lng: 109.6792,
    image: "https://via.placeholder.com/200?text=ULP+UP3+PEKALONGAN",
    detail: "Unit Layanan Pelanggan wilayah Pekalongan."
  },
  {
    name: "PLN ULP UP3 BATANG",
    lat: -6.906312,
    lng: 109.727275,
    image: "https://via.placeholder.com/200?text=ULP+UP3+BATANG",
    detail: "Unit layanan untuk wilayah Batang."
  },
  {
    name: "PLN ULP UP3 WIRADESA",
    lat: -6.927231,
    lng: 109.607707,
    image: "https://via.placeholder.com/200?text=ULP+UP3+WIRADESA",
    detail: "Melayani wilayah Wiradesa dan sekitarnya."
  },
  {
    name: "PLN UP3 KEDUNGWUNI",
    lat: -6.917937,
    lng: 109.610759,
    image: "https://via.placeholder.com/200?text=UP3+KEDUNGWUNI",
    detail: "Kantor cabang Kedungwuni."
  }
];

// Tambahkan marker dan popup untuk tiap lokasi
locations.forEach(loc => {
  const popupContent = `
    <div class="popup-content">
      <strong>${loc.name}</strong><br>
      ${loc.detail}<br>
      <img src="${loc.image}" alt="${loc.name}">
    </div>
  `;
  L.marker([loc.lat, loc.lng])
    .addTo(map)
    .bindPopup(popupContent);
});
