import React, {useState} from 'react'
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

import styles from './Menu.module.scss';
import * as Icon from "react-icons/hi"; 
import { VscChromeClose } from "react-icons/vsc";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const [menuColor, setMenuColor] = useState({color: 'white'});

    const listenScrollEvent = e => {
        if (window.scrollY > 670) {
            setMenuColor({color: 'black'})
        } else {
            setMenuColor({color: 'white'})
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
      }, [menuColor])

      const openMenuHandler = () => {
        setIsOpen(!isOpen)
      }
    
    if(isMobile){
        return(
            <>
            <header className={styles.mobile__wrapper} style={{color: menuColor.color}}>
                <p className={styles.logo} style={{color: menuColor.color}}>Marcos.</p>
                <button className={styles.mobileMenu} style={{color: menuColor.color}} onClick={openMenuHandler}>
                <Icon.HiOutlineMenuAlt2 style={{color: menuColor.color}}/>
                </button>
            </header>
            
            <header className={`${styles.menu__wrapper} ${isOpen ? styles.isOpen : ''}`} style={{color: menuColor.color}}>
                <button className={styles.mobileMenu} style={{color: menuColor.color}} onClick={openMenuHandler}>
                <VscChromeClose style={{color: menuColor.color}}/>
                </button>
                <ul className={styles.menu} style={{color: menuColor.color}}>
                    <a href="#about" onClick={() => setIsOpen(false)}><li>ABOUT</li></a>
                    <a href="#stack" onClick={() => setIsOpen(false)}><li>STACK</li></a>
                    <a href="#projects" onClick={() => setIsOpen(false)}><li>PROJECTS</li></a>
                    <a href="#contact-me" onClick={() => setIsOpen(false)}><li>CONTACT</li></a>
                </ul>
        </header>
            </>
        );
    }

    return(
        <header className={styles.menu__wrapper} style={{color: menuColor.color}}>
            <p className={styles.logo}>Marcos.</p>
            <ul className={styles.menu} style={{color: menuColor.color}}>
                <a href="#about"><li>ABOUT</li></a>
                <a href="#stack"><li>STACK</li></a>
                <a href="#projects"><li>PROJECTS</li></a>
                <a href="#contact-me"><li>CONTACT</li></a>
            </ul>
        </header>
        
    );

}

export default Menu;