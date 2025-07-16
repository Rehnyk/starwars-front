<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import customIcon from "/assets/V-marker.png";

  let map;

  const markerCoords = [50.4204, 16.1683];
  const circleCoords = [50.38, 16.07];

  const customMarker = L.icon({
    iconUrl: customIcon,
    iconSize: [40, 40],
    popupAnchor: [0, -15],
  });

  onMount(() => {
    map = L.map("map").setView(markerCoords, 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 20,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const marker = L.marker(markerCoords, { icon: customMarker }).addTo(map);
    marker.bindPopup("<b>Level Systems</b><br>Náchod").openPopup();

    L.circle(circleCoords, {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.3,
      radius: 2000,
    })
      .addTo(map)
      .bindPopup("<b>Rozkoš</b><br>Vodní nádrž");
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
