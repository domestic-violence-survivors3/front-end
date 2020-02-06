export const DATA_START = "FETCHING_DATA_START";
export const DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const DATA_FAILURE = "FETCHING_DATA_FAILURE";
export const EDITING_PERSONAL_STATE = "EDITING_PERSONAL_STATE";
export const FORM_STATE = "FORM_STATE";
export const RESET_FORM = "RESET_FORM";
export const EDITING_PERSONAL_STATE_CHANGE = "EDITING_PERSONAL_STATE_CHANGE";

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
  isLoading: false,
  error: {}
}

export default(state = initialState, action) => {
  switch(action.type){
    case DATA_START:
      return{
        ...state,
        isLoading: true
      };
    case DATA_SUCCESS:
      return{
        ...state,
        isloading: false,
        data: {
          user: {
            id: action.payload.data.user.id,
            username: action.payload.data.user.username
          },
          personalBudget: [
            {
              id: action.payload.data.personalBudget[0].id,
              transportation: action.payload.data.personalBudget[0].transportation,
              food: action.payload.data.personalBudget[0].food,
              healthInsurance: action.payload.data.personalBudget[0].healthInsurance,
              carInsurance: action.payload.data.personalBudget[0].carInsurance,
              healthCare: action.payload.data.personalBudget[0].healthCare,
              carLoans: action.payload.data.personalBudget[0].carLoans,
              personalLoans: action.payload.data.personalBudget[0].personalLoans,
              other: action.payload.data.personalBudget[0].other,
              user_id: action.payload.data.personalBudget[0].user_id
            }
          ],
          relocateBudget: [
            {
              id: action.payload.data.relocateBudget[0].id,
              hotelCosts: action.payload.data.relocateBudget[0].hotelCosts,
              rentalDeposit: action.payload.data.relocateBudget[0].rentalDeposit,
              utilities: action.payload.data.relocateBudget[0].utilities,
              storage: action.payload.data.relocateBudget[0].storage,
              rent: action.payload.data.relocateBudget[0].rent,
              carRental: action.payload.data.relocateBudget[0].carRental,
              gas: action.payload.data.relocateBudget[0].gas,
              cellphoneFees: action.payload.data.relocateBudget[0].cellphoneFees,
              movingTruck: action.payload.data.relocateBudget[0].movingTruck,
              mentalHealth: action.payload.data.relocateBudget[0].mentalHealth,
              incomeLoss: action.payload.data.relocateBudget[0].incomeLoss,
              other: action.payload.data.relocateBudget[0].other,
              user_id: action.payload.data.relocateBudget[0].user_id
            }
          ]
        }
      };
    case DATA_FAILURE:
      return{
        ...state,
        isLoading:false,
        data: { 
          user: {
            id: action.payload.data.user.id,
            username: action.payload.data.user.username
          },
          personalBudget: [
            {
              id: action.payload.data.personalBudget[0].id,
              transportation: action.payload.data.personalBudget[0].transportation,
              food: action.payload.data.personalBudget[0].food,
              healthInsurance: action.payload.data.personalBudget[0].healthInsurance,
              carInsurance: action.payload.data.personalBudget[0].carInsurance,
              healthCare: action.payload.data.personalBudget[0].healthCare,
              carLoans: action.payload.data.personalBudget[0].carLoans,
              personalLoans: action.payload.data.personalBudget[0].personalLoans,
              other: action.payload.data.personalBudget[0].other,
              user_id: action.payload.data.personalBudget[0].user_id
            }
          ],
          relocateBudget: [
            {
              id: action.payload.data.relocateBudget[0].id,
              hotelCosts: action.payload.data.relocateBudget[0].hotelCosts,
              rentalDeposit: action.payload.data.relocateBudget[0].rentalDeposit,
              utilities: action.payload.data.relocateBudget[0].utilities,
              storage: action.payload.data.relocateBudget[0].storage,
              rent: action.payload.data.relocateBudget[0].rent,
              carRental: action.payload.data.relocateBudget[0].carRental,
              gas: action.payload.data.relocateBudget[0].gas,
              cellphoneFees: action.payload.data.relocateBudget[0].cellphoneFees,
              movingTruck: action.payload.data.relocateBudget[0].movingTruck,
              mentalHealth: action.payload.data.relocateBudget[0].mentalHealth,
              incomeLoss: action.payload.data.relocateBudget[0].incomeLoss,
              other: action.payload.data.relocateBudget[0].other,
              user_id: action.payload.data.relocateBudget[0].user_id
            }
          ]
        }
      };
  }
}