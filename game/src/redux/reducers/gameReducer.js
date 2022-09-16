import { createSlice } from "@reduxjs/toolkit";

export const GameSlice = createSlice({
  name: "game",
  initialState: {lowerBound: 1, upperBound: 10, lastGuess: 'none', status: '', guessValue: 0},
  reducers: {
    resetGame: (state, action)=>{
      state.guessValue = action.payload.guessValue;
      state.lastGuess = "none";
      state.lowerBound = action.payload.lowerBound;
      state.upperBound =action.payload.upperBound;
      state.guessValue = action.payload.guessValue;
    },
    guessNumber: (state,action)=>{
      state.lastGuess = action.payload.lastGuess;
      state.status = action.payload.status;
    }
  }
});

export const {resetGame, guessNumber} = GameSlice.actions;

export default GameSlice.reducer;