import React, { useState, useRef } from "react";
import "../Photos/photo.scss";

function Photo({ button }) {
  const photo = useRef(null);
  const img = useRef(null);
  const [images, setImages] = useState([
    {
      id: 1,
      img: "https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);

  return (
    <div    className="wrapperPhoto">
      {button && (
        <div>
          {images.map((img, image) => (
            <img
             
              
              key={image.id}
              src={img.img}
            ></img>
          ))}
        </div>
      )}
    </div>
  );
}

export default Photo;
