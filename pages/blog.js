import React, { useContext, useEffect } from 'react'
import AppContext from '../components/AppContext'
import BlogPosts from '../components/BlogPage/BlogPosts'
import HeroSlider from '../components/BlogPage/HeroSlider'
import ThemeMenu from '../components/HomePage/ThemeMenu'
import Navbar from '../components/Navbar'
import Head_JSX from '../components/HomePage/Head'
import Contact from '../components/HomePage/Contact'

import { GraphQLClient, gql } from "graphql-request";

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
        <>
            <Head_JSX />
            <Navbar sticky="sticky defSticky" />
            <ThemeMenu />
            <HeroSlider />
            <BlogPosts posts={posts} />
            <Contact />
        </>
    )
}

export default BlogPage