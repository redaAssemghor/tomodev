import { createSlice } from "@reduxjs/toolkit";
import { Project } from "@/app/lib/types";

interface TemplateState {
  value: Project;
  show: boolean;
}

const initialState: TemplateState = {
  value: {
    name: "",
    img: "",
    fullImg: "",
    description: "",
  },
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
