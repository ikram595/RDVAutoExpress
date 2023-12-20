import React, { useState } from "react";
import logo from "../assets/logo.png";
import VehiculeInfo from "../components/VehiculeInfo";
import ServiceInfo from "../components/ServiceInfo";
import AgenceInfo from "../components/AgenceInfo";
import RdvInfo from "../components/RdvInfo";
import UserInfo from "../components/UserInfo";
import ConfirmationInfo from "../components/ConfirmationInfo";

const RegisterForm = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    typeImmatriculation: "",
    numImmatriculation: "",
    numSerie: "",
    numChassis: "",
    kilometrage: "",
    services: [],
    atelier: "",
    date: "",
    heure: "",
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    cin: "",
    methodeConfirmation: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Détails véhicule",
    "Prestations",
    "Atelier",
    "Horraires",
    "Coordonnées",
    "Confirmation",
  ];
  const titles = [
    "VOTRE VEHICULE",
    "VOS BESOINS",
    "RECHERCHEZ VOTRE ATELIER",
    "SÉLECTIONNEZ VOTRE CRÉNEAU",
    "INFORMATION PERSONNELLES",
    "CONFIRMATION",
  ];
  const subTitles = [
    "Renseignez les informations ci-dessous et reservez maintenant vos visites",
    "Choisissez parmi les prestations listées ci-dessous, les services que vous convienent",
    "Indiquez la zone géographique où vous souhaitez prendre rendez-vous. Vous pouvez également choisir le réparateur agréé pour votre RDV sur la carte",
    "Sélectionnez un créneau de rendez-vous pour déposer votre véhicule en atelier.",
    "Merci de renseigner ces dernières informations afin de finaliser la prise de votre rendez-vous ",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return <VehiculeInfo data={data} setData={setData} />;
    } else if (page === 1) {
      return <ServiceInfo data={data} setData={setData} />;
    } else if (page === 2) {
      return <AgenceInfo data={data} setData={setData} />;
    } else if (page === 3) {
      return <RdvInfo data={data} setData={setData} />;
    } else if (page === 4) {
      return <UserInfo data={data} setData={setData} />;
    } else {
      return <ConfirmationInfo data={data} setData={setData} />;
    }
  };
  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="bg-gradient-to-r from-slate-100 to-[#F8F8F8] w-full h-full min-h-full flex flex-col justify-center py-10 sm:px-6 lg:px-8 z-100 mf:h-screen ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto  w-auto" src={logo} alt="/" />

        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {titles[page]}
        </h1>
        <h3 className="mt-2 text-center text-base font-normal tracking-tight text-gray-900">
          {subTitles[page]}
        </h3>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>{PageDisplay()}</div>
          <div className="flex flex-row gap-3 pt-8">
            <button
              onClick={() => {
                setPage((currPage) => currPage - 1);
                handlePrev();
              }}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#0047AB] py-2 px-4 text-sm font-medium text-white hover:bg-[#11355C] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {page === 0 && currentStep === 0 ? "S’authentifier" : "Retour"}
            </button>
            <button
              onClick={(e) => {
                if (page === titles.length - 1) {
                  alert("Votre RDV est réservé avec succés!");
                  console.log(data);
                } else {
                  setPage((currPage) => currPage + 1);
                  handleNext();
                }
              }}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#0047AB] py-2 px-4 text-sm font-medium text-white hover:bg-[#11355C] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {page === titles.length - 1 && currentStep === steps.length - 1
                ? "Resérver un RDV"
                : "Suivant"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
