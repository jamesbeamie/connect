import { combineReducers } from "redux";

// import signUpReducer from "./signUpReducer";
// import signInReducer from "./signInReducer";
import peopleReducer from "./getPeopleReducer";
// import bumpReducer from "./bumpReducer";
// import childrenReducer from "./childrenReducer";
// import engagementReducer from "./engagementReducer";
// import familyReducer from "./familyReducer";
// import potraitReducer from "./potraitReducer";
// import eventReducer from "./eventReducer";

const rootReducer = combineReducers({
  peopleReducer
  //   signUpReducer,
  //   signInReducer,
  //   bumpReducer,
  //   childrenReducer,
  //   engagementReducer,
  //   familyReducer,
  //   potraitReducer,
  //   eventReducer
});

export default rootReducer;
