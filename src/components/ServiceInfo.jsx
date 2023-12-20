import React from "react";
import jsonData from "../data.json";

const ServiceInfo = ({ data, setData }) => {
  const handleServiceSelection = (selectedService) => {
    setData((prevData) => {
      const isSelected = prevData.services.includes(selectedService);
      if (isSelected) {
        return {
          ...prevData,
          services: prevData.services.filter(
            (service) => service !== selectedService
          ),
        };
      } else {
        return {
          ...prevData,
          services: [...prevData.services, selectedService],
        };
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap">
        {jsonData.services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceSelection(service.name)}
            className={`border p-2 m-2 cursor-pointer ${
              data.services.includes(service.name) ? "bg-gray-200" : "bg-white"
            }`}
          >
            {service.name}
          </div>
        ))}
      </div>
      {data.services.length > 0 && (
        <div className="mt-4">
          <label className="block  font-medium text-gray-700 ">
            Services Sélectionnés:
          </label>
          <ul>
            {data.services.map((selectedService, index) => (
              <li key={index} className="text-base font-bold">
                - {selectedService}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceInfo;
