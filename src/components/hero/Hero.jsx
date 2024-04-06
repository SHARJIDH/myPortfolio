import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'
import DownloadButton from '../Download/DownloadCv'
import Icons from '../Icons/Icons'

const Hero = () => {
    const documentUrl = "https://drive.google.com/file/d/1uAIVyX6Bn6Zsj0XhWfaW63ehax8bDkpL/view?usp=sharing";
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`}>
                <div className={css.upperElements}>
                    <motion.span
                        variants={fadeIn("right", "tween", 0.2, 1)}
                        className='primaryText'>
                        Hey There,<br /> I am <span className={css.highlightedText}>Sharjidh</span>
                    </motion.span>
                    <motion.span
                        variants={fadeIn("left", "tween", 0.4, 1)}
                        className='secondaryText'>
                        I design beautiful simple
                        <br />
                        things, And I love what i do
                    </motion.span>
                </div>

                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className={css.person}>
                    <motion.img
                        variants={slideIn("up", "tween", 0.5, 1.3)}
                        src="./person.png" alt="" />
                </motion.div>



                <div className={css.lowerElements}>
                    <motion.div
                        variants={fadeIn("right", "tween", 0.3, 1)}
                        className={css.experience}>
                        {/* <div className="primaryText">Looking</div> */}
                        <div className="secondaryText">
                            <div>Looking <br /> For <br /> Internship</div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", "tween", 0.5, 1)}
                        className={css.certificate}>
                        <Icons />
                        <DownloadButton
                            documentUrl={documentUrl}
                            fileName="example_document.pdf"
                        />
                        <img src="./certificate.png" alt="" />
                        <span>Full stack</span>
                        <span>UI/UX designer</span>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    )
}

export default Hero