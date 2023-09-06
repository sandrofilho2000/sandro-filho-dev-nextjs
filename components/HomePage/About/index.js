import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import profile from '../../../public/assets/images/eu.webp'

import Typed from "typed.js";

const About = () => {

    const el = useRef(null);

    useEffect(() => {

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
    }, [])




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
                        <p>Sou Desenvolvedor Front-End com 3 anos de experiência, fluente em inglês. Comecei minha carreira com Python e agora me especializo em NEXT.js, ReactJS, TypeScript e Tailwind CSS para criar interfaces responsivas e amigáveis ao usuário, sempre utilizando o GIT como ferramenta de controle de versão.

                            Tenho experiência com bancos de dados, incluindo MySQL, Firebase e MongoDB. Além disso, utilizo ferramentas como Figma e Adobe XD para projetar e dar vida às minhas ideias criativas.

                            Atualmente, faço parte da equipe de Otimização de Taxa de Conversão (CRO) na Media.Monks. Lá, combino minhas habilidades técnicas e de design para melhorar a experiência do usuário e impulsionar as conversões.

                            Estou sempre aberto a conexões e oportunidades de colaboração com profissionais talentosos. Se você gostaria de se conectar ou discutir projetos empolgantes, sinta-se à vontade para entrar em contato.

                        </p>
                        <a href="/assets/Curriculum.pdf" target="_blank" rel="noreferrer">Baixar currículo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About