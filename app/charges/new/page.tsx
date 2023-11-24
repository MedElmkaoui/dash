'use client'

import { FC, useState } from "react";
import Link from "next/link";
import {useRouter} from 'next/navigation'
import { RiCheckboxCircleLine } from "react-icons/ri";
import ModalsNewUser from "@/components/Modals/ModalsNewUser";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FormCharge from "@/components/Forms/FormCharge";
import { HiMiniArrowSmallLeft, HiOutlineArrowDownCircle } from "react-icons/hi2";

const NewCharge: FC = () => {
  const [step, setStep] = useState("charge");
  const router = useRouter();

 

  return (
    <>
      <Breadcrumb pageName="Nouvelle Charge" showTitle={false} />
      <div className="overflow-hidden rounded-sm bg-white shadow-default dark:bg-boxdark">
        <div className="relative h-50 flex items-center justify-center">
          <div className="absolute bg-gray-2 dark:bg-meta-4 w-[60%] h-0.5"></div>
          <div className="absolute w-[60%] flex justify-between items-center">
            <div
              className={`h-10 w-10 flex items-center justify-center transition-all rounded-full ${
                step === "charge" ? "bg-primary text-white" : "bg-gray-2 text-graydark dark:text-white dark:bg-meta-4"
              }`}
            >
              <HiOutlineArrowDownCircle  size={15} />
            </div>
            <div
              className={`h-10 w-10 flex items-center justify-center transition-all rounded-full ${
                step === "confirm" ? "bg-primary text-white" : "bg-gray-2 text-graydark dark:text-white dark:bg-meta-4"
              }`}
            >
              <RiCheckboxCircleLine size={15} />
            </div>
          </div>
        </div>
        {/* Form Charge */}
        {step === "charge" && <FormCharge type="Création" setStep={setStep} />}
        {/* Form Confirm */}
        {step === "confirm" && (
          <div className="rounded-sm px-25 bg-white shadow-default dark:bg-boxdark">
            <div className="text-center py-4 px-6.5 ">
              <div className="my-25">
                <h4 className="text-[45px] text-lg mb-4.5 font-bold text-graydark dark:text-white">Terminé avec succès !</h4>
                <p>Les informations de la charge ont été ajoutées avec succès.</p>
              </div>
              <div className="flex justify-between">
                <a
                  onClick={() => {
                    setStep("charge");
                  }}
                  className="flex justify-center items-center gap-3 rounded bg-graydark dark:bg-black py-3 px-6 text-gray"
                >
                  <HiMiniArrowSmallLeft size={22} />
                  <span>Retour</span>
                </a>
                <a
                  onClick={() => {
                    setStep("");
                    router.push("/charges");
                  }}
                  className="flex justify-center rounded bg-primary py-3 px-10 text-gray"
                >
                  Confirmer
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewCharge;
