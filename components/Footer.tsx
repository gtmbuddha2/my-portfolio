import FooterStyles from "../styles/footer.module.css";

const Footer: React.FC = (): React.ReactElement => {
  return (
    <section className={FooterStyles.footer}>
      <h2>Nimesh . AI/ML Engineer</h2>

      <ul>
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
          <a href="mailto:nimesgautam@outlook.com" target="_blank">
            <span className="fa-solid fa-envelope"></span>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>

      <p>
        <small>&copy;2023 Nimesh Gautam. All rights reserved</small>
      </p>
    </section>
  );
};

export default Footer;
