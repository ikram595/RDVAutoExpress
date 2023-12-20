import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { fr } from "date-fns/locale";
import { isSaturday, isSunday } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import jsonData from "../data.json";

const CalendarComponent = ({ data, setData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [availableHours, setAvailableHours] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      setData((prevData) => ({
        ...prevData,
        date: selectedDate.toLocaleDateString(),
      }));

      const localDateString = selectedDate.toLocaleDateString(); //format mm/jj/aaaa

      const dayData = jsonData.jours.find(
        (day) => day.date === localDateString
      );

      const hoursForDate = dayData ? dayData.horraires : [];
      setAvailableHours(hoursForDate);
    }
  }, [selectedDate, setData]);

  useEffect(() => {
    if (selectedHour) {
      setData((prevData) => ({
        ...prevData,
        heure: selectedHour,
      }));
    }
  }, [selectedHour, setData]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedHour(null); // Reset selectedHour when the date changes
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
  };

  const filterWeekends = (date) => {
    // Return false if the date is Saturday or Sunday
    return !isSaturday(date) && !isSunday(date);
  };

  return (
    <div className="space-y-6">
      <label className="block font-medium text-gray-700 ">
        Selectionnez une date
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        dateFormat="dd/MM/yyyy"
        className="block h-14 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
        placeholderText="jj/mm/aaaa"
        showDisabledMonthNavigation
        locale={fr}
        filterDate={filterWeekends}
      />

      {selectedDate && (
        <div className="mt-4">
          <label className="block mb-2 font-medium text-gray-700 ">
            Horaires disponibles pour {"  "}
            <span className="text-base font-bold">
              {selectedDate.toLocaleDateString("fr-FR", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </span>
          </label>
          <div className="flex flex-wrap gap-2 space-x-2">
            {availableHours.length > 0 ? (
              availableHours.map((hour) => (
                <button
                  key={hour}
                  onClick={() => handleHourSelect(hour)}
                  className={`p-2 border ${
                    selectedHour === hour
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } rounded focus:outline-none`}
                >
                  {hour}
                </button>
              ))
            ) : (
              <label className="block  font-medium text-gray-400 ">
                Pas d'horaires disponibles, veuillez selectionner un autre jour.
              </label>
            )}
          </div>
        </div>
      )}
      {selectedDate && selectedHour && (
        <div className="mt-4">
          <label className="block  font-medium text-gray-700 ">
            Date Selectionnée:{" "}
            <span className="text-base font-bold">
              {selectedDate.toLocaleDateString("fr-FR", {
                weekday: "long",

                month: "long",
                day: "numeric",
              })}
            </span>
          </label>

          <label className="block  font-medium text-gray-700 ">
            Heure Selectionnée:{" "}
            <span className="text-base font-bold">{selectedHour}</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
