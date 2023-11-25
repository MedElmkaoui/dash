import { useState } from "react";
import Link from "next/link";
import { RiDeleteBin5Line, RiEditLine, RiCoinsLine, RiExchangeBoxLine } from "react-icons/ri";

// Définir l'énumération pour typeAlimentation
const TypeAlimentationEnum = {
  CTC: "CTC",
  ATC: "ATC",
  ETC: "ETC",
};

const AlimentationCaisseData = [
  {
    id: 1,
    Date: '2014/21/02',
    UtilisateurEmetteur: 'Mohamed Elfiniyan',
    UtilisateurReceveur: 'Brahim Fadili',
    typeAlimentation: TypeAlimentationEnum.CTC,
    Montant: 500.0,
    CaisseEmetteur: 'Caisse 15',
    CaisseReceveur: 'Caisse 405',
    justificatif: "Facture123",
    CompteEmetteur: '--',
  },
  // Ajoutez plus de données AlimentationCaisse au besoin
];

const AlimentationCaisseTable = () => {
  return (
    <div className="rounded-sm bg-white m-6 px-5 pt-6 pb-2.5 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Date
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Émetteur
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Receveur
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Type Alimentation
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Montant
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Caisse Émettrice
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Caisse Receptrice
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Compte Émetteur
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Justificatif
              </th>
              
              <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {AlimentationCaisseData.map((alimentationItem, key) => (
              <tr key={key}>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-8 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{alimentationItem.Date}</p>
                </td>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-8 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{alimentationItem.UtilisateurEmetteur}</p>
                </td>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{alimentationItem.UtilisateurReceveur}</p>
                </td>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{alimentationItem.typeAlimentation}</p>
                </td>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{alimentationItem.Montant}</p>
                </td>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{alimentationItem.CaisseEmetteur}</p>
                </td>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{alimentationItem.CaisseReceveur}</p>
                </td>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{alimentationItem.CompteEmetteur}</p>
                </td>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{alimentationItem.justificatif}</p>
                </td>
                <td className={`${AlimentationCaisseData.length - 1 !== key ? "border-b border-[#eee]" : ""} py-5 px-4 dark:border-strokedark`}>
                  <div className="flex items-center space-x-3.5">
                    {/* Ajoutez vos actions ici */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlimentationCaisseTable;
