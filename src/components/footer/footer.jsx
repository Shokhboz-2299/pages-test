import { useContext } from "react";
import { Context } from "../../context/themeContext";

const Footer = () => {
  const {thema} = useContext(Context);
  return (
    <footer className = {thema}>
      <h2>Footer</h2>
    </footer>
  )
}

export default Footer;