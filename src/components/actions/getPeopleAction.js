import { GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILED } from "./types";
const fetchPeople = fetch("http://localhost:3004/people").then(res =>
  res.json()
);

const getPeopleAction = () => {
  return {
    type: GET_PEOPLE_SUCCESS,
    payload: fetchPeople
  };
};
export default getPeopleAction;
