/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa';
import { GraphQLClient, gql } from "graphql-request";
import Navbar from '../components/Navbar';
import ThemeMenu from '../components/HomePage/ThemeMenu';
import AppContext from '../components/AppContext';
import Contact from '../components/HomePage/Contact';
import Link from 'next/link';
import { Post } from '../components/BlogPage/BlogPosts/Post';
import MostReads from '../components/BlogPage/MostReads';
import Head_JSX from '../components/HomePage/Head';
import PostPageCover from '../components/PostPage/PostPageCover';
import PostPageContent from '../components/PostPage/PostPageContent';

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

const ALLQUERY = gql`
  {
    posts{
      id
      title
      datePublished
      slug
      content{
        html
      }
      author{
        name
        avatar{
          url
        }
      }
      coverPhoto{
        url
      }
    }
  }
`

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
  const { posts } = await graphcms.request(ALLQUERY);
  return {
    props: {
      post,
      posts
    },
    revalidate: 30,
  };
}

const BlogPost = ({ post, posts }) => {

  let mostReadsPosts = posts.filter((item)=>{
    return item.id !== post.id
  })

  mostReadsPosts.length = 3

  useEffect(() => {
    document.title = post.title
  });

  return (
    <div className='blogPostPage'>
      <Head_JSX />
      <Navbar sticky="sticky defSticky" />
      <ThemeMenu />

      <PostPageCover img={post.coverPhoto.url}/>

      <section className='main'>
        <PostPageContent html={post.content.html} title={post.title}/>
        <MostReads posts={mostReadsPosts}/>
        <Link className='backToBlog' href='../blog'>
          <FaArrowCircleLeft />
          <span>
            Voltar ao Blog
          </span>
        </Link>
      </section>

      <Contact />

    </div>
  )
}

export default BlogPost