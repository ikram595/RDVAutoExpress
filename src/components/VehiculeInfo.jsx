import React, { useState } from "react";
import jsonData from "../data.json";

const VehiculeInfo = ({ data, setData }) => {
  const [selectedType, setSelectedType] = useState(1);
  const [abreviation, setAbreviation] = useState("Type Immatriculation ");
  const selectedTypeData = jsonData.type_immatricule.find(
    (type) => type.id === selectedType
  );

  const maxNumCharacters = selectedTypeData ? selectedTypeData.nbNum : 4;
  const maxNumCharactersSerie = selectedTypeData ? selectedTypeData.nbSerie : 4;

  const handleInputChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    const limitedNumericValue = numericValue.slice(0, maxNumCharacters);
    setData({ ...data, numImmatriculation: limitedNumericValue });
  };
  const handleNumSerieChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    const limitedNumericValue = numericValue.slice(0, maxNumCharactersSerie);
    setData({ ...data, numSerie: limitedNumericValue });
  };

  const handleSelectChange = (e) => {
    const newSelectedType = Number(e.target.value);

    setSelectedType(newSelectedType);
    //typeImmatriculation
    const selectedTypeObject = jsonData.type_immatricule.find(
      (type) => type.id === newSelectedType
    );
    setData({ ...data, typeImmatriculation: selectedTypeObject });
    //abreviation
    const newAbreviation = jsonData.type_immatricule.find(
      (type) => type.id === newSelectedType
    )?.abreviation;
    setAbreviation(newAbreviation || "");
  };

  return (
    <div className="space-y-6">
      <div className="mt-1 ">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Type d’Immatriculation
        </label>
        <select
          value={selectedType}
          onChange={handleSelectChange}
          className="block h-14 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
        >
          {jsonData.type_immatricule.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-x-8 items-end">
        {/**numero serie */}

        <div className="mt-1 ">
          <label className="block text-sm font-medium text-gray-700 pb-2">
            N° Serie
          </label>
          <input
            onChange={handleNumSerieChange}
            value={data.numSerie}
            type="text"
            id="numserie"
            maxLength={maxNumCharactersSerie}
            className="block h-14 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
          />
        </div>
        <label className="block text-base font-medium text-gray-700 pb-2">
          {abreviation}
        </label>
        {/**num immatriculation */}
        {maxNumCharacters > 0 && (
          <div className="mt-1 ">
            <label className="block text-sm font-medium text-gray-700 pb-2">
              N° Immatriculation
            </label>
            <input
              onChange={handleInputChange}
              value={data.numImmatriculation}
              type="text"
              id="numImmatriculation"
              maxLength={maxNumCharacters}
              className="block h-14 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
            />
          </div>
        )}
      </div>
      {/**num chassis */}
      <div className="mt-1 ">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Les 10 premiéres chiffres de N° chassis
        </label>
        <input
          onChange={(e) => {
            const numericValue = e.target.value;
            const limitedNumericValue = numericValue.slice(0, 10);
            setData({ ...data, numChassis: limitedNumericValue });
          }}
          value={data.numChassis}
          type="text"
          id="numChassis"
          className="block h-14 w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
        />
      </div>
      {/**kilometrage */}
      <div className="mt-1 ">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Kilometrage
        </label>
        <input
          onChange={(e) => {
            const numericValue = e.target.value.replace(/[^0-9]/g, "");

            setData({ ...data, kilometrage: numericValue });
          }}
          value={data.kilometrage}
          type="text"
          id="kilometrage"
          className="block h-14 w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
        />
      </div>
    </div>
  );
};

export default VehiculeInfo;
