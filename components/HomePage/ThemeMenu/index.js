import React, { useContext, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import AppContext from '../../AppContext'

const ThemeMenu = () => {

    const context = useContext(AppContext)

    let handleColorActive = () =>{
        let color;

        
        if(localStorage.getItem("theme-color")){
            color = localStorage.getItem("theme-color")
        }else{
            color = context.colorContext
            if(!color){
                color = "crimson"
            }
        }

        document.querySelectorAll("li[color]").forEach((item)=>{
            if(item.classList.contains(color)){
                item.classList.add("active")
            }else{
                item.classList.remove("active")
            }
        })
    }
    

    let handleThemeActive = () =>{
        let theme;
        if(localStorage.getItem("theme-color")){
            theme = localStorage.getItem("theme-mode")
        }else{
            theme = context.themeContext
        }
        
        document.querySelector(".themes-toggle").setAttribute("theme-mode", `theme-mode-${theme}`)

    }

    let handleThemeMenuActive = () =>{
        document.querySelector(".theme-color-menu").classList.toggle("active")
    }

    let handleColorChange = (color) =>{
        context.setColorContext(color)
        localStorage.setItem("theme-color", color)
    }

    let handleThemeChange = (e) =>{
        var currTheme = localStorage.getItem("theme-mode") == 'dark' || localStorage.getItem("theme-mode") == undefined ? 'light' : 'dark'
        localStorage.setItem("theme-mode", currTheme)
        context.setThemeContext(localStorage.getItem("theme-mode"))
    }

        
    useEffect(()=>{
        handleColorActive()
        handleThemeActive()
    }, [context])


    return (
        <aside className="theme-color-menu">
            <div className="menu-top">
                <div className="h4_role">TEMA</div>
                <span onClick={()=>{handleThemeMenuActive()}} className="closeMenu">+</span>
            </div>
            <div className="themes-wrapper">
                <div className="themes-top">
                    <div className="h4_role">
                        Temas
                    </div>
                </div>
                <div className="themes-toggle" theme-mode={`theme-mode-${context.themeContext}`} onClick={(e)=>{handleThemeChange(e)}}>
                    <div className="toggle-ball"></div>
                    <div className="theme light" theme="light">
                        <FaSun/>
                    </div>
                    <div className="theme dark" theme="dark">
                        <FaMoon/>
                    </div>
                </div>
            </div>
            <div className="colors-wrapper">
                <div className="colors-top">
                    <div className="h4_role">
                        Cores
                    </div>
                </div>
                <ul className="colors-list">
                    <li className="cyan" color="cyan" onClick={()=>{handleColorChange('cyan')}}> 
                        <div className="circle"></div>
                        Ciano
                    </li>
                    <li className="red" color="red" onClick={()=>{handleColorChange('red')}}> 
                        <div className="circle"></div>
                        Vermelho
                    </li>
                    <li className="orange" color="orange" onClick={()=>{handleColorChange('orange')}}> 
                        <div className="circle"></div>
                        Laranja
                    </li>
                    <li className="blue" color="blue" onClick={()=>{handleColorChange('blue')}}> 
                        <div className="circle"></div>
                        Azul
                    </li>
                    <li className="green" color="green" onClick={()=>{handleColorChange('green')}}> 
                        <div className="circle"></div>
                        Verde
                    </li>
                    <li className="crimson" color="crimson" onClick={()=>{handleColorChange('crimson')}}> 
                        <div className="circle"></div>
                        Carmesim
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default ThemeMenu