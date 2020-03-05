import { GET_PROFILE_SUCCESS, GET_PEOPLE_FAILED } from "./types";

const getProfileAction = name => {
  const fetchProfile = fetch(`http://localhost:3004/people?name=${name}`, {
    method: "GET"
  }).then(res => res.json());
  return {
    type: GET_PROFILE_SUCCESS,
    payload: fetchProfile
  };
};
export default getProfileAction;
