import React from "react";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from 'framer-motion'
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
const Portfolio = () => {
  return (
    <BackgroundGradientAnimation>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>
        <a className="anchor" id="portfolio"></a>
        <div className={`innerWidth flexCenter ${css.container}`}>
          <div className={`flexCenter ${css.heading}`}>
            <div>
              <span className="primaryText">My latest Works</span>
              <p style={{ marginTop: "10px" }}>Perfect Solution for digital experience</p>
            </div>

            {/* <span className="secondaryText">
            Explore More Works
          </span> */}
          </div>


          <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
            <a href="https://tic-tac-toe-six-gray-51.vercel.app/" className={css.img}>
              <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
            </a>

          </div>
        </div>
      </motion.section>
    </BackgroundGradientAnimation>
  );
};

export default Portfolio;
