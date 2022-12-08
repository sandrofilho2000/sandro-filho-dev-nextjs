import React from 'react'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

let projects = [
    {
        "id": 0,
        "name": "Mulheres no front",
        "text": "Site criado para divulgação de um curso afirmativo para mulheres no mercado de T.I",
        "img": "./assets/images/mulheres_no_front.webp",
        "img_alt": "Site Mulheres no Front",
        "img_title": "Site Mulheres no Front",
        "link": "https://www.universidaderaccoon.com/mulheres-no-front/"
    },
    {
        "id": 1,
        "name": "InterJud",
        "text": "Plataforma para compra e venda de créditos judiciais",
        "img": "./assets/images/interjud.webp",
        "img_alt": "Site InterJud",
        "img_title": "Site InterJud",
        "link": "http://interjud.com.br"
    },
    {
        "id": 2,
        "name": "JULIANA PSI",
        "text": "Site institucional para psicologia com um design clean e minimalista.",
        "img": "./assets/images/julianaPSI.webp",
        "img_alt": "Site JulianaPSI",
        "img_title": "Site JulianaPSI",
        "link": "http://julianalemospsicologa.com.br/"
    },
    {
        "id": 3,
        "name": "Pizzaria Real",
        "text": "Um cardápio virtual interativo feito para facilitar a vida do seu négocio",
        "img": "./assets/images/pizzaria_real.webp",
        "img_alt": "Site Pizzaria Real",
        "img_title": "Site Pizzaria Real",
        "link": "https://sunny-caramel-fbe4f4.netlify.app/"
    },
    {
        "id": 4,
        "name": "Site institucional",
        "text": "Modelo de site institucional para diversas aplicações. Design simples e minimalista",
        "img": "./assets/images/lorem.webp",
        "img_alt": "Site Lorem",
        "img_title": "Site Lorem",
        "link": "https://compassionate-hodgkin-51b523.netlify.app/"
    },
    {
        "id": 5,
        "name": "SINAPSE",
        "text": "Site modelo com um tema dark. Muito indicado para LP's de cursos no geral",
        "img": "./assets/images/sinapse.webp",
        "img_alt": "Site Sinapse",
        "img_title": "Site Sinapse",
        "link": "https://rocky-teste.herokuapp.com/"
    },
    {
        "id": 6,
        "name": "Glassmorphism Calendar",
        "text": "Calendário dinâmico criado a partir dos meus estudos",
        "img": "./assets/images/glassmorphism Calendar.webp",
        "img_alt": "Site Glassmorphism Calendar",
        "img_title": "Site Glassmorphism Calendar",
        "link": "https://dynamic-calendar-b94fc.web.app/"
    },
    {
        "id": 7,
        "name": "Card Glass",
        "text": "Reproduzindo a textura de um vidro com CSS, extremamante realista.",
        "img": "./assets/images/card_glass.webp",
        "img_alt": "Site Card Glass",
        "img_title": "Site Card Glass",
        "link": "https://glass-card-51d2e.web.app/"
    },
    {
        "id": 8,
        "name": "Gradient Border",
        "text": "Aplicando cores Neon em um design real.",
        "img": "./assets/images/gradient_border.webp",
        "img_alt": "Site Gradient Border",
        "img_title": "Site Gradient Border",
        "link": "https://gradient-border-4d11c.web.app/"
    },
    {
        "id": 9,
        "name": "Moonlight Parallax",
        "text": "Como criar um efeito parallax em um site deslumbrante.",
        "img": "./assets/images/moonlight_parallax.webp",
        "img_alt": "Site Moonlight Parallax",
        "img_title": "Site Moonlight Parallax",
        "link": "https://moonlight-parallax-58bda.web.app"
    }
]


const Portfolio = () => {

    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 300,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '',
            '',
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        },
    };

    return (
        <section className="portfolio" id="portfolio">
            <div className="max-width">
                <h2 className="title">Portifólio</h2>
                <div className="portfolio-content">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={4}
                        nav={true}
                        dots={false}
                        animateIn={true}
                        {...options}
                    >
                        {
                            projects.map((item, index)=>{
                                return (
                                    <div key={index} className="card">
                                        <div className="box">
                                            <img alt={item.img_alt} title={item.img_title} loading="lazy"
                                                src={item.img} />
                                            <div className="text">{item.name}</div>
                                            <p>{item.text}</p>
                                            <a href={item.link} target="_blank" rel="noreferrer">Acessar</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>

                </div>
            </div>
        </section>
    )
}

export default Portfolio


