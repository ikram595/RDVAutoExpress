import React from "react";
import NumericInput from "./NumericInput";

const FormData = () => {
  return (
    <div>
      <h2>Service automobile en un click!</h2>
      <p>
        Renseignez les informations ci-dessous et reservez maintenant vos
        visites
      </p>
      <form className="infos_form" onSubmit="">
        <span className="labels">Type d’Immatriculation</span>
        <select name="type_imma">
          <option value="Serie Normale (TU) تونس">
            Serie Normale (TU) تونس
          </option>
          <option value="Regime suspensif(RS)">Regime suspensif(RS)</option>
          <option value="Personnel administratif et technique (PAT)">
            Personnel administratif et technique (PAT)
          </option>
          <option value="Chef de Mission diplomatique (CMD)">
            Chef de Mission diplomatique (CMD)
          </option>
          <option value="Corps diplomatique (CD)">
            Corps diplomatique (CD)
          </option>
        </select>
        {/***affichage conditionnel */}

        <span className="labels">N° d'immatriculation</span>
        <div className="immatricule">
          <NumericInput maxDigits={3} placeHolder="Serie " />
          <span>(TU) تونس</span>
          <NumericInput maxDigits={4} placeHolder="N° " />
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
