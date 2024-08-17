import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTensorflow } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import css from './Skills.module.scss';
import { fadeIn, staggerChildren } from '../../utils/motion';
import { CardSpotlight } from '../ui/card-spotlight'
const Skills = () => {
    return (
        <CardSpotlight >
            <motion.section
                id="skills"
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`paddings ${css.wrapper}`}
            >
                <CardSpotlight >
                    <div >
                        <span className={`primaryText ypaddings ${css.heading}`}>My Skills</span>
                    </div>
                    <motion.div className={css.container}
                        variants={fadeIn("down")}
                    >

                        <motion.div className={css.skillBox}>
                            <FaReact className={css.react} size='10vh' />
                            <div className={css.skillName}>React</div>
                        </motion.div>

                        <motion.div className={css.skillBox}
                            variants={fadeIn("down", "tween", 0.1, 1)}
                        >
                            <FaNodeJs className={css.node} size='10vh' />
                            <div className={css.skillName}>Node.js</div>
                        </motion.div>
                        <motion.div className={css.skillBox}
                            variants={fadeIn("down", "tween", 0.2, 1)}
                        >
                            <SiExpress className={css.express} size='10vh' />
                            <div className={css.skillName}>Express</div>
                        </motion.div>
                        <motion.div className={`${css.skillBox} ${css.cplusplus}`}
                            variants={fadeIn("down", "tween", 0.3, 1)}
                        >
                            C++
                        </motion.div>
                        <motion.div className={css.skillBox}
                            variants={fadeIn("down", "tween", 0.4, 1)}
                        >
                            <SiMongodb className={css.mongodb} size='10vh' />
                            <div className={css.skillName}>MongoDB</div>
                        </motion.div>
                        <motion.div className={css.skillBox}
                            variants={fadeIn("down", "tween", 0.5, 1)}
                        >
                            <TbBrandReactNative className={css.react_native} size='10vh' />
                            <div className={css.skillName}>React Native</div>
                        </motion.div>
                        <motion.div className={css.skillBox}
                            variants={fadeIn("down", "tween", 0.6, 1)}
                        >
                            <SiTensorflow className={css.tensorflow} size='10vh' />
                            <div className={css.skillName}>TensorFlow</div>
                        </motion.div>
                        <motion.div className={css.skillBox}
                            variants={fadeIn("down", "tween", 0.7, 1)}
                        >
                            <FaPython className={css.python} size='10vh' />
                            <div className={css.skillName}>Python</div>
                        </motion.div>
                    </motion.div>
                </CardSpotlight>
            </motion.section>
        </CardSpotlight>
    );
};

export default Skills;
