import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
interface SearchState {
  isHide: boolean;
  words: any;
}

// Define the initial state
const initialState: SearchState = {
  isHide: true,
  words: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    onSearch: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.isHide = action.payload.isHide;
      state.words = action.payload.word;
    },
  },
});
export const { onSearch } = searchSlice.actions;
export default searchSlice.reducer;
