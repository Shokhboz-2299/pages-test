import useThema from "../../hooks/useThema";

const Footer = () => {
  const [thema] = useThema();
  return (
    <footer className = {thema}>
      <h2>Footer</h2>
    </footer>
  )
}

export default Footer;