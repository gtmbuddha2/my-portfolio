import Link from "next/link";
import Navstyles from "../styles/navbar.module.css";

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <nav className={Navstyles.nav}>
      <ul>
        <li>
          <h1>
            <Link href="/">
              <span className="fa-solid fa-code"></span>&nbsp;Nimesh Gautam
            </Link>
          </h1>
        </li>

        <li>
          <Link href="#projects">Projects </Link>
        </li>
        <li>
          <Link href="/about">About </Link>
        </li>
        <li>
          <Link href="#contact">Contact </Link>
        </li>
        <li>
          <Link href="/blog">Blog </Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gautam-nimesh/" target="_blank">
            <span className="fa-brands fa-linkedin"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/gtmbuddha2" target="_blank">
            <span className="fa-brands fa-square-github"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <Link href="/" className="button" style={{ color: "white" }}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
