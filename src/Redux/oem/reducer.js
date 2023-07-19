import {
    OEM_CAR_REQ,
    OEM_CAR_REQ_FAILURE,
    OEM_CAR_REQ_SUCCESS,
  } from "./action-types";
  
  const intialStatae = {
    isLoading: false,
    isError: false,
    oem_cars: [],
  };
  
  export const reducer = (state = intialStatae, { type, payload }) => {
    switch (type) {
      case OEM_CAR_REQ:
        return { ...state, isLoading: true, isError: false };
      case OEM_CAR_REQ_SUCCESS:
        return { ...state, isLoading: false, oem_cars: payload };
      case OEM_CAR_REQ_FAILURE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };