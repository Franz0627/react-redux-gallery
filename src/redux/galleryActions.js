import { ActionTypes } from "./actionTypes";

export const setGallery = (gallery) => {
    return {
      type: ActionTypes.ADD_GALLERY,
      payload: gallery,
    };
  };
  
  export const addCounts = () => {
    return {
      type: ActionTypes.ADD_COUNTS,
      payload: {
        breed
      }
    };
  };
  export const addLikes = () => {
    return {
      type: ActionTypes.ADD_LIKES,
      payload: {
        breed
      }
    };
  };