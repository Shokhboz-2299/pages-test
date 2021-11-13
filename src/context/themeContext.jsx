import { createContext, useState } from "react";

const Context = createContext();

const Provider = ({children}) => {

  const [thema, setThema] = useState("light");

  const obj ={
    thema, 
    setThema,
  }

  return (
    <Context.Provider value ={obj} >{children}</Context.Provider>
  )
}

export  {Context ,Provider};