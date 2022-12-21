import React, { useContext, useEffect } from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { GraphQLClient, gql } from "graphql-request";
import Navbar from '../../components/Navbar';
import ThemeMenu from '../../components/HomePage/ThemeMenu';
import AppContext from '../../components/AppContext';
import Contact from '../../components/HomePage/Contact';
import Link from 'next/link';

const graphcms = new GraphQLClient("https://api-sa-east-1.hygraph.com/v2/cl9yvfs8y2bdh01uk61941hvs/master")

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
    const { posts } = await graphcms.request(SLUGLIST);
    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, { slug });
    const post = data.post;
    return {
        props: {
            post,
        },
        revalidate: 30,
    };
}
const BlogPost = ({ post }) => {
  const context = useContext(AppContext)

  useEffect(() => {
      let currColor = localStorage.getItem("theme-color") ? localStorage.getItem("theme-color") : context.colorContext
      let currTheme = localStorage.getItem("theme-mode") ? localStorage.getItem("theme-mode") : context.themeContext

      if (!currColor) {
          currColor = "crimson"
      }
      if (!currTheme) {
          currTheme = "dark"
      }

      document.querySelector("body").setAttribute("theme-mode", `theme-mode-${currTheme}`)
      document.querySelector("body").setAttribute("theme-color", `theme-color-${currColor}`)
  }, [context])

  return (
    <div className='blogPostPage'>
      <Navbar sticky="sticky defSticky" />
      <ThemeMenu/>
      <div className='postPageCover'>
        <img src={post.coverPhoto.url} />
      </div>
      <section className='main'>
        <div className='postPageContent'>
          <h1>
            {post.title}
          </h1>
          <div className='text_content' dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        </div>
        <Link className='backToBlog' href='../blog'>
          <FaArrowCircleLeft/>
          <span>
            Voltar ao Blog
          </span>
        </Link>
      </section>
      <Contact/>
    </div>
  )
}

export default BlogPost