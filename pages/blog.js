import React, {useContext, useEffect} from 'react'
import AppContext from '../components/AppContext'
import BlogPosts from '../components/BlogPage/BlogPosts'
import HeroSlider from '../components/BlogPage/HeroSlider'
import Blog from '../components/HomePage/Blog'
import ThemeMenu from '../components/HomePage/ThemeMenu'
import Navbar from '../components/Navbar'
import Head_JSX from '../components/HomePage/Head'
import Contact from '../components/HomePage/Contact'
import RadioPlayer from '../components/HomePage/RadioPlayer'

const BlogPage = () => {
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
            <RadioPlayer/>
            <Navbar sticky="sticky defSticky" />
            <ThemeMenu/>
            <HeroSlider/>
            <BlogPosts/>
            <Contact />
        </>
    )
}

export default BlogPage