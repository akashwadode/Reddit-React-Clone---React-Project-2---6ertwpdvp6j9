
const unsplash_photos_service = () => {
  const ACCESS_KEY = "y-LRZjrnu7BVA1gTh48Y404vf1i6VA3o3AGVTi9t7rw";
  const API_URL = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&orientation=landscape&query=landscape&width=4000`;
  return API_URL;
};

export default unsplash_photos_service;
