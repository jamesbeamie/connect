import React, { Component } from "react";

export class UserImages extends Component {
  render() {
    const { photos, name } = this.props;
    return (
      <div className='detailAlbumsListContainer'>
        {photos.map(photo => {
          return (
            <div className='detailSinglePicContainer' key={photo.cover}>
              <img
                src={`Albums/${name}/${photo.cover}.jpeg`}
                alt='allImages'
                className='detailAlbumPic'
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserImages;
