<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";

  let map;

  const lat = 50.42;
  const lng = 16.168;

  const markerCoords = [50.42, 16.168];
  const circleCoords = [50.08, 14.43];

  onMount(() => {
    map = L.map("map").setView(markerCoords, 8);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 20,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const marker = L.marker(markerCoords).addTo(map);
    marker.bindPopup("<b>Náchod</b><br>I am a pop up").openPopup();

    L.circle(circleCoords, {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.3,
      radius: 7000,
    })
      .addTo(map)
      .bindPopup("<b>Praha</b><br>I am the circle.");
  });
</script>

<div id="map"></div>

<style>
  #map {
    margin-top: 7rem;
    width: 100%;
    height: 60vh;
  }
</style>
