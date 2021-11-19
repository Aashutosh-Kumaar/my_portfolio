import React from "react";

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import git from "../assets/icons/git.svg";
import pin from "../assets/icons/pin.svg";
import pic2 from "../assets/pic2.jpg";


import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:kumaar4410@gmail.com");
  };

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={pic2} alt="avatar" className="rounded-circle image_custom" />
      <div className="sidebar__name">
        Ashutosh <span>Kumar</span>{" "}
      </div>
      <div className="sidebar__item sidebar__title">Software Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">Download Resume</div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a
          href="https://www.linkedin.com/in/ashutosh-kumar-a40411133/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" />
        </a>
        <a
          href="https://www.instagram.com/3m_knowledge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" className="sidebar__icon mr-3" />
        </a>
        <a
          href="https://www.facebook.com/aashukumaar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a
          href="https://twitter.com/ProfriendsAshu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className="sidebar__icon mr-3" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a
            href="https://github.com/Aashutosh-Kumaar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="github" className="sidebar__icon mr-3" />
            Github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Bihar, India{" "}
        </div>
        <br />
        <div className="sidebar__number">
          6204995961 / 7488186814
        </div>
        <div className="sidebar__item">
          <strong>kumaar4410@gmail.com</strong>
        </div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        E-mail me
      </div>
    </motion.div>
  );
};

export default Sidebar;