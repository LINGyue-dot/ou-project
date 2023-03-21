import axios from "axios";

const ip = "http://192.168.0.102";
const port = 8080;

export const sendEquip = (price, tag, weightObj) => {
  const param = new URLSearchParams({ price, tag }).toString();
  const url = new URL(`${ip}:${port}/equip/gain`);
  url.search = new URLSearchParams(param);
  return axios.post(url, weightObj);
};
