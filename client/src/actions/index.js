import { axiosWithAuth } from '../utils/axiosWithAuth';

import { DATA_FAILURE, DATA_START, DATA_SUCCESS } from "../reducers";

const userID = localStorage.getItem("userID")

export const userFetch = () => dispatch => {

  dispatch({ type: DATA_START });
  axiosWithAuth()
    .get(`/users/${userID}/`)
    .then(res => {
      console.log("RES.DATA FROM ACTIONS LINE 13: ", res.data)
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
    .post(`/users/${userID}/personal`)
    .then(res => {
      dispatch({ type: DATA_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response })
    })
}

// export const userEdit = (userID, id) => dispatch => {
//   dispatch({ type: DATA_START });
//   axiosWithAuth()
//     .put(`/${userID}/personal/`)
//     .then(res => {
//       console.log("FRIENDS DATA FROM ACTIONS LINE 41: ", res.data)
//       dispatch({ type: DATA_SUCCESS, payload: res.data })
//     })
//     .catch(err => {
//       dispatch({ type: DATA_FAILURE, payload: err.response })
//     });
// }