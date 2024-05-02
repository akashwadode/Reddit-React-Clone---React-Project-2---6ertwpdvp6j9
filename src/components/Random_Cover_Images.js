import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import unsplash_photos_service from "../services/unsplash_photos_service";

const Random_Cover_Images = () => {
  const randomColor = getRandomColor();
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  const imageUrlConfig = unsplash_photos_service();
  const { data, loading, error } = useAxios(imageUrlConfig);

  if (error) {
    return (
      <div
        className="channel-cover"
        style={{ backgroundColor: `${randomColor}` }}
      ></div>
    );
  }
  if (data) {
    const imageUrl = data.urls.regular;
    return (
      <div
        className="channel-cover-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    );
  }
};

export default Random_Cover_Images;
