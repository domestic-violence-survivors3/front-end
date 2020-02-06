import { axiosWithAuth } from '../utils/axiosWithAuth';

import { DATA_FAILURE, DATA_START, DATA_SUCCESS } from "../reducers";

const userID = localStorage.getItem("userID")

export const userFetch = () => dispatch => {

  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get(`https://cors-anywhere.herokuapp.com/https://dvscalculator.herokuapp.com/users/${userID}`)
    .then(res => {
      dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(
      err => {
        console.log(err)
        dispatch({ type: DATA_FAILURE, payload: err })
      })
}

export const userSend = user => dispatch => {
  dispatch({ type: DATA_START });

  axiosWithAuth()
    .post(`https://cors-anywhere.herokuapp.com/https://dvscalculator.herokuapp.com/users/${userID}/personal`)
    .then(res => {
      dispatch({ type: DATA_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response })
    })
}