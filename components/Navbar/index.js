/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { FaPalette, FaSearch } from "react-icons/fa";
import AppContext from '../AppContext';

const Navbar = ({sticky=false}) => {
    const [stickNav, setStickyNav] = useState("")
    const [search, setSearch] = useState(false)
    const [searchActive, setSearchActive] = useState(true)

    const context = useContext(AppContext)

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
        if(window.location.pathname !== '/'){
            setSearch(true)
        }
    },[])

    let handleSearchActive = () =>{
        setSearchActive(!searchActive)
    }

    let handlePostSearchOverlay = (e) =>{
        let value = e.currentTarget.value
        if(value){
            context.setPostSearchActiveContext(true)
        }else{
            context.setPostSearchActiveContext(false)
        }
        context.setPostSearchInputContext(value)
    }
    return (
        <nav className={`navbar ${stickNav} ${sticky}`}>
            {search && 
                <div className='faSearch'>
                    <FaSearch onClick={()=>{handleSearchActive()}} />
                    <input onChange={(e)=>{handlePostSearchOverlay(e)}} className={`${searchActive ? 'active' : ''}`} type="search" placeholder='Pesquisar post...'/>
                </div>
            }
            <div className="max-width">
                <h1>
                    <div className="logo"><Link href="/">Sandro<span> Filho DEV</span></Link></div>
                </h1>
            </div>
            <FaPalette className='faPalette' onClick={()=>{handleThemeMenuActive()}}/>
        </nav>
    )
}

export default Navbar