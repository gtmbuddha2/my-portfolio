import AboutStyle from "../styles/projects.module.css";

export default function About() {
  return (
    <div className="section-dkblue">
      <section id="about" className={AboutStyle.projects}>
        <h2>About Nimesh Gautam</h2>

        <article className={AboutStyle.article}>
          <div className={AboutStyle.text}>
            <h3>Just the Higlights</h3>
            <p className={AboutStyle.blackbox}>
              Hi, my name is Nimesh Gautam. I teach the Deep Learning and the
              Web. I&apos;m an educator, a student, a developer,a Civil Engineer
              specializing in HTML, CSS, Javascript, Typescript, React, Next,
              Pytorch, Data Analytics, Python, etc. Currently, I&apos;m founder
              of &nbsp;
              <a href="https://gautamnimesh.com.np/">GurkhaGeeks</a>, a tech and
              IT company, making a career switch from Civil Engineering to
              Computer Science, etc.
            </p>
            <p>
              My favourite technologies include:
              <ul>
                <li>Python</li>
                <li>Pytorch</li>
                <li>Next Js</li>
                <li>Nuxt</li>
              </ul>
            </p>
          </div>
          <img
            src="https://drive.google.com/uc?id=1dWxNi6KqtN2j4H_zChrGNdjkkPndj64x"
            alt="Nimesh Photo"
          />
        </article>
      </section>
    </div>
  );
}
