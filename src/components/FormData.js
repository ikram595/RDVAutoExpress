import React, { useState } from "react";
import NumericInput from "./NumericInput";
import jsonData from "../data/data.json";

const FormData = () => {
  const [selectedValue, setSelectedValue] = useState(
    jsonData.type_immatricule[0].name
  );
  const [displayText, setDisplayText] = useState(
    jsonData.type_immatricule[0].abreviation
  );

  const selectOptions = jsonData.type_immatricule.map((item) => (
    <option key={item.id} value={item.abreviation}>
      {item.name}
    </option>
  ));
  // Event handlers
  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    setDisplayText(` ${selectedOption}`);
  };

  return (
    <div>
      <h2>Service automobile en un click!</h2>
      <p>
        Renseignez les informations ci-dessous et reservez maintenant vos
        visites
      </p>
      <form className="infos_form" onSubmit="">
        <span className="labels">Type d’Immatriculation</span>

        <select
          name="type_imma"
          value={selectedValue}
          onChange={handleDropdownChange}
        >
          {selectOptions}
        </select>

        <span className="labels">N° d'immatriculation</span>
        <div className="immatricule">
          <NumericInput
            maxDigits={jsonData.type_immatricule.nbSerie}
            placeHolder="Serie "
          />
          <span>{displayText}</span>
          <NumericInput
            maxDigits={jsonData.type_immatricule.nbNum}
            placeHolder="N° "
          />
        </div>
        <span className="labels">
          Les 5 derniers caractères du N° de châssis
        </span>
        <NumericInput maxDigits={5} placeHolder="XXXXX" />

        <button type="submit">Réserver un RDV</button>
        <p>
          Avez-vous déja un compte? <span>Connectez maintenant !</span>
        </p>
      </form>
    </div>
  );
};

export default FormData;
