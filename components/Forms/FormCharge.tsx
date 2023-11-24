import { FC, useState, useEffect } from "react";
import AutocompleteSelect from "../Dropdowns/AutocompleteSelect";
import RowForm from "./RowForm";
import Input from "./Input";
import ModalsNewUser from "../Modals/ModalsNewUser";
import Link from "next/link";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight, HiOutlinePlusCircle } from "react-icons/hi2";

interface User {
  value: string;
  name: string;
}

interface ChargeData {
  date: string;
  montant: string;
  type: string;
  justif: File | null;
  note: string;
  idUser: number | null;
}

export interface FormChargeProps {
  type: string;
  setStep: any;
}

const FormCharge: FC<FormChargeProps> = ({ type, setStep }) => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [openModalUser, setOpenModalUser] = useState<boolean>(false);

  const [users, setUsers] = useState<User[]>([]);
  const [charge, setCharge] = useState<ChargeData>({
    date: '',
    montant: '',
    type: '',
    justif: null,
    note: '',
    idUser: 0 ,
  });

  useEffect(() => {
    setCharge({
      ...charge,
      idUser: selectedUser ? selectedUser : null,
    });
  }, [selectedUser]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await response.json();

        const transformedArray = usersData.map((user: any) => ({
          value: user.id.toString(),
          name: user.username,
        }));

        setUsers(transformedArray);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStep('confirm');
    console.log(charge);
  };

  return (
    <>
      <div className="rounded-sm lg:px-25 bg-white shadow-default dark:bg-boxdark">
        <div className="py-4 px-6.5 text-center">
          <h2 className="mb-2 font-medium text-lg text-black dark:text-white">
            {type} Charge(s)
          </h2>
          <p className="ml-4 text-sm">Remplissez les informations requises</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
            <RowForm modal={false}>
              <Input
                forEle="date"
                label="Date"
                type="date"
                data={charge}
                setData={setCharge}
                placeholder="Entrez la date"
                row={true}
              />
              <div className="flex w-1/2 gap-2 justify-between items-end">
                <AutocompleteSelect
                  row={true}
                  data={users}
                  label="L'utilisateur en charge"
                  placeholder="Sélectionez l'utilisateur"
                  onSelect={setSelectedUser}
                />
                <button
                  onClick={() => setOpenModalUser(true)}
                  type="button"
                  className="flex justify-center items-center gap-2 rounded bg-primary py-3.5 px-6 text-gray"
                >
                  <HiOutlinePlusCircle size={22} />
                </button>
              </div>
            </RowForm>

            <RowForm modal={false}>
              <Input
                forEle="montant"
                label="Montant"
                type="text"
                data={charge}
                setData={setCharge}
                placeholder="Entrez le montant"
                row={true}
              />
              <Input
                forEle="type"
                label="Type"
                type="text"
                data={charge}
                setData={setCharge}
                placeholder="Entrez le type"
                row={true}
              />
            </RowForm>

            <RowForm modal={false}>
              <Input
                forEle="justif"
                label="Justificatif"
                type="file"
                data={charge}
                setData={setCharge}
                placeholder="Joindre un fichier"
                row={true}
              />
              <Input
                forEle="note"
                label="Note"
                type="text"
                data={charge}
                setData={setCharge}
                placeholder="Entrez la note"
                row={true}
              />
            </RowForm>

            <div className={`pt-4.5 flex justify-between`}>
              <button
                onClick={() => setStep('charge')}
                className="flex justify-center items-center gap-2 rounded bg-graydark dark:bg-black py-3 px-6 text-gray"
              >
                <HiMiniArrowSmallLeft size={22} />
                <span>Retour</span>
              </button>
              <button
                type="submit"
                className="flex justify-center items-center gap-2 rounded bg-primary py-3 px-6 text-gray"
              >
                <span>Suivant</span>
                <HiMiniArrowSmallRight size={22} />
              </button>
            </div>
          </div>
        </form>
      </div>

      {openModalUser && <ModalsNewUser setModel={setOpenModalUser} />}
    </>
  );
};

export default FormCharge;
