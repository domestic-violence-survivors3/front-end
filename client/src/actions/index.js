import { axiosWithAuth } from "../utils/axiosWithAuth";
import { DATA_FAILURE, DATA_START, DATA_SUCCESS } from "../reducers";

export const userFetch = () => dispatch => {
  dispatch({ type: DATA_START });
}

axiosWithAuth()
  .get("/api/")//finish adding endpoint here
  .then(
    res => {
      console.log("res from Actions line 12")
    }
  )