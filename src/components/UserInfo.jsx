import React from "react";
import { CiCircleAlert } from "react-icons/ci";
const UserInfo = ({ data, setData }) => {
  return (
    <div className="space-y-6">
      <div className="flex gap-x-8 items-end">
        <div className="mt-1 ">
          <label className="block text-sm font-medium text-gray-700 pb-2">
            Nom
          </label>
          <input
            type="text"
            onChange={(e) => {
              const inputValue = e.target.value;
              const lettersOnly = inputValue.replace(/[^a-zA-Z]/g, "");
              setData({ ...data, nom: lettersOnly });
            }}
            value={data.nom}
            className="block h-14 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
          />
        </div>

        <div className="mt-1 ">
          <label className="block text-sm font-medium text-gray-700 pb-2">
            Prénom
          </label>
          <input
            type="text"
            onChange={(e) => {
              const inputValue = e.target.value;
              const lettersOnly = inputValue.replace(/[^a-zA-Z]/g, "");
              setData({ ...data, prenom: lettersOnly });
            }}
            value={data.prenom}
            className="block h-14 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-1 ">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          N° CIN
        </label>
        <input
          onChange={(e) => {
            const numericValue = e.target.value;
            const limitedNumericValue = numericValue.slice(0, 8);
            setData({ ...data, cin: limitedNumericValue });
          }}
          value={data.cin}
          type="text"
          id="numChassis"
          className="block h-14 w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
        />
      </div>

      <div className="mt-1 ">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          N° tel
        </label>
        <input
          onChange={(e) => {
            const numericValue = e.target.value.replace(/[^0-9]/g, "");
            const limitedNumericValue = numericValue.slice(0, 8);
            setData({ ...data, tel: limitedNumericValue });
          }}
          value={data.tel}
          type="text"
          className="block h-14 w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
        />
        <label className="flex items-center text-sm font-normal text-gray-400 pb-2 ">
          <span className="font-medium text-lg mr-2">
            <CiCircleAlert />
          </span>
          Si besoin, l'atelier vont vous recontacter par tel pour reconfirmer le
          RDV.
        </label>
      </div>
      <div className="mt-1 ">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Email (optionnel)
        </label>
        <input
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          value={data.email}
          type="email"
          id="email"
          className="block h-14 w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-customBlue focus:outline-none focus:customBlue sm:text-sm"
        />
      </div>
      <div className="mt-1"></div>
    </div>
  );
};

export default UserInfo;
