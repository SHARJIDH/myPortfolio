import React from 'react'
import css from './People.module.scss'
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'
import Slider from 'react-slick'
import { comments, sliderSettings } from '../../utils/data'
const People = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

        <a className="anchor" id="people"></a>
        <motion.div 
        variants={footerVariants}
        className={`ypaddings innerWidth ${css.container}`}>
            <div className={`flexCenter ${css.heading}`}>
                <span className="primaryText">
                    People talk about us 
                </span>
                <p style={{marginTop:"2rem"}}>
                    I got a job that was in accordance with the salary and filed work
                </p>
                <p>
                    The process of an application was quite cosy
                </p>
            </div>

            <div className={`ypaddings ${css.comments}`}>
                <Slider 
                {...sliderSettings}
                className={css.slider}
                >
                    {
                        comments.map((comment,i)=>{
                            return (
                                <div className={`flexCenter ${css.comment}`}>
                                    <img src={comment.img} alt="" />
                                    <p>{comment.comment}</p>
                                    <div className={css.line}></div>
                                    <div className={css.bio}>
                                        <span>{comment.name}</span>
                                        <span>{comment.post}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </motion.div>


    </motion.section>
  )
}

export default People