import React from "react";

import "../../assets/css/main.scss";
import banner from "../../assets/images/about/aboutUs.png";
import about from "../../assets/images/about/about.png";
import vision from "../../assets/images/about/vision.png";
import mission from "../../assets/images/about/mission.png";
import edge1 from "../../assets/images/about/edge1.png";
import edge2 from "../../assets/images/about/edge2.png";

const About = () => {
  return (
    <div className="about_us_main_wrapper">
      <div className="about_banner_wrapper">
        <img src={banner} alt="banner" />
      </div>
      <div className="our_story_wrapper">
        <h1>
          {" "}
          <span style={{ color: "rgb(249, 147, 27)" }}>Our</span> Story{" "}
        </h1>
        <div className="about">
          <img src={about} alt="about" />
          <p className="content">
            {" "}
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word. Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece
          </p>
        </div>
        <div className="vision_mission_wrapper">
          <img src={edge2} alt="edge" className="right_edge" />
          <div>
            <div className="vision_wrapper">
              <div className="vision">
                <h2>Vision</h2>
                <img src={vision} alt="vision" />
              </div>
              <img src={edge1} alt="edge" className="left_edge" />
              <div className="content">
                <p>
                  "To spearhead a transformative era in the food industry
                  through the development of innovative and health-conscious
                  products tailored to meet the preferences of contemporary
                  consumers, thereby reshaping the perception of nutritious
                  dining on a global scale"
                </p>
              </div>
            </div>
            <div className="mission_wrapper">
              <div className="mission">
                <h2>Mission</h2>
                <img src={mission} alt="vision" />
              </div>
              <img src={edge1} alt="edge" className="left_edge" />
              <div className="content">
                <p>
                  "Our mission is to lead the food industry by offering the
                  healthiest food options and serving as a one-stop destination
                  for noodles, pastas, and more. We strive to be the premier
                  provider of holistic food solutions, catering to schools,
                  institutions, toiletries, FMCG products, Tetra packs, and
                  global markets, all while promoting well-being and meeting
                  evolving dietary preferences worldwide."
                </p>
              </div>
            </div>
          </div>
          <div className="values_wrapper">
            <h2>VALUES</h2>
            <div>
              <h3>Innovation: </h3>
              <p>
                We lead in crafting healthier food options for the new
                generation.
              </p>
            </div>
            <div>
              <h3>Quality:</h3>
              <p>
                Our dedication to excellence starts with sourcing the finest
                ingredients and maintaining strict quality controls.
              </p>
            </div>
            <div>
              <h3>Health and Wellness:</h3>
              <p>
                Our products promote balanced lifestyles and overall health.
              </p>
            </div>
            <div>
              <h3> Customer-Centricity:</h3>
              <p>
                We excel in meeting diverse customer needs with versatile
                products and exceptional service.
              </p>
            </div>
            <div>
              <h3>Sustainability:</h3>
              <p>
                We actively reduce our ecological impact for a healthier planet.
              </p>
            </div>
            <div>
              <h3>Collaboration:</h3>
              <p>We forge strong partnerships for mutual growth and success.</p>
            </div>{" "}
            <div>
              <h3>Integrity:</h3>
              <p>We uphold unwavering ethical standards in all operations.</p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="our_team_wrapper">
        <img src={edge1} alt="edge" className="right_edge" />
        <img src={edge2} alt="edge" className="left_edge" />
        <h1>OUR TEAM</h1>
        <div className="team">
          <div className="member">
            <div className="pic"></div>
            <p className="name">Mr. Chandrasekar</p>
            <p className="role">Chairman</p>
          </div>
          <div className="member">
            <div className="pic"></div>
            <p className="name">Mr. Senthil kumar</p>
            <p className="role">Chairman</p>
          </div>
          <div className="member">
            <div className="pic"></div>
            <p className="name">Mr. Balasubramaniam</p>
            <p className="role">Chairman</p>
          </div>
        </div>
        <div className="team">
          <div className="member">
            <div className="pic"></div>
            <p className="name">Mr. Ponmurugan</p>
            <p className="role">Managing Director</p>
          </div>
          <div className="member">
            <div className="pic"></div>
            <p className="name">Mr. Saravana Kumaran</p>
            <p className="role">Managing Director</p>
          </div>
          <div className="member">
            <div className="pic"></div>
            <p className="name">Mr. Pon Hari Pranesh</p>
            <p className="role">Managing Director</p>
          </div>
          <div className="member">
            <div className="pic"></div>
            <p className="name">Mr. P.M Sathyan</p>
            <p className="role">Managing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
