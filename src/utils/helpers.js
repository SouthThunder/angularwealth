import CryptoJS from "crypto-js";

export const encrypt = (data) => {
  const hash = CryptoJS.SHA512(data);
  return hash.toString(CryptoJS.enc.Hex);
};
