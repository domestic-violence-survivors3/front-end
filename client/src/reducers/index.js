export const DATA_START = "FETCHING_DATA_START";
export const DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const DATA_FAILURE = "FETCHING_DATA_FAILURE";
export const EDITING_STATE = "EDITING_STATE";
export const FORM_STATE = "FORM_STATE";
export const RESET_FORM = "RESET_FORM";
export const EDITING_STATE_CHANGE = "EDITING_STATE_CHANGE";


const initialState = {
  data: {
    user: {
      id: null,
      username: ""
    },
    personalBudget: [
      {
        id: null,
        transportation: null,
        food: null,
        healthInsurance: null,
        carInsurance: null,
        healthCare: null,
        carLoans: null,
        healthCare: null,
        carLoans: null,
        personalLoans: null,
        other: null,
        user_id: null
      }
    ],
  },
  editing: false,
  isloading: false,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_START:
      return{
        ...state,
        isloading: true
      };
    case DATA_SUCCESS:
      return{
        ...state,
        isloading: false,
        data: {
          personalBudget: [
             {
              id: action.payload.personalBudget[0].id,
              transportation: action.payload.personalBudget[0].transportation,
              food: action.payload.personalBudget[0].food,
              healthInsurance: action.payload.personalBudget[0].healthInsurance,
              carInsurance: action.payload.personalBudget[0].carInsurance,
              healthInsurance: action.payload.personalBudget[0].healthInsurance,
              carInsurance: action.payload.personalBudget[0].carLoans,
              healthCare: action.payload.personalBudget[0].healthCare,
              carLoans: action.payload.personalBudget[0].carLoans,
              personalLoans: action.payload.personalBudget[0].personalLoans,
              other: action.payload.personalBudget[0].other,
              user_id: action.payload.personalBudget[0].user_id
            }
          ],
        }
      }
    default: 
    return state;
  }
}