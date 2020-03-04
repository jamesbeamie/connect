import React, { Component } from "react";
import { connect } from "react-redux";
import getPeopleAction from "../actions/getPeopleAction";
import PeopleList from "./PeopleList";

export class People extends Component {
  componentDidMount() {
    this.props.getPeopleAction();
  }
  render() {
    console.log("$$$$$$$", this.props.listedPeople);
    return (
      <div>
        <PeopleList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  listedPeople: state.peopleReducer.peopleList
});
export default connect(mapStateToProps, { getPeopleAction })(People);

// export default connect()(People);
