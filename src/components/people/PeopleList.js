import React, { Component } from "react";

export class PeopleList extends Component {
  renderPeople = () => {
    if (this.props.people !== undefined) {
      return this.props.people.map(person => {
        return (
          <div key={person.id} className='singleProfilePicContainer'>
            <img
              className='profilePic'
              src={`Albums/${person.name}/${person.profile_pic}.jpeg`}
              alt='user Images'
            />
            <div>
              <h4 className='info'>{person.name}</h4>
              {person.online_status === "on" && (
                <img src='Albums/live.svg' alt='online' className='live' />
              )}
            </div>
          </div>
        );
      });
    }
  };
  render() {
    console.log("%%%%%%%%%%", this.props.people);
    return <div className='allProfilePicContainer'>{this.renderPeople()}</div>;
  }
}

export default PeopleList;
