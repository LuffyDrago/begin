import * as styles from "./PersonalDetailStyle";
import { Link } from "react-router-dom";
const PersonalDetails = () => {
  return (
    <>
      <styles.PersonalSection>
        <styles.Container>
          <div className="heroleft">
            <styles.Heroheading>
              <p>Meet Victor</p>
            </styles.Heroheading>
          </div>
          <div className="heroright">
            <div className="HeroRightText">
              Back in the days when I exited a local agency job and tried to
              find some freelance, my first projects were completed for just a
              few dollars. But in time my clientele increased significantly with
              all of the previous clients returning for more collaboration, and
              always with more than positive feedback.
            </div>
          </div>
        </styles.Container>
        <img
          src="https://uploads-ssl.webflow.com/5f58a59d36085d27ba519f2f/61d2f3d51ddecd681d8e11ee_Mask%20Group.jpg"
          alt="picture1"
        />
        <styles.ContainerTwo>
          <div className="twosides">
            <div className="firstside"></div>
            <div className="lastside">
              <div className="lastsidetext">
                However, I wanted to also give a shot at working in a company,
                so I accepted an offer to join a Canadian company ‘’Katipult’’,
                as an UI/UX designer. The whole cooperative approach to design
                is quite fragmentary, with not enough room for self-expression
                and progress, so I decided to dedicate my work fully to
                freelancin
              </div>
            </div>
          </div>
        </styles.ContainerTwo>

        <styles.ContainerThree>
          <div className="twosides">
            <div className="firstside"></div>
            <div className="lastside">
              <div className="lastsidetext">
                However, I wanted to also give a shot at working in a company,
                so I accepted an offer to join a Canadian company ‘’Katipult’’,
                as an UI/UX designer. The whole cooperative approach to design
                is quite fragmentary, with not enough room for self-expression
                and progress, so I decided to dedicate my work fully to
                freelancin
              </div>
            </div>
          </div>
        </styles.ContainerThree>

        <styles.ContainerFour>
          <div className="twosides">
            <div className="firstside"></div>
            <div className="lastside">
              <div className="lastsidetext">
                However, I wanted to also give a shot at working in a company,
                so I accepted an offer to join a Canadian company ‘’Katipult’’,
                as an UI/UX designer. The whole cooperative approach to design
                is quite fragmentary, with not enough room for self-expression
                and progress, so I decided to dedicate my work fully to
                freelancin
              </div>

              <br />
              <br />
              <br />
              <Link to="/" className="cvlink">
                Open Victor Mwangi CV
              </Link>
            </div>
          </div>
        </styles.ContainerFour>
      </styles.PersonalSection>
    </>
  );
};

export default PersonalDetails;
