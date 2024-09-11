import { createSlice } from "@reduxjs/toolkit";

interface ServicesState {
  value: string;
}

const initialState: ServicesState = {
  value: "Web Design & Development",
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setServices } = servicesSlice.actions;
export default servicesSlice.reducer;
