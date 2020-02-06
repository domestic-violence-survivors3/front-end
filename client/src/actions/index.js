import { axiosWithAuth } from "../utils/axiosWithAuth";

import { DATA_START, DATA_SUCCESS, DATA_FAILURE } from "../reducers";

const userID = localStorage.getItem("userID")

export const userFetch = () => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get(`https://cors-anywhere.herokuapp.com/https://dvscalculator.herokuapp.com/users/${userID}`)
    .then(
      res => {
        console.log("RES.DATA FROM ACTIONS LINE 13: ", res.data)
        dispatch({ type: DATA_SUCCESS, payload: res.data })
      }
    )
    .catch(
      err => {
        console.log(err)
        dispatch({ type: DATA_FAILURE, payload: err })
      }
    )
}