import { createContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({children}) => {

  const [thema, setThema] = useState(
    window.localStorage.getItem("thema") ||"light");

    useEffect ( () => {
      window.localStorage.setItem("thema", thema);
    },[thema]
    );
  const obj ={
    thema, 
    setThema,
  }

  return (
    <Context.Provider value ={obj} >{children}</Context.Provider>
  )
}

export  {Context ,Provider};