/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaPalette } from "react-icons/fa";

const Navbar = ({sticky=false}) => {
    const [stickNav, setStickyNav] = useState("")

    let handleThemeMenuActive = () =>{
        document.querySelector(".theme-color-menu").classList.toggle("active")
    }

    useEffect(()=>{
        window.onscroll = () =>{
            if(window.pageYOffset > 20){
                setStickyNav("sticky")
                try{
                    document.querySelector(".navigation").setAttribute("menu-sticky", stickNav)
                }catch{}
            }else{
                setStickyNav("")
                try{
                    document.querySelector(".navigation").removeAttribute("menu-sticky")
                }catch{}
            }

        }
    },[])
    
    return (
        <nav className={`navbar ${stickNav} ${sticky}`}>
            <div className="max-width">
                <h1>
                    <div className="logo"><Link href="/">Sandro<span> Filho DEV</span></Link></div>
                </h1>
            </div>
            <FaPalette onClick={()=>{handleThemeMenuActive()}}/>
        </nav>
    )
}

export default Navbar