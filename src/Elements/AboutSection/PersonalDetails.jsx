import AOS from "aos";
import "aos/dist/aos.css";
import * as styles from "./PersonalDetailStyle";
const PersonalDetails = () => {
  AOS.init({
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
  });
  return (
    <>
      <styles.PersonalSection>
        <styles.Container>
          <div className="heroleft" data-aos="fade-right">
            <styles.Heroheading>
              <p>Meet Victor</p>
            </styles.Heroheading>
          </div>
          <div className="heroright">
            <div
              className="HeroRightText"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
             A Software Engineer with experience in cloud computing, virtualization and
             container technologies, automation of development workflow and deployments
             through CI/CD. Also experienced in designing, implementing, documenting, and
             troubleshooting cloud infrastructure for applications.
            </div>
          </div>
        </styles.Container>
        <img
          data-aos="zoom-in-up"
          src="https://uploads-ssl.webflow.com/5f58a59d36085d27ba519f2f/61d2f3d51ddecd681d8e11ee_Mask%20Group.jpg"
          alt="picture1"
        />
        <styles.ContainerTwo>
          <div className="twosides">
            <div className="firstside"></div>
            <div className="lastside">
              <div className="lastsidetext" data-aos="fade-left">
                I have gained experience through personal projects and
                internships where I have learnt hands-on coding, software
                development processes, programming frameworks( ReactJS), user
                interface design, testing and debugging, working and
                collaborating with teams.
              </div>
            </div>
          </div>
        </styles.ContainerTwo>

        <styles.ContainerThree>
          <div className="twosides">
            <div className="firstside"></div>
            <div className="lastside">
              <div className="lastsidetext" data-aos="fade-right">
                I like exploring and applying the new and exciting concepts learnt
                in my side projects which allows me to push my own standards 
                and boundaries of the possibilities in software development.
              </div>
            </div>
          </div>
        </styles.ContainerThree>

        <styles.ContainerFour>
          <div className="twosides">
            <div className="firstside"></div>
            <div className="lastside">
              <div className="lastsidetext" data-aos="fade-left">
                “Don't worry about people trying to steal your design work.
                Worry about the day that they stop.” — Jeffery Zeldman,
                Developer, Designer, and co-founder of the Web Standards Project
              </div>

              <br />
              <br />
              <br />

              {/* <Link to="/" className="cvlink">
                Open Victor Mwangi CV
              </Link> */}
              <a href="" className="cvlink">
                {" "}
                Open Victor Mwangi CV
              </a>
            </div>
          </div>
        </styles.ContainerFour>
      </styles.PersonalSection>
    </>
  );
};

export default PersonalDetails;
