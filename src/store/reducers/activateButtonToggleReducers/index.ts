import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Modelo para ser inserindo ao redux
interface IToggleButton {
  activateToggleButton: boolean;
}

// Valor inicial mo modelo criado
const initialState: IToggleButton = {
  activateToggleButton: false,
};

export const activateToggleButton = createSlice({
  name: 'toggleReducer',
  initialState,
  reducers: {
    // Função responsável por verificar se os dados são validos para serem armazenados
    setToggleButtonAction: (state, action: PayloadAction<boolean>) => {
      state.activateToggleButton = action.payload;
    },
  },
});

export const { setToggleButtonAction } = activateToggleButton.actions;

export default activateToggleButton.reducer;
