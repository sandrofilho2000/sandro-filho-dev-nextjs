import { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomePage/Hero'
import About from '../components/HomePage/About'
import Services from '../components/HomePage/Services'
import Skills from '../components/HomePage/Skills'
import Portfolio from '../components/HomePage/Portfolio'
import Blog from '../components/HomePage/Blog'
import Contact from '../components/HomePage/Contact'
import Menu from '../components/HomePage/Menu'
import ThemeMenu from '../components/HomePage/ThemeMenu'
import AppContext from '../components/AppContext'
import RadioPlayer from '../components/HomePage/RadioPlayer'
import Warning from '../components/HomePage/Warning'
import Head_JSX from '../components/HomePage/Head'


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
    <div>
      <noscript>
        <iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-PGZLDCW"
          style={{display:"none", visibility:"hidden"}} width="0">
        </iframe>
      </noscript>
      <Head_JSX />
      <Warning />
      <Menu />
      <ThemeMenu />
      <Navbar />
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
