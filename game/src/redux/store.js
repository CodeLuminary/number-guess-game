import {configureStore} from "@reduxjs/toolkit";
import GameReducer from "./reducers/gameReducer";

export default configureStore({
  reducer: {
    game: GameReducer
  }
})