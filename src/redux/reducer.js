import { ActionTypes } from "./actionTypes";
const intialState = {
  gallery: [],
};

export default function galleryReducer (state = [], action ) {
  switch (action.type) {
    case ActionTypes.ADD_GALLERY:
      return { ...state, gallery: {
        url: action.payload.url,
        breed: action.url.breed,
      }};
    default:
      return state;
  }
}
