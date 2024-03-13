import axios from "axios";
import {
  BASE_URL,
  DELETE_PRODUCET_URL,
  GET_PRODUCET_URL,
  POST_PRODUCET_URL,
} from "../../constant";

export const getProducet = () => {
  return axios.get(BASE_URL + GET_PRODUCET_URL).then((res) => {
      const data = res.data;
      const status = res.status;
      return {
        data,status,
      };
    })
    .catch((err) => console.log(err));
};

export const postProducet = (action) => {
  return axios
    .post(BASE_URL + POST_PRODUCET_URL, action.paylod)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => console.log(err));
};

export const deleteProducet = (action) => {
  return axios
    .delete(BASE_URL + DELETE_PRODUCET_URL + action.paylod)
    .then((res) => {
      const data = action.paylod;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => console.log(err));
};
