/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaEye } from 'react-icons/fa'

const BlogPosts = () => {

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

    return (
        <section className='blogPosts'>
            <h2>
            </h2>
            <div className='postsWrapper'>
                <div className='postsList'>
                    {posts.map((item, index) => {
                        if (!item.main_post) {
                            return (
                                <a key={index} href={item.link} className="post">
                                    <img src={item.img}
                                        title={item.headline}
                                        alt={item.headline} />
                                    <div className="text_content">
                                        <div className="text blog_headline">{item.headline}</div>
                                        <div className="authorDate">
                                            <span>
                                                por: <span className='author'>Sandro Filho</span>
                                            </span>
                                            |
                                            <span>
                                                Dez 15
                                            </span>

                                            <div className='views'>
                                                <FaEye />
                                                <span className='views_span'>
                                                    : 123
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        }
                    })}
                    {posts.map((item, index) => {
                        if (!item.main_post) {
                            return (
                                <div key={index} className="post">
                                    <img src={item.img}
                                        title={item.headline}
                                        alt={item.headline} />
                                    <div className="text_content">
                                        <div className="text blog_headline">{item.headline}</div>
                                        <div className="authorDate">
                                            <span>
                                                por: <span className='author'>Sandro Filho</span>
                                            </span>
                                            |
                                            <span>
                                                Dez 15
                                            </span>
                                            <div className='views'>
                                                <FaEye />
                                                <span className='views_span'>
                                                    : 123
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className='mostReads'>
                    <p>Mais lidas</p>
                    <div className='mostReadsWrapper'>
                        {posts.map((item, index) => {
                            if (!item.main_post) {
                                return (
                                    <a key={index} href={`${item.link}`} className="post">
                                        <img src={item.img}
                                            title={item.headline}
                                            alt={item.headline} />
                                        <div className="text_content">
                                            <div className="text blog_headline">{item.headline}</div>
                                        </div>
                                    </a>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BlogPosts