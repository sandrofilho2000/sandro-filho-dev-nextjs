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

const Blog = () => {

    var posts = [
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
            "headline": "O que é \"Desenvolvedor VTEX\" ?",
            "content": "Profissionais de tecnologia que trabalham diretamente com as tecnologias da\n                                    VTEX,\n                                    podem ser considerados \"Desenvolvedores VTEX\".\n\n                                    Esse termo é muito usado nas vagas pelas agências, para encontrar pessoas que já\n                                    tem\n                                    experiência com a plataforma.",
            "img": "./assets/images/blog/desenvolvedor vtex.webp",
            "link": "https://tavanoblog.com.br/post/desenvolvedor-vtex",
            "main_post": false
        }
    ]

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 300,
        navClass: ["owl-prev", "owl-next"],
        responsive: {
            0: {
                items: 1,
            },
            520: {
                items: 2,
            },
            800: {
                items: 3,
            }
        },
    };

    return (
        <section className="blog" id="blog">
        <div className="max-width">
            <h2 className="title">Blog</h2>
            <div className="blog-content">
                <div className="main_post">
                    <div className="card">
                        <a href="https://tavanoblog.com.br/post/o-que-e-o-tabnews">
                            <img width="1980" height="1080" src="./assets/images/blog/tabnews.webp" alt="O que é o TabNews? Conheça a nova comunidade de
                            Tecnologia" title="O que é o TabNews? Conheça a nova comunidade de
                            Tecnologia"/>
                            <div className="text_content">
                                <div className="text blog_headline">O que é o TabNews? Conheça a nova comunidade de
                                    Tecnologia
                                </div>
                                <p className="content">
                                    TabNews é uma plataforma em formato de Fóruns para a comunidade de Tecnologia
                                    compartilhar
                                    conteúdo de valor, tirar dúvidas e interagirem.

                                    Idealizada pelo desenvolvedor e youtuber: Filipe Deschamps, a plataforma está
                                    disponível
                                    em
                                    TabNews, possui código aberto no GitHub e já conta com mais de 40 contribuidores.
                                </p>
                                <div className="blog-cta">
                                    Ler mais
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="veja_tambem">
                    <div className="h4_role">
                        Veja também
                    </div>
                    <div className="cards_container cards_container_desktop">
                        <div className="card">
                            <img height="1080" width="1980" src="./assets/images/blog/melhorar_velocidade.webp" alt="4 Oportunidades para Melhorar a Velocidade do seu
                            E-commerce" title="4 Oportunidades para Melhorar a Velocidade do seu
                            E-commerce"/>
                            <div className="text_content">
                                <div className="text blog_headline">4 Oportunidades para Melhorar a Velocidade do seu
                                    E-commerce</div>
                                <p className="content">
                                    Quando o assunto é performance de websites, as dicas mais comuns são de redução do
                                    tamanho das imagens e remoção de código não utilizado.

                                    E a verdade é, essas correções são muito importantes, mas você não pode se limitar a
                                    isso.

                                    Nesse post, vamos trazer 4 táticas para melhorar a velocidade da sua Loja Virtual.
                                </p>
                                <div className="blog-cta">
                                    <a
                                        href="https://tavanoblog.com.br/post/oportunidades-para-melhorar-a-velocidade-do-seu-ecommerce">
                                        Ler mais
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img height="1080" width="1980" src="./assets/images/blog/vale_a_pena_react.webp" alt=""/>
                            <div className="text_content">
                                <div className="text blog_headline">Vale a pena criar um blog com React?</div>
                                <p className="content">
                                    Sim, é totalmente possível que um blog em React tenha resultados muito bons, mas
                                    você precisa tomar muito cuidado durante o desenvolvimento.

                                    React é uma biblioteca Javascript que faz toda a renderização da página no
                                    Client
                                    Side e isso é muito perigoso para um blog.
                                </p>
                                <div className="blog-cta">
                                    <a
                                        href="https://tavanoblog.com.br/post/blog-com-react">
                                        Ler mais
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img height="1080" width="1980" src="./assets/images/blog/desenvolvedor vtex.webp" alt=""/>
                            <div className="text_content">
                                <div className="text blog_headline">O que é "Desenvolvedor VTEX" ?</div>
                                <p className="content">
                                    Profissionais de tecnologia que trabalham diretamente com as tecnologias da
                                    VTEX,
                                    podem ser considerados "Desenvolvedores VTEX".

                                    Esse termo é muito usado nas vagas pelas agências, para encontrar pessoas que já
                                    tem
                                    experiência com a plataforma.
                                </p>
                                <div className="blog-cta">
                                    <a
                                        href="https://tavanoblog.com.br/post/desenvolvedor-vtex">
                                        Ler mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cards_container cards_container_mobile">
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={4}
                            nav={true}
                            dots={false}
                            animateIn={true}
                            {...options}
                        >
                            {posts.map((item, index)=>{
                                if(!item.main_post){
                                    return (
                                        <div key={index} width="1980" height="180" className="card">
                                        <img src={item.img}
                                            title="4 Oportunidades para Melhorar a Velocidade do seu"
                                            alt="4 Oportunidades para Melhorar a Velocidade do seu"/>
                                        <div className="text_content">
                                            <div className="text blog_headline">{item.headline}</div>
                                            <p className="content">
                                            {item.content}
                                            </p>
                                            <div className="blog-cta">
                                                <a
                                                    href={item.link}>
                                                    Ler mais
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Blog


