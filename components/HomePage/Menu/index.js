import React, { useRef, useState, useEffect } from 'react'
import { FaHome, FaAddressCard, FaTools, FaPencilAlt, FaLaptop, FaNewspaper, FaPhone, FaTrophy } from "react-icons/fa";

const Menu = () => {
    const [menuOpened, setMenuOpenend] = useState("0")

    const navigationRef = useRef()
    const toggleRef = useRef()
    const isClicked = useRef(false)

    let open_warning = () => {
        if (localStorage.getItem("warning_closed") !== 'true') {
            document.querySelector(".warning").classList.add("active")
        }
    }

    let handleMenuOpened = (e) => {
        switch (e.detail) {
            case 2: {
                if (menuOpened === 'active') {
                    setMenuOpenend("")
                } else {
                    setMenuOpenend("active")
                }
            }
        }
        open_warning()

    }

    useEffect(() => {
        let navigation = navigationRef.current
        let toggle = toggleRef.current

        const onMouseDown = (e) => {
            isClicked.current = true
        }

        const onMouseUp = () => {
            isClicked.current = false
        }

        const onMouseMove = (e) => {
            if (!isClicked.current) return

            navigation.style.top = `${e.clientY - 15}px`
            navigation.style.left = `${e.clientX - 15}px`
        }

        toggle.addEventListener("mousedown", onMouseDown)
        toggle.addEventListener("mouseup", onMouseUp)
        window.addEventListener("mousemove", onMouseMove)

        const cleanUp = () => {
            navigation.removeEventListener("mousedown", onMouseDown)
            navigation.removeEventListener("mouseup", onMouseUp)
            window.removeEventListener("mousemove", onMouseMove)
        }

        return cleanUp
    }, []);

    return (
        <div ref={navigationRef} className={`navigation ${menuOpened}`}>
            <div ref={toggleRef} onClick={(e) => { handleMenuOpened(e) }} className="toggle">
                <ul className="menu">
                    <li><a href="#home">
                        <span className="icon"><FaHome /></span>
                        <span className="title">Home</span>
                    </a></li>
                    <li><a href="#about">
                        <span className="icon"><FaAddressCard /></span>
                        <span className="title">Sobre</span>
                    </a></li>
                    <li><a href="#portfolio">
                        <span className="icon"><FaLaptop /></span>
                        <span className="title">Portifólio</span>
                    </a></li>
                    <li><a href="#services">
                        <span className="icon"><FaTools /></span>
                        <span className="title">Serviços</span>
                    </a></li>
                    <li><a href="#skills">
                        <span className="icon"><FaPencilAlt /></span>
                        <span className="title">Habilidades</span>
                    </a></li>
                    <li><a href="#certificates">
                        <span className="icon"><FaTrophy /></span>
                        <span className="title">Certificados</span>
                    </a></li>
                    <li><a href="#blog">
                        <span className="icon"><FaNewspaper /></span>
                        <span className="title">Blog</span>
                    </a></li>
                    <li><a href="#contact">
                        <span className="icon"><FaPhone /></span>
                        <span className="title">Contato</span>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu