import React from 'react';

type RoomGalleyProps = {
  images: string[],
}

function RoomGallery ({images}: RoomGalleyProps) {
  return (
    <div className="property__gallery">
      {images.map((image, index)=>{
        const keyValue = `${index}_${image}`;
        return (
          <div key={keyValue} className="property__image-wrapper">
            <img className="property__image" src={image} alt=""/>
          </div>
        );
      })}
    </div>
  );
}

export default RoomGallery;
