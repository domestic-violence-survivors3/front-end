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
    relocateBudget: [
      {
        id: null,
        hotelCosts: null,
        rentalDeposit: null,
        utilities: null,
        storage: null,
        rent: null,
        carRental: null,
        gas: null,
        cellphoneFees: null,
        movingTruck: null,
        mentalHealth: null,
        incomeLoss: null,
        other: null,
        user_id: null
      }
    ]
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
          user: {
            id: action.payload.user.id,
            username: action.payload.user.username
          },
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
          relocateBudget: [
            {
              id: action.payload.relocateBudget[0].id,
              hotelCosts: action.payload.relocateBudget[0].hotelCosts,
              rentalDeposit: action.payload.relocateBudget[0].rentalDeposits,
              utilities: action.payload.relocateBudget[0].utilities,
              storage: action.payload.relocateBudget[0].storage,
              rent: action.payload.relocateBudget[0].rent,
              carRental: action.payload.relocateBudget[0].carRental,
              gas: action.payload.relocateBudget[0].gas,
              cellphoneFees: action.payload.relocateBudget[0].cellphoneFees,
              movingTruck: action.payload.relocateBudget[0].movingTruck,
              mentalHealth: action.payload.relocateBudget[0].mentalHealth,
              incomeLoss: action.payload.relocateBudget[0].incomeLoss,
              other: action.payload.relocateBudget[0].other,
              user_id: action.payload.relocateBudget[0].user_id
            }
          ]
        }
      }
    case EDITING_STATE:
      return {
        ...state,
        editing: !state.editing,
        ...state,
        isloading: false,
        data: {
          user: {
            id: action.user.id,
            username: action.user.username
          },
          personalBudget: [
            {
              id: action.personalBudget[0].id,
              transportation: action.personalBudget[0].transportation,
              food: action.personalBudget[0].food,
              healthInsurance: action.personalBudget[0].healthInsurance,
              carInsurance: action.personalBudget[0].carInsurance,
              healthInsurance: action.personalBudget[0].healthInsurance,
              carInsurance: action.personalBudget[0].carLoans,
              healthCare: action.personalBudget[0].healthCare,
              carLoans: action.personalBudget[0].carLoans,
              personalLoans: action.personalBudget[0].personalLoans,
              other: action.personalBudget[0].other,
              user_id: action.personalBudget[0].user_id
            }
          ],
          relocateBudget: [
            {
              id: action.relocateBudget[0].id,
              hotelCosts: action.relocateBudget[0].hotelCosts,
              rentalDeposit: action.relocateBudget[0].rentalDeposits,
              utilities: action.relocateBudget[0].utilities,
              storage: action.relocateBudget[0].storage,
              rent: action.relocateBudget[0].rent,
              carRental: action.relocateBudget[0].carRental,
              gas: action.relocateBudget[0].gas,
              cellphoneFees: action.relocateBudget[0].cellphoneFees,
              movingTruck: action.relocateBudget[0].movingTruck,
              mentalHealth: action.relocateBudget[0].mentalHealth,
              incomeLoss: action.relocateBudget[0].incomeLoss,
              other: action.relocateBudget[0].other,
              user_id: action.relocateBudget[0].user_id
            }
          ]
        }
      };
    case EDITING_STATE_CHANGE:
      return {
        ...state,
        editing:
          state.editing === false ? !state.editing : (state.editing = true),
          ...state,
        isloading: false,
        data: {
          user: {
            id: action.user.id,
            username: action.user.username
          },
          personalBudget: [
            {
              id: action.personalBudget[0].id,
              transportation: action.personalBudget[0].transportation,
              food: action.personalBudget[0].food,
              healthInsurance: action.personalBudget[0].healthInsurance,
              carInsurance: action.personalBudget[0].carInsurance,
              healthInsurance: action.personalBudget[0].healthInsurance,
              carInsurance: action.personalBudget[0].carLoans,
              healthCare: action.personalBudget[0].healthCare,
              carLoans: action.personalBudget[0].carLoans,
              personalLoans: action.personalBudget[0].personalLoans,
              other: action.personalBudget[0].other,
              user_id: action.personalBudget[0].user_id
            }
          ],
          relocateBudget: [
            {
              id: action.relocateBudget[0].id,
              hotelCosts: action.relocateBudget[0].hotelCosts,
              rentalDeposit: action.relocateBudget[0].rentalDeposits,
              utilities: action.relocateBudget[0].utilities,
              storage: action.relocateBudget[0].storage,
              rent: action.relocateBudget[0].rent,
              carRental: action.relocateBudget[0].carRental,
              gas: action.relocateBudget[0].gas,
              cellphoneFees: action.relocateBudget[0].cellphoneFees,
              movingTruck: action.relocateBudget[0].movingTruck,
              mentalHealth: action.relocateBudget[0].mentalHealth,
              incomeLoss: action.relocateBudget[0].incomeLoss,
              other: action.relocateBudget[0].other,
              user_id: action.relocateBudget[0].user_id
            }
          ]
        }
      };
    case FORM_STATE: {
      return {
        ...state,
        data: {
          user: {
            id: null,
            username: ""
          },
          personalBudget: [
            {
              ...state.personalBudget[0],
              [action.name]: action.value
            }
          ],
          relocateBudget: [
            {
              ...state.relocateBudget[0],
              [action.name]: action.value
            }
          ]
        },
      };
    }
    case RESET_FORM: {
      return {
        ...state,
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
          relocateBudget: [
            {
              id: null,
              hotelCosts: null,
              rentalDeposit: null,
              utilities: null,
              storage: null,
              rent: null,
              carRental: null,
              gas: null,
              cellphoneFees: null,
              movingTruck: null,
              mentalHealth: null,
              incomeLoss: null,
              other: null,
              user_id: null
            }
          ]
        },
        editing: false,
        isloading: false,
        error: {}
      };
    }
    default: 
    return state;
  }
}