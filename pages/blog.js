import React, { useContext, useEffect } from 'react'
import AppContext from '../components/AppContext'
import BlogPosts from '../components/BlogPage/BlogPosts'
import HeroSlider from '../components/BlogPage/HeroSlider'
import ThemeMenu from '../components/ThemeMenu'
import Navbar from '../components/Navbar'
import Head_JSX from '../components/HomePage/Head'
import Contact from '../components/HomePage/Contact'
import { GraphQLClient, gql } from "graphql-request";
import SearchPosts from '../components/BlogPage/SearchPosts'

const graphcms = new GraphQLClient("https://api-sa-east-1.hygraph.com/v2/cl9yvfs8y2bdh01uk61941hvs/master")

const QUERY = gql`
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

export async function getStaticProps() {
    const { posts } = await graphcms.request(QUERY)
    return {
        props: {
            posts
        },
        revalidate: 10,
    }
}

const BlogPage = ({posts}) => {
  useEffect(() => {
    document.title = "Sandro Filho DEV | Blog"
  }, []);
  
  const context = useContext(AppContext)

  return (
      <>
          <Head_JSX />
          <Navbar sticky="sticky defSticky" />
          <ThemeMenu />
          <HeroSlider posts={posts} />
          <BlogPosts posts={posts} />
          <Contact />
          {
            context.postSearchActiveContext && 
              <SearchPosts posts={posts} searchInput={context.postSearchInputContext}/>
          }
      </>
  )
}

export default BlogPage