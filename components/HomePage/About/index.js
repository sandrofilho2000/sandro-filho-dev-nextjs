import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import profile from '../../../public/assets/images/me.webp'
import Typed from "typed.js";

const About = () => {

    const el = useRef(null);

    useEffect(()=>{
        
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
    },[])
    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">Sobre mim</h2>
                <div className="about-content">
                    <div className="column left">
                        <Image
                            src={profile}
                            alt="Minha foto"
                            loading="lazy"
                            title="Minha foto"
                        />
                    </div>
                    <div className="column right">
                        <div className="text">Eu sou o Sandro Filho e sou <span ref={el} className="typing-2"></span></div>
                        <p>Nascido e criado no Rio de Janeiro, já busquei minha missão de vida em diversas áreas, porém, foi
                            na programação onde me encontrei. Linhas de código HTML são o que me movem e transformar isso em
                            meu trabalho é um sonho se tornando realidade. Programo em ReactJS, NodeJS, Python, VTEXIO e
                            outras
                            tecnologias. Busco soluções eficazes e criativas para a resolução do desafio de criar um site
                            mais moderno e deslumbrante do que o último. Confira abaixo meu portfólio e dê uma olhada em
                            alguns dos meu trabalhos!</p>
                        <a href="/assets/curriculum.pdf" target="_blank" rel="noreferrer">Baixar currículo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About