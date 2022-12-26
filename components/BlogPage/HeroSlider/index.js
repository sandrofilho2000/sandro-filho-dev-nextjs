/* eslint-disable @next/next/no-img-element */
import React from 'react'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from 'next/link';
// This is for Next.js. On Rect JS remove this line

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

/* var posts = [
    {
        "headline": "O que é o TabNews? Conheça a nova comunidade de\n                                    Tecnologia",
        "content": "TabNews é uma plataforma em formato de Fóruns para a comunidade de Tecnologia\n                                    compartilhar\n                                    conteúdo de valor, tirar dúvidas e interagirem.\n\n                                    Idealizada pelo desenvolvedor e youtuber: Filipe Deschamps, a plataforma está\n                                    disponível\n                                    em\n                                    TabNews, possui código aberto no GitHub e já conta com mais de 40 contribuidores.",
        "img": "./assets/images/blog/tabnews.webp",
        "link": "https://tavanoblog.com.br/post/o-que-e-o-tabnews",
        "main_post": true
    },
    {
        "headline": "4 Oportunidades para Melhorar a Velocidade do seu\n                                    E-commerce",
        "content": "Quando o assunto é performance de websites, as dicas mais comuns são de redução do\n                                    tamanho das imagens e remoção de código não utilizado.\n\n                                    E a verdade é, essas correções são muito importantes, mas você não pode se limitar a\n                                    isso.\n\n                                    Nesse post, vamos trazer 4 táticas para melhorar a velocidade da sua Loja Virtual.",
        "img": "./assets/images/blog/melhorar_velocidade.webp",
        "link": "https://tavanoblog.com.br/post/oportunidades-para-melhorar-a-velocidade-do-seu-ecommerce",
        "main_post": false
    },

    {
        "headline": "Vale a pena criar um blog com React?",
        "content": "Sim, é totalmente possível que um blog em React tenha resultados muito bons, mas\n                                    você precisa tomar muito cuidado durante o desenvolvimento.\n\n                                    React é uma biblioteca Javascript que faz toda a renderização da página no\n                                    Client\n                                    Side e isso é muito perigoso para um blog.",
        "img": "./assets/images/blog/vale_a_pena_react.webp",
        "link": "https://tavanoblog.com.br/post/blog-com-react",
        "main_post": false
    },
    {
        "headline": "O que é FastStore? Saiba tudo sobre a nova solução da VTEX",
        "content": "FastStore é uma tecnologia Headless que pretende dominar o ecossistema de desenvolvimento de e-commerce, com um kit de ferramentas fullstack focado em alto desempenho. Com objetivo de dar mais liberdade aos desenvolvedores, a equipe escolheu a arquitetura Jamstack e as principais linguagens do mercado.",
        "img": "https://tavanoblog.com.br/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Ftavanoblog%2F01695548-25fe-4943-9222-337cf3d36f2f_Design%2Bsem%2Bnome%2B%25281%2529.png%3Fauto%3Dcompress%2Cformat&w=1920&q=75",
        "link": "https://tavanoblog.com.br/post/vtex-fast-store",
        "main_post": false
    }
] */

const HeroSlider = ({ posts }) => {

    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
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
                items: 1,
            },
            1000: {
                items: 1,
            }
        },
    };

    return (
        <section className='heroSlider'>
            <OwlCarousel
                className="owl-theme"
                loop
                margin={4}
                animateOut='fadeOut'
                autoplayTimeout={12000}
                autoplayHoverPause={false}
                nav={true}
                dots={false}
                animateIn={true}
                {...options}
            >
                {posts.map((item, index) => {
                    if (index < 3) {
                        return (
                            <div key={index} className="slideItem" style={{ backgroundImage: `url(${item.coverPhoto.url})` }}>
                                <div className="post">
                                    <div className="text blog_headline">{item.title}</div>

                                    <div className="text_wrapper">

                                        <div className="text blog_headline" title={item.title}>{item.title}</div>
                                        <div className='text_content' dangerouslySetInnerHTML={{ __html: item.content.html }}></div>

                                        <Link href={'/' + item.slug} className="cta">
                                            Ler mais
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                })}
            </OwlCarousel>
        </section>
    )
}

export default HeroSlider