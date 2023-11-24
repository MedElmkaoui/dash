import { FC } from "react";
import Link from "next/link";
import { RiDeleteBin5Line, RiEditLine, RiCoinsLine, RiExchangeBoxLine, RiDownload2Line } from "react-icons/ri";

interface User {
  id: number;
  name: string;
}

interface Charge {
  id: number;
  name: string;
  montant: number;
  type: string;
  date: string;
  justif?: string | null;
  not: string;
  User: User; // Include User object
}

const Data: Charge[] = [
  {
    id: 1,
    name: "Charge-001",
    montant: 100.0,
    type: 'Expense',
    date: '2023-01-01',
    justif: 'path/to/file.pdf',
    not: 'Some description',
    User: { id: 1, name: 'Omar' }, // Include User object
  },
  {
    id: 2,
    name: "Charge-002",
    montant: 50.0,
    type: 'Income',
    date: '2023-01-02',
    justif: null,
    not: 'Another description',
    User: { id: 2, name: 'Brahim' }, // Include User object
  },
  // Add more charge items as needed
];

interface TableChargesProps {}

const TableCharges: FC<TableChargesProps> = () => {
  const downloadFile = (filePath: string | null) => {
    if (filePath) {
      // Implement file download logic here
      console.log(`Downloading file: ${filePath}`);
    }
  };

  return (
    <div className="rounded-sm bg-white m-6 px-5 pt-6 pb-2.5 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Nom Charge
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Type
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Date
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Justificatif
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Note
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Utilisateur
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Data.map((dataItem, key) => (
              <tr key={key}>
                <td className={`${Data.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-8 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {dataItem.name}
                  </p>
                  <p className="text-sm">{dataItem.montant} DH</p>
                </td>
                <td className={`${Data.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {dataItem.type}
                  </p>
                </td>
                <td className={`${Data.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {dataItem.date}
                  </p>
                </td>
                <td className={`${Data.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  {dataItem.justif ? (
                    <button
                      className="text-primary hover:text-primary-dark"
                      onClick={() => downloadFile(dataItem.justif ? dataItem.justif : '')}
                    >
                      Download
                    </button>
                  ) : (
                    <p className="text-black dark:text-white">No file</p>
                  )}
                </td>
                <td className={`${Data.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {dataItem.not}
                  </p>
                </td>
                <td className={`${Data.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {dataItem.User.name}
                  </p>
                </td>
                <td className={`${Data.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <div className="flex items-center space-x-3.5">
                    <Link href={`/charges/${dataItem.id}/update`} className="hover:text-primary">
                      <RiEditLine size={20} />
                    </Link>
                    <Link href='' className="hover:text-primary">
                      <RiDeleteBin5Line size={20} />
                    </Link>
                    
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

export default TableCharges;
