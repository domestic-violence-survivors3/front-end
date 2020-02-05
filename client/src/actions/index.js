import { axiosWithAuth } from '../utils/axiosWithAuth';

import { DATA_FAILURE, DATA_START, DATA_SUCCESS } from "../reducers";

export const userFetch = () => dispatch => {
  dispatch({ type: DATA_START });

  axiosWithAuth()
    .get("https://dvscalculator.herokuapp.com/users/1")
    .then(res => {
      console.log('response from line 9 actions: ', res.data)
      dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(
      err => {
        console.log(err)
        dispatch({ type: DATA_FAILURE, payload: err })
      })
}