import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType: (state, action) => {
      state.sidebar.type = action.payload.type;
    },
  },
});

//Reducer
export default slice.reducer;

export function toggleSidebar() {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function updateSidebarType(type) {
  return async () => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}
