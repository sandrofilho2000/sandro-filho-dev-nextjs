import React, { useContext, useEffect, useRef, useState } from 'react'

import bgDarkCrimson from '../../../public/assets/images/banner-dark-crimson.webp'
import bgLightCrimson from '../../../public/assets/images/banner-light-crimson.webp'

import bgDarkRed from '../../../public/assets/images/banner-dark-red.webp'
import bgLightRed from '../../../public/assets/images/banner-light-red.webp'

import bgDarkGreen from '../../../public/assets/images/banner-dark-green.webp'
import bgLightGreen from '../../../public/assets/images/banner-light-green.webp'

import bgDarkOrange from '../../../public/assets/images/banner-dark-orange.webp'
import bgLightOrange from '../../../public/assets/images/banner-light-orange.webp'

import bgDarkBlue from '../../../public/assets/images/banner-dark-blue.webp'
import bgLightBlue from '../../../public/assets/images/banner-light-blue.webp'

import bgDarkCyan from '../../../public/assets/images/banner-dark-cyan.webp'
import bgLightCyan from '../../../public/assets/images/banner-light-cyan.webp'


import AppContext from '../../AppContext'
import Typed from "typed.js";


const Hero = () => {

    const context = useContext(AppContext)
    const [heroBg, setHeroBg] = useState()
    const el = useRef(null);

    useEffect(() => {
        var theme, color, bg;

        if (!context.themeContext) {
            if (!localStorage.getItem("theme-mode")) {
                theme = "dark"
            } else {
                theme = localStorage.getItem("theme-mode")
            }
        } else {
            theme = context.themeContext
        }

        if (!context.colorContext) {
            if (!localStorage.getItem("theme-color")) {
                color = "crimson"
            } else {
                color = localStorage.getItem("theme-color")
            }
        } else {
            color = context.colorContext
        }

        if (theme == 'dark') {
            switch (color) {
                case 'crimson':
                    bg = bgDarkCrimson.src;
                    break;

                case 'green':
                    bg = bgDarkGreen.src;
                    break

                case 'orange':
                    bg = bgDarkOrange.src;
                    break

                case 'red':
                    bg = bgDarkRed.src;
                    break

                case 'blue':
                    bg = bgDarkBlue.src;
                    break

                case 'cyan':
                    bg = bgDarkCyan.src;
                    break
            }
        } else {
            switch (color) {
                case 'crimson':
                    bg = bgLightCrimson.src;
                    break;

                case 'green':
                    bg = bgLightGreen.src;
                    break

                case 'orange':
                    bg = bgLightOrange.src;
                    break

                case 'red':
                    bg = bgLightRed.src;
                    break

                case 'blue':
                    bg = bgLightBlue.src;
                    break

                case 'cyan':
                    bg = bgLightCyan.src;
                    break
            }
        }

        setHeroBg(bg)

        const typed = new Typed(el.current, {
            strings: [" Web Designer ", " Desenvolvedor Web ", " Programador ", " Freelancer "], // Strings to display
            // Speed settings, try diffrent values untill you get good results

            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, [context])

    var listParticles = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5]

    var styling_dark_red = {
        backgroundImage: `url('${heroBg}')`,
    }

    return (
        <section className="hero" id="hero">
            <div className="particles_container">
                <div className="particles">
                    {
                        listParticles.map((item, index) => {
                            return (
                                <span key={item} style={{ "--i": item }}>
                                    <div></div>
                                </span>
                            )
                        })
                    }
                </div>
                <div className="particles">
                    {
                        listParticles.map((item, index) => {
                            return (
                                <span key={item} style={{ "--i": item }}>
                                    <div></div>
                                </span>
                            )
                        })
                    }
                </div>
                <div className="particles">
                    {
                        listParticles.map((item, index) => {
                            return (
                                <span key={item} style={{ "--i": item }}>
                                    <div></div>
                                </span>
                            )
                        })
                    }
                </div>
                <div className="particles">
                    {
                        listParticles.map((item, index) => {
                            return (
                                <span key={item} style={{ "--i": item }}>
                                    <div></div>
                                </span>
                            )
                        })
                    }
                </div>
            </div>

            <div className="sectionBg" style={styling_dark_red}>

            </div>

            <div className="max-width">
                <div className="hero-content">
                    <div className="text-1">Olá, meu nome é </div>
                    <div className="text-2">Sandro Filho</div>
                    <div className="text-3">Eu sou&nbsp; 
                        <span ref={el} className='typing'></span>
                    </div>
                    <a href="#contact">Me contrate</a>
                </div>
            </div>
        </section>
    )
}

export default Hero