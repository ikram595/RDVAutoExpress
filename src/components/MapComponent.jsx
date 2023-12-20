import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { GiPositionMarker } from "react-icons/gi";
import jsonData from "../data.json";

import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const costumIcon = new Icon({
    iconUrl: require("../assets/marker_icon.png"),
    iconSize: [38, 38],
  });
  const createCostumClusterIcon = (cluster) => {
    return new L.divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "costum-marker-cluster",
      iconSize: new L.point(33, 33),
    });
  };
  const [currentForm, setCurrentForm] = useState(2); // Initialize with the first form

  const handleChooseAtelier = () => {
    // Update the form to the next one when the button is clicked
    setCurrentForm(currentForm + 1);
  };

  return (
    <MapContainer
      center={[35.85344, 10.629375]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCostumClusterIcon}
      >
        {jsonData.ateliers.map((atelier) => {
          return (
            <Marker position={atelier.geocode} icon={costumIcon}>
              <Popup>
                <h1 className="text-lg font-bold px-1">{atelier.name}</h1>
                <ul className="m-4">
                  <li>
                    {" "}
                    <label className=" text-sm font-semibold  pt-2">
                      Adresse:
                    </label>{" "}
                    {atelier.address}
                  </li>
                  <li>
                    {" "}
                    <label className=" text-sm font-semibold  pt-2">
                      Marques:
                    </label>{" "}
                    {atelier.marque}
                  </li>
                </ul>
                <button
                  onClick={handleChooseAtelier}
                  className="mt-1 flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#0047AB] py-2 px-4 text-sm font-medium text-white hover:bg-[#11355C] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {" "}
                  Choisir Cet Atelier
                </button>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapComponent;
