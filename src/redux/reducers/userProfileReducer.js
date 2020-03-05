import {
  GET_PROFILE_SUCCESS
  //   GET_PEOPLE_FAILED
} from "../../components/actions/types";

const userProfile = {};

const profileReducer = (state = userProfile, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    // case GET_PEOPLE_FAILED:
    //   return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
