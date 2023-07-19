import axios from "axios";
import {
  OEM_CAR_REQ,
  OEM_CAR_REQ_FAILURE,
  OEM_CAR_REQ_SUCCESS,
} from "./action-types";

export const get_oem_fun = (dispatch) => {
  dispatch({ type: OEM_CAR_REQ });
  axios
    .get("https://buycback.onrender.com/oem/")
    .then((res) => {
      dispatch({ type: OEM_CAR_REQ_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: OEM_CAR_REQ_FAILURE }));
};