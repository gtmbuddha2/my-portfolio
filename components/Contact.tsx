import Link from "next/link";
import ContactStyles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div className="section-plum">
      <section id="contact" className={ContactStyles.contact}>
        <h2>Contact me</h2>
        <p>
          I&apos;m always interested in hearing about new teaching
          opportunities, writing curricula, or deep learning work.
        </p>
        <p>
          <Link href="mailto:nimesgautam@outlook.com" className="button">
            Email me
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Contact;
