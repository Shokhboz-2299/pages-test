import { useContext } from "react";
import { Context } from "../../context/themeContext";


const Header = () => {
  const {thema, setThema} = useContext(Context);
return (
  <header className ={thema}>
    <h2>Header</h2>
    <select onChange = {(evt) => { setThema(evt.target.value)}} >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </header>
)
}

export default Header;