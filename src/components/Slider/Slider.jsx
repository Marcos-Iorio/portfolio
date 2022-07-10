import React, {Children, useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from './Slider.module.scss'

import * as Icon from "react-icons/md";

export const SliderItem = ({children, width}) => {
    return(
        <div className={styles.slider__item} style={{width: width}}>
            {children}
        </div>
    );
}

const Slider = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = React.Children.count(children) - 1;
        }else if(newIndex >= React.Children.count(children)){
            newIndex = 0;
        }

        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1)
        }, 2500)

        return () => {
            interval ? clearInterval(interval) : '';
        }
    })

    if(isMobile){
        return(
            <div className={styles.carousel}>
            <div className={styles.inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}

            </div>
            <div className={styles.indicators}>
                <button className={styles.arrows} onClick={() =>{ updateIndex(activeIndex - 1)}}>
                    <Icon.MdArrowBackIosNew/>
                </button>
                <button className={styles.arrows} onClick={() =>{ updateIndex(activeIndex + 1)}}>
                    <Icon.MdArrowForwardIos/>
                </button>
            </div>
            <div className={styles.dots}>
                    {React.Children.map(children, (child, index) => {
                        return(
                            <button className={`${styles.dot} ${index === activeIndex ? styles.active: ''}`} onClick={() => updateIndex(index)}></button>
                        );
                    })}
            </div>
        </div>
        );
    }else{
        return(
            <div className={styles.carousel}>
                <div className={styles.inner} style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}>
                    {Children.map(children, (child, index) => {
                        return React.cloneElement(child, {width: "33.33%"});
                    })}
    
                </div>
                <div className={styles.indicators}>
                    <button className={styles.arrows} onClick={() =>{ updateIndex(activeIndex - 1)}}>
                        <Icon.MdArrowBackIosNew/>
                    </button>
                    <button className={styles.arrows} onClick={() =>{ updateIndex(activeIndex + 1)}}>
                        <Icon.MdArrowForwardIos/>
                    </button>
                </div>
                <div className={styles.dots}>
                        {React.Children.map(children, (child, index) => {
                            return(
                                <button className={`${styles.dot} ${index === activeIndex ? styles.active: ''}`} onClick={() => updateIndex(index)}></button>
                            );
                        })}
                </div>
            </div>
        );
    }

}

export default Slider;