import React, {useRef, useEffect} from 'react'
import randomColors from 'randomcolor'

import styles from './Heading.module.scss'

const Heading = () => {
    const titleRef = useRef()

    const changeColorHandler = () => {
        const color = randomColors({luminosity:'light', format: 'rgb'});
        titleRef.current.style.color = color;
    }

    useEffect(() => {
        titleRef.current.style.color = randomColors({luminosity:'light', format: 'rgb'});;
    })

    return(
        <section className={styles.heading__wrapper}>
            <div className={styles.heading__content}>
                <div className={styles.title__wrapper}>
                    <div className={styles.title}>Hi there👋, I'm<p onMouseEnter={changeColorHandler} ref={titleRef}> Marcos.</p></div>
                    <p className={styles.title__description}>Developer, System Analyst and lifelong learner.</p>
                </div>
                <img className={styles.scroll__arrow} src="./Arrow 1.svg" alt="Scroll down arrow" />
                <img className={styles.height__detail} src="./height.svg" alt="Height detail" />
                <img className={styles.hover__detail} src="./hoverit.svg" alt="Hover it detail" />
                <img className={styles.background__detail} src="./background-color.svg" alt="Background color detail" />
            </div>
        </section>
    );

}

export default Heading;