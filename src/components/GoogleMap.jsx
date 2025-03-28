"use client";
import { GoogleMap as GMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%", // Parent div ke andar fit hoga
};

const center = {
  lat: 28.6139, // Delhi Latitude
  lng: 77.209,  // Delhi Longitude
};

export default function GoogleMapComponent() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div style={{ width: "80%", height: "400px", margin: "auto", border: "2px solid #ccc", borderRadius: "10px", overflow: "hidden" }}>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        onLoad={() => setMapLoaded(true)}
      >
        {mapLoaded && (
          <GMap mapContainerStyle={containerStyle} center={center} zoom={12}>
            <Marker position={center} />
          </GMap>
        )}
      </LoadScript>
    </div>
  );
}
