import { useContext } from "react";
import { Context } from "../context/themeContext";

const useThema = (settrOnly) => {
  const {thema, setThema} = useContext (Context);
  return settrOnly? [thema, setThema] : [thema] ;
}

 export default useThema;