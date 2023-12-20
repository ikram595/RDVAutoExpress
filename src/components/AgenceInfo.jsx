import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import jsonData from "../data.json";
const AgenceInfo = ({ data, setData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

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

  const handleChooseAtelier = (atelierName) => {
    setData({ ...data, atelier: atelierName });
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSelectOption = (selectedItem) => {
    setSelectedOption(selectedItem);
    handleChooseAtelier(selectedItem);
    setSearchTerm("");
  };
  const filteredData = jsonData.ateliers.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Recherchez votre atelier"
          value={searchTerm}
          onChange={handleSearch}
          className="block h-14 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
        />
        {searchTerm.length > 0 && (
          <ul className="mt-2 border border-gray-300 rounded-md p-2">
            {filteredData.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelectOption(item)}
                className="cursor-pointer hover:bg-gray-100 p-2"
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
        {selectedOption && (
          <div className="mt-4">
            <label className="block  font-medium text-gray-700 ">
              Vous Avez Selectionnez :
            </label>
            <h2 className="text-base font-bold">{selectedOption.name}</h2>
            <label className="block  font-medium text-gray-700 ">
              Addresse :
            </label>
            <h2 className="text-base font-bold">{selectedOption.address}</h2>
            <label className="block  font-medium text-gray-700 ">
              Contact :
            </label>
            <h2 className="text-base font-bold">{selectedOption.contact}</h2>
          </div>
        )}
      </div>

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
                    onClick={() => handleChooseAtelier(atelier)}
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
    </div>
  );
};

export default AgenceInfo;
