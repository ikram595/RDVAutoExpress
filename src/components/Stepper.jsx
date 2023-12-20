import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex space-x-5 bg-gray-200 w-full p-4 mt-10 mx-auto">
      {steps.map((step, index) => (
        <div className="flex flex-col items-center space-y-2">
          <div
            key={index}
            className={`flex items-center justify-center w-10 h-10 border-2 rounded-full ${
              index === currentStep
                ? "bg-blue-500 text-white"
                : "border-gray-300"
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`mt-2 text-sm text-center ${
              index === currentStep ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};
export default Stepper;
