import { createStore } from "redux";

import galleryReducer from "./reducer"

const store = createStore(galleryReducer);

export default store;