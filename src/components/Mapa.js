import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Mapa = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyBup5eD6e99mnOV1hllVtdK6_h_mIOvpgo", // Replace with your Google Maps API key
      version: "weekly",
    });

    loader.load().then((google) => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 16.751846441169903, lng: -93.16229644731365 },
        zoom: 18,
      });

      new google.maps.Marker({
        position: { lat: 16.751846441169903, lng: -93.16229644731365 },
        map: map,
        title: "My Marker",
      });
    });
  }, []); // Run only once when the component mounts

  return (
    <a href="https://maps.app.goo.gl/E7bqL6JWiMco4TPM9">
      <div id="map" style={{ height: "200px", width: "400px" }}></div>
    </a>
  );
};

export default Mapa;
