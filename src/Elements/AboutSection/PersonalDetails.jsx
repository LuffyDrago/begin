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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              expedita tempora harum qui cupiditate ullam dolores libero dolorem
              sapiente odit?
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                similique impedit reprehenderit ab nemo temporibus, tenetur
                autem ducimus. Consequatur, eligendi?
              </div>
            </div>
          </div>
        </styles.ContainerTwo>

        <styles.ContainerThree>
          <div className="twosides">
            <div className="firstside"></div>
            <div className="lastside">
              <div className="lastsidetext">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet distinctio voluptatem officiis suscipit molestias nisi,
                vitae eligendi praesentium. Placeat, pariatur?
              </div>
            </div>
          </div>
        </styles.ContainerThree>

        <styles.ContainerFour>
          <div className="twosides">
            <div className="firstside"></div>
            <div className="lastside">
              <div className="lastsidetext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                rerum nobis! Cumque iure reiciendis nemo sit itaque praesentium
                veritatis eligendi.
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
