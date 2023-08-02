import { setToggleButtonAction, activateToggleButton } from './index';
import { useAppSelect } from "@/store/hooks";
import { useDispatch } from "react-redux";

export const useButtonToggleReducer = () => {
  // Variável responsável por definir um novo valor
  const dispatch = useDispatch();
  const { activateToggleButton } = useAppSelect((state: any) => state.activateButtonToggleReducers);

  // Função que será exportada globalmente de forma a ser setada no componente principal
  const setToggleButton = (currentUser: boolean) => {
    dispatch(setToggleButtonAction(currentUser));
  };

  return {
    activateToggleButton,
    setToggleButton,
  };
};
