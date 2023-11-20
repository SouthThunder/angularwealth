import CryptoJS from "crypto-js";

export const encrypt = (data) => {
  const hash = CryptoJS.SHA512(data);
  return hash.toString(CryptoJS.enc.Hex);
};

export const formatDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear().toString();
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}  