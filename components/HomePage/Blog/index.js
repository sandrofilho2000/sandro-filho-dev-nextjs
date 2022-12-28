/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from 'next/link';
import { Post } from '../../BlogPage/BlogPosts/Post';
import PostList from '../../BlogPage/BlogPosts/PostList';


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
    var vejaTambem = posts.slice(1, posts.length)
    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        center: true,
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
        <section className="blog" id="blog">
            <div className="max-width">
                <h2 className="title">Blog</h2>
                <div className="blog-content">
                    <div className="main_post">
                        <Post item={main_post} />
                    </div>

                    <PostList posts={vejaTambem} postHorizontal={'horizontalResponsive'} title="Veja tambem" maxPosts={3} />
                </div>
                <Link className='goToBlog' href="/blog">Acessar blog</Link>
            </div>
        </section>
    )
}

export default Blog


