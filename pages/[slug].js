/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import { FaUser, FaCalendar } from 'react-icons/fa';
import { GraphQLClient, gql } from "graphql-request";
import Navbar from '../components/Navbar';
import moment from "moment";
import 'moment/locale/pt-br'
import ThemeMenu from '../components/ThemeMenu';
import Contact from '../components/HomePage/Contact';
import Head_JSX from '../components/HomePage/Head';
import PostPageCover from '../components/PostPage/PostPageCover';
import PostPageContent from '../components/PostPage/PostPageContent';
import AppContext from '../components/AppContext';
import SearchPosts from '../components/BlogPage/SearchPosts';
import PostList from '../components/BlogPage/BlogPosts/PostList';

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
  moment.locale('pt-br')
  let mostReadsPosts = posts.filter((item) => {
    return item.id !== post.id
  })

  mostReadsPosts.length = 3

  const context = useContext(AppContext)
  return (
    <div className='blogPostPage'>
      <Head_JSX />
      <Navbar sticky="sticky defSticky" />
      <ThemeMenu />
      <div>
        <h1 className='postTitle'>
          {post.title}
        </h1>
      </div>
      <div className='postAuthorDate'>
        <div className='postAuthor'> 
          <span className='icon'>
            <FaUser />
          </span>
          <span>
            Por: {post.author.name}
          </span>
        </div>
        <div className='postCalendar'>
          <span className='icon'>
            <FaCalendar />
          </span>
          <span>
            {moment(post.datePublished).format("DD/MM/yy")}
          </span>
        </div>
      </div>
      <PostPageCover img={post.coverPhoto.url} />

      <section className='main'>
        <PostPageContent html={post.content.html} title={post.title} />
        <PostList posts={posts} postHorizontal={'horizontalResponsive'} title="Veja tambem" maxPosts={3} />

      </section>

      <Contact />
      {
        context.postSearchActiveContext &&
        <SearchPosts posts={posts} searchInput={context.postSearchInputContext} />
      }
    </div>
  )
}

export default BlogPost