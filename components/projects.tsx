import ProjectsStyle from "../styles/projects.module.css";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="section-dkblue">
      <section id="projects" className={ProjectsStyle.projects}>
        <h2>Projects I&apos;m proud of</h2>

        <article className={ProjectsStyle.article}>
          <div className={ProjectsStyle.text}>
            <h4>Latest Project</h4>
            <h3>Datathon Mentorship</h3>
            <p className={ProjectsStyle.blackbox}>
              The&nbsp;
              <a href="https://www.facebook.com/profile.php?id=100086453794390">
                KUAIC
              </a>
              &nbsp; Datathon is a Kathmandu University club-driven program that
              encourages all AI enthusiasts to hone their data science skills.
              This year, the KUAIC Datathon challenge was focused on agriculture
              data analysis and visualization. Few mentors/students from MTech
              in AI, Kathmandu University helped the participants to get started
              on data analysis, data visualization, Kaggle and even giving
              presentations.
            </p>
            <p>
              Technologies used include:
              <ul>
                <li>Pandas</li>
                <li>Python</li>
                <li>Power BI</li>
              </ul>
            </p>
          </div>
          <img
            src="https://drive.google.com/uc?id=1lapJb5ZdDexqDSrMZCBoWNZBdKL9cepg"
            alt="Screenshot Datathon"
          />
        </article>

        <article className={ProjectsStyle.articleReverse}>
          <div className={ProjectsStyle.text}>
            <h4>A Week Bootcamp</h4>
            <h3>Python Instructor</h3>
            <p className={ProjectsStyle.blackbox}>
              As a Python bootcamp instructor, my experiences have been both
              challenging and fulfilling. Overall, being a Python bootcamp
              instructor is incredibly rewarding. Witnessing the growth and
              progress of my students, from having minimal programming
              experience to becoming confident Python developers, is truly
              fulfilling.
            </p>
            <p>
              Technologies used include:
              <ul>
                <li>Python</li>
                <li>JupyterLab</li>
                <li>Anaconda</li>
              </ul>
            </p>
          </div>
          <img
            src="https://drive.google.com/uc?id=1l_ZoXnPll-pwupkB-ND3lzfnjpcCrD0w"
            alt="Teaching in python bootcamp"
          />
        </article>
      </section>
    </div>
  );
}
