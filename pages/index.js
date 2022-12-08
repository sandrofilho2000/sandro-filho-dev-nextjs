import { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Menu from '../components/Menu'
import ThemeMenu from '../components/ThemeMenu'
import AppContext from '../components/AppContext'
import RadioPlayer from '../components/RadioPlayer'
import Warning from '../components/Warning'
import Head from 'next/head'
import Head_JSX from '../components/Head'


export default function Home() {

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
    <div className={styles.container}>
      <noscript>
        <iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-PGZLDCW"
          style="display:none;visibility:hidden" width="0">
        </iframe>
      </noscript>
      <Head_JSX />
      <Warning />
      <Menu />
      <ThemeMenu />
      <Navbar />
      <RadioPlayer />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  )
}
