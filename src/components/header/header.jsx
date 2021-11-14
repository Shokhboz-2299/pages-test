import useThema from "../../hooks/useThema";
import { Link } from "react-router-dom";

const Header = () => {
  const [thema, setThema] = useThema(true);
  return (
    <header className={thema}>
      <h2>Header</h2>
      <select defaultValue={thema} onChange={(evt) => { setThema(evt.target.value) }} >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;