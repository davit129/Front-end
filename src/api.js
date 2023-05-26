/* eslint-disable */
import axios from "axios";

export async function getCoinsData() {
  const url =
    "https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC";
  return axios.get(url);
}
