import React, { useState } from "react";
import jsonData from "../data.json";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineLocationOn,
  MdCalendarToday,
  MdOutlineQueryBuilder,
  MdOutlineMode,
} from "react-icons/md";
const ConfirmationInfo = ({ data, setData }) => {
  const [isUserExpanded, setIsUserExpanded] = useState(true);
  const [isCarExpanded, setIsCarExpanded] = useState(false);

  const toggleUserSection = () => {
    setIsUserExpanded(!isUserExpanded);
  };

  const toggleCarSection = () => {
    setIsCarExpanded(!isCarExpanded);
  };
  const getMarqueFromNumChassis = (numChassis, numChassisData) => {
    const prefix = numChassis.substring(0, 3);
    const matchingEntry = numChassisData.find((entry) =>
      entry.WMI.includes(prefix)
    );
    return matchingEntry ? matchingEntry.marque : null;
  };
  const marque = getMarqueFromNumChassis(data.numChassis, jsonData.numChassis);
  return (
    <div className="space-y-6">
      <div>
        {/* services */}
        <div className="cursor-pointer bg-gray-200 p-2 mb-2">
          <div className="flex justify-between items-center">
            <label className="block text-lg font-bold text-gray-700 pb-1">
              VOS PRESTATIONS
            </label>
          </div>

          <div className="ml-4">
            <div className="mt-1">
              <div className="flex gap-x-3 items-center">
                <label className="block mb-1 font-normal text-gray-700 ">
                  Services demandés:{" "}
                </label>
                <label className="text-base font-semibold ">
                  <ul>
                    {data.services.map((selectedService, index) => (
                      <li key={index} className="text-base font-bold">
                        - {selectedService}
                      </li>
                    ))}
                  </ul>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*rdv */}
      <div
        onClick={toggleUserSection}
        className="cursor-pointer bg-gray-200 p-3 "
      >
        <div className="flex justify-between items-center">
          <label className="block text-lg font-bold text-gray-700 pb-1">
            VOTRE RENDEZ-VOUS ATELIER
          </label>
          <span>
            {isUserExpanded ? (
              <MdKeyboardDoubleArrowDown />
            ) : (
              <MdOutlineKeyboardDoubleArrowRight />
            )}
          </span>
        </div>
        {isUserExpanded && (
          <div className="ml-4">
            {/*atelier*/}
            <div className="mt-1">
              <label className="block mb-1 font-normal text-gray-700 ">
                Atelier:{" "}
              </label>
              <label className="text-base font-semibold">
                {data.atelier.name}
              </label>
              <label className="text-base font-semibold flex items-center">
                <MdOutlineLocationOn /> {data.atelier.address}
              </label>
            </div>
            {/*date*/}
            <div className="mt-1">
              <label className="block mb-1 font-normal text-gray-700 ">
                Date:
              </label>
              <div className="flex gap-x-8 items-end">
                <label className="text-base font-semibold flex items-center gap-1">
                  <MdCalendarToday /> {data.date}
                </label>
                <label className="text-base font-semibold flex items-center gap-1">
                  <MdOutlineQueryBuilder /> {data.heure}
                </label>
              </div>
            </div>
            <span className="text-base font-normal text-blue-500  underline flex justify-start items-center">
              <MdOutlineMode /> Modifier
            </span>
          </div>
        )}
      </div>

      {/* véhicule */}
      <div
        onClick={toggleCarSection}
        className="cursor-pointer bg-gray-200 p-2 mb-2"
      >
        <div className="flex justify-between items-center">
          <label className="block text-lg font-bold text-gray-700 pb-1">
            VOTRE VEHICULE
          </label>
          <span>
            {isCarExpanded ? (
              <MdKeyboardDoubleArrowDown />
            ) : (
              <MdOutlineKeyboardDoubleArrowRight />
            )}
          </span>
        </div>
        {isCarExpanded && (
          <div className="ml-4">
            <div className="mt-1">
              <div className="flex gap-x-3 items-center">
                <label className="block mb-1 font-normal text-gray-700 ">
                  Immatriculation:{" "}
                </label>
                <label className="text-base font-semibold ">
                  {data.numSerie}
                </label>
                <label className="text-base font-semibold ">
                  {data.typeImmatriculation.abreviation}
                </label>
                <label className="text-base font-semibold ">
                  {data.numImmatriculation}
                </label>
              </div>
            </div>
            <div className="mt-1">
              <div className="flex gap-x-3 items-center">
                <label className="block mb-1 font-normal text-gray-700 ">
                  N° chassis:{" "}
                </label>
                <label className="text-base font-semibold ">
                  {data.numChassis}
                </label>
              </div>

              {marque && (
                <div className="flex gap-x-3 items-center">
                  <label className="block mb-1 font-normal text-gray-700 ">
                    Marque:{" "}
                  </label>
                  <label className="text-base font-semibold ">{marque}</label>
                </div>
              )}
              <div className="flex gap-x-3 items-center">
                <label className="block mb-1 font-normal text-gray-700 ">
                  Kilometrage:{" "}
                </label>
                <label className="text-base font-semibold ">
                  {data.kilometrage} <span>Km</span>
                </label>
              </div>
            </div>{" "}
            <span className="text-base font-normal text-blue-500  underline flex justify-start items-center">
              <MdOutlineMode /> Modifier
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationInfo;
