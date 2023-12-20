import React from "react";
import CalendarComponent from "./CalendarComponent";

const RdvInfo = ({ data, setData }) => {
  return (
    <div>
      <CalendarComponent data={data} setData={setData} />
    </div>
  );
};

export default RdvInfo;
