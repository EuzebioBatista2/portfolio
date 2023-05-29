import { useContext } from "react";
import ToggleContext from "../context/ToggleContext";

const useToggleData = () => useContext(ToggleContext)

export default useToggleData