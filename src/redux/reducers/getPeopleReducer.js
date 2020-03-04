import {
  GET_PEOPLE_SUCCESS
  //   GET_PEOPLE_FAILED
} from "../../components/actions/types";

const peopleState = {
  people: []
};

const peopleReducer = (state = peopleState, action) => {
  switch (action.type) {
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        peopleList: action.payload
      };
    // case GET_PEOPLE_FAILED:
    //   return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
