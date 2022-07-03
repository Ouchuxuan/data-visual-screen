import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  expendComPanel: boolean;
  expendLayerPanel: boolean;
}

const initialState: InitialState = {
  expendComPanel: false,
  expendLayerPanel: false,
};

const { reducer, actions } = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleComPanelExpend: (state, action) => {
      state.expendComPanel = action.payload;
    },
    toggleLayerPanelExpend: (state, action) => {
      state.expendLayerPanel = action.payload;
    },
  },
});

export const { toggleComPanelExpend, toggleLayerPanelExpend } = actions;
export default reducer;
