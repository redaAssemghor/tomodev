import { createSlice } from "@reduxjs/toolkit";

interface FeaturedPageState {
  value: string;
}

const initialState: FeaturedPageState = {
  value: "featured",
};

const featuredPageSlice = createSlice({
  name: "featuredPage",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPage } = featuredPageSlice.actions;
export default featuredPageSlice.reducer;