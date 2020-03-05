import React, { Component } from "react";
import getProfileAction from "../actions/userProfileAction";
import UserImages from "./userImages";
import { connect } from "react-redux";

export class userDetails extends Component {
  componentDidMount() {
    this.props.getProfileAction(this.props.match.params.name);
  }
  render() {
    const { userProfile } = this.props;
    console.log("Profile", userProfile);
    // Check of the userProfile has data, map through them, displaying each.
    return (
      <div>
        {userProfile &&
          userProfile.map(profile => {
            return (
              <div key={profile.id}>
                <div className='detailContainer'>
                  <div className='detailProfilePicContainer'>
                    <img
                      src={`/Albums/${profile.name}/${profile.profile_pic}.jpeg`}
                      alt='profile'
                      className='detailProfilePic'
                    />
                  </div>
                  <div className='detailRightSide'>
                    <div className='nameAndFollower'>
                      <h5>{profile.profile_name}</h5>
                      <button className='button'>Follow</button>
                      <button className='button'>Message</button>
                    </div>

                    <div className='followerAndFollowing'>
                      <h3>
                        {profile.followers}
                        <span> Followers</span>
                      </h3>

                      <h3>
                        {profile.following}
                        <span> Following</span>
                      </h3>
                      <div className='bio'>
                        <h5>Bio</h5>
                        <p>{profile.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <UserImages photos={profile.albums} name={profile.name} />
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.profileReducer.profile
});
export default connect(mapStateToProps, { getProfileAction })(userDetails);

// export default ;
