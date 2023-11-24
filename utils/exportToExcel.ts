// utils/exportToExcel.ts
import * as XLSX from 'xlsx';

export const exportToExcel = (data: any[], fileName: string): void => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};
