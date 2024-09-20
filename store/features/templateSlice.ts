import { createSlice } from "@reduxjs/toolkit";

interface TemplateState {
  value: string;
  show: boolean;
}

const initialState: TemplateState = {
  value: "",
  show: false,
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplateAction: (state, action) => {
      state.value = action.payload;
    },
    setShowTemplateAction: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { setTemplateAction, setShowTemplateAction } =
  templateSlice.actions;
export default templateSlice.reducer;
