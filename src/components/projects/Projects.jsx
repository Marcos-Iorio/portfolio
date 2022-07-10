import React from 'react'

import styles from './Projects.module.scss';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdOutlineOpenInNew } from "react-icons/md";

import { projects } from '/src/data.js'
import { v4 as uuidv4 } from 'uuid';
import Slider, {SliderItem} from '../Slider/Slider';


const Projects = () => {
    return(
        <section className={styles.project__wrapper} id='projects'>
            <div className={styles.project__content}>
                <h2 className={styles.project__title}>Projects.</h2>
                <img className={styles.font__detail} src="./font.svg" alt="Font family type" />
                <Slider>
                {
                    projects.map(project => {
                        return <SliderItem key={uuidv4()}>
                                    <article className={styles.project}>
                                        <div className={styles.header}>
                                            <h3 className={styles.title}>{project.name}</h3>
                                            {project.github !== null ?  <a href={project.github} className={styles.project__repo}><SiGithub/></a> : ''}
                                        </div>
                                        <p className={styles.project__description}>
                                            {project.description}
                                        </p>
                                        <div className={styles.project_link_wrapper}>
                                            {project.livePage !== null ? <a href={project.livePage} target="_blank" className={styles.project__link}>View Project <MdOutlineOpenInNew/></a> : '' }
                                        </div>
                                    </article>
                                </SliderItem>

                    })
                }
                </Slider>
            </div>

        </section>
    );
}

export default Projects;