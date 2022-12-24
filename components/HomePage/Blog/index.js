/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from 'next/link';
import { Post } from '../../BlogPage/BlogPosts/Post';


var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});


const Blog = ({ posts }) => {
    var main_post = posts[0]
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
                        <Post item={main_post} />
                    </div>
                    <div className="veja_tambem">
                        <div className="h4_role">
                            Veja também
                        </div>
                        <div className="cards_container cards_container_desktop">
                            {
                                posts.map((item, index) => {
                                    return (
                                        <Post key={item.slug} item={item} />
                                    )
                                })
                            }
                        </div>

                        {/*                     <div className="cards_container cards_container_mobile">
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
                                        <Post key={item.slug} item={item}></Post>
                                    )
                                }
                            })}
                        </OwlCarousel>
                    </div> */}
                    </div>
                </div>
                <Link className='goToBlog' href="/blog">Acessar blog</Link>
            </div>
        </section>
    )
}

export default Blog


