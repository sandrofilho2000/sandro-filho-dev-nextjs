import Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import About from '../components/AboutSection'
import Services from '../components/ServicesSection'
import styles from '../styles/Home.module.css'
import Skills from '../components/SkillsSection'
import Slider from '../components/Slider/Slider'
import Portfolio from '../components/Portfolio'
import { Blog } from '../components/BlogSection'
import Contact from '../components/Contact'
import Menu from '../components/Menu'
import { useContext, useEffect } from 'react'
import ThemeMenu from '../components/ThemeMenu'
import AppContext from '../components/AppContext'
import RadioPlayer from '../components/RadioPlayer'
import Warning from '../components/Warning'


export default function Home() {

  const context = useContext(AppContext)

  useEffect(()=>{
    let currColor = localStorage.getItem("theme-color") ? localStorage.getItem("theme-color") : context.colorContext
    let currTheme = localStorage.getItem("theme-mode") ? localStorage.getItem("theme-mode") : context.themeContext
    
    document.querySelector("body").setAttribute("theme-mode", `theme-mode-${currTheme}`)
    document.querySelector("body").setAttribute("theme-color", `theme-color-${currColor}`)
  }, [context])

  return (
    <div className={styles.container}>
      <Warning/>
      <Menu/>
      <ThemeMenu/>
      <Navbar/>
      <RadioPlayer/>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Blog/>
      <Contact/>
    </div>
  )
}
