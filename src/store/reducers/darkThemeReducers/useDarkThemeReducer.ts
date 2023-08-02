import { setActivatedThemeAction } from './index';
import { useAppSelect } from "@/store/hooks";
import { useDispatch } from "react-redux";

export const useDarkThemeReducer = () => {
  // Variável responsável por definir um novo valor
  const dispatch = useDispatch();
  const { darkTheme } = useAppSelect((state: any) => state.darkThemeReducers);

  // Função que será exportada globalmente de forma a ser setada no componente principal
  const setTheme = (currentUser: boolean) => {
    dispatch(setActivatedThemeAction(currentUser));
  };

  return {
    darkTheme,
    setTheme,
  };
};
