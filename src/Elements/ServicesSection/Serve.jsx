import React from "react";
import * as styles from "./ServeStyles";
const Serve = () => {
  return (
    <div>
      <styles.ServeSection>
        <styles.Container>
          <div className="heroleft">
            <styles.Heroheading>
              <p>
                My <br></br>Services
              </p>
            </styles.Heroheading>
          </div>
          <div className="heroright">
            <div className="HeroRightText">
              Here you can find everything that you need to make your idea look
              perfect. Creating a unique digital product is a challenging
              process. It takes a lot of time, drawing, thinking, writing,
              planning, and testing to make an awesome User Experience!
            </div>
          </div>
        </styles.Container>
        <img
          src="https://uploads-ssl.webflow.com/5f58a59d36085d27ba519f2f/5f58a59d36085d4fd6519f71_our%20services%20illu.svg"
          alt="picture1"
        />
        <styles.ContainerTwo>
          <div className="twosides">
            <div className="firstside">UX Design</div>
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
            </div>
          </div>
        </styles.ContainerTwo>
        <br />
        <styles.ContainerThree>
          <div className="twosides">
            <div className="firstside">UI Design</div>
            <div className="lastside">
              <div className="lastsidetext">
                Creating user interfaces on a daily basis is without a doubt, a
                favourite part of my job! Through this whole process, I always
                aim to put the functionality of the individual visual design in
                the principal place, which is immediately followed by the
                quality of the visual design. The appearance of something should
                not be of the upmost importance, but rather the functionality of
                it! I prefer simple solutions, fascinating typography, and white
                space balance.
              </div>
              <br />
            </div>
          </div>
        </styles.ContainerThree>
        <br />
        <styles.ContainerFive>
          <div className="twosides">
            <div className="firstside">Illustrations</div>
            <div className="lastside">
              <div className="lastsidetext">
                I’m telling stories about your company and the whole brand
                through the illustrations I create. There is no better way to
                make a connection with your customers than this. If you need
                something to stand out from the competition, search no more,
                because you are in the right place!
              </div>
              <br />
            </div>
          </div>
        </styles.ContainerFive>

        <br />
        <styles.ContainerSix>
          <div className="twosides">
            <div className="firstside">
              Brand <br /> Identity
            </div>
            <div className="lastside">
              <div className="lastsidetext">
                I find myself quite often saying: ‘’Even the least appealing
                logo, which contains a specific story and sends an effective
                message, is countless times better than a visual logo which only
                looks appealing and nothing more!’’ Let’s create a brand
                together that people will identify with!
              </div>
              <br />
            </div>
          </div>
        </styles.ContainerSix>
        <br />
        <styles.ContainerSeven>
          <div className="twosides">
            <div className="firstside">
              Motion <br /> (outsource)
            </div>
            <div className="lastside">
              <div className="lastsidetext">
                We get objects moving with the power of our minds. Through the
                abstract shapes that we make, we communicate with the customers,
                making stunning combinations of visuals and sounds. The way we
                see it - visual and sound components make a perfect synergy that
                tells a story.
              </div>
              <br />
            </div>
          </div>
        </styles.ContainerSeven>
        <br />
        <styles.ContainerSeven>
          <div className="twosides">
            <div className="firstside">
              Front End <br /> (outsource)
            </div>
            <div className="lastside">
              <div className="lastsidetext">
                How to convert the whole design system into the code? Don't
                worry, we are here to take your project from scratch and bring
                you the perfect coded version at the end!
              </div>
            </div>
            <br />
          </div>
        </styles.ContainerSeven>
        <br />
      </styles.ServeSection>
    </div>
  );
};

export default Serve;
