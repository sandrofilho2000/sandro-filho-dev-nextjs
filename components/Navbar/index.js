import React, { useEffect, useState } from 'react'
import { FaPalette } from "react-icons/fa";

const Navbar = () => {
    const [stickNav, setStickyNav] = useState("")

    let handleThemeMenuActive = () =>{
        document.querySelector(".theme-color-menu").classList.toggle("active")
    }

    useEffect(()=>{
        window.onscroll = () =>{
            if(window.pageYOffset > 20){
                setStickyNav("sticky")
                document.querySelector(".navigation").setAttribute("menu-sticky", stickNav)
            }else{
                setStickyNav("")
                document.querySelector(".navigation").removeAttribute("menu-sticky")
            }

        }
    },[])
    
    return (
        <nav className={`navbar ${stickNav}`}>
            <div className="max-width">
                <h1>
                    <div className="logo"><a href="#">Sandro<span> Filho DEV</span></a></div>
                </h1>
            </div>
            <FaPalette onClick={()=>{handleThemeMenuActive()}}/>
        </nav>
    )
}

export default Navbar