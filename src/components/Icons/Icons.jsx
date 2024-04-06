import React from 'react';
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import styles from './Icons.module.scss';

const Icons = () => {
    const handleGithubClick = () => {
        window.open('https://github.com/SHARJIDH', '_blank');
    };
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/shaik-sharjidh-51500122b', '_blank');
    };
    return (
        <div className={styles.iconContainer}>
            <a href="#" onClick={handleGithubClick} className={styles.iconLink}>
                <FaGithub className={styles.icon} />
            </a>
            <a href="#" onClick={handleLinkedInClick} className={styles.iconLink}>
                <AiFillLinkedin className={styles.icon} />
            </a>
        </div>
    );
};

export default Icons;
