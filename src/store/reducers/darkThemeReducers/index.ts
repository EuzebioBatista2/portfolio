import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Modelo para ser inserindo ao redux
interface IDarkMode {
  darkTheme: boolean;
}

// Valor inicial mo modelo criado
const initialState: IDarkMode = {
  darkTheme: false,
};

export const darkTheme = createSlice({
  name: 'darkReducer',
  initialState,
  reducers: {
    // Função responsável por verificar se os dados são validos para serem armazenados
    setActivatedThemeAction: (state, action: PayloadAction<boolean>) => {
      state.darkTheme = action.payload;
      // Verifica se o tema do redux é dark e cria ou altera o cookie para que ele informe o tema
      const newTheme = state.darkTheme === true ? 'dark' : 'white'
      localStorage.setItem('themeMyPortfolio', newTheme)
    },
  },
});

export const { setActivatedThemeAction } = darkTheme.actions;

export default darkTheme.reducer;
