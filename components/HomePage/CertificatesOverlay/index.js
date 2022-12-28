import React, { useContext } from 'react'
import Tilt from 'react-parallax-tilt'
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import AppContext from '../../AppContext';

const CertificatesOverlay = () => {
    const context = useContext(AppContext)

    const tiltOptions = {
        perspective: 500,
        glareEnable: true,
        glareMaxOpacity: 1,
        scale: 1,
        max: 3,
        tiltMaxAngleX: 3,
        tiltMaxAngleY: 3,
        glarePosition: "all",
    }

    const certificates = [
        {
            id: 0,
            img: 'adobe_xd_page-0001.webp'
        }
        ,
        {
            id: 1,
            img: 'banco_de_dados_page-0001.webp'
        }

        ,
        {
            id: 2,
            img: 'design_para_web_page-0001.webp'
        }
        ,

        {
            id: 3,
            img: 'diploma-1.webp'
        }
        ,

        {
            id: 4,
            img: 'front_end_completo_2.webp'
        }
        ,
        {
            id: 5,
            img: 'front_end_completo-1.webp'
        }
        ,
        {
            id: 6,
            img: 'javascript_completo-1.webp'
        }
        ,
        {
            id: 7,
            img: 'node_completo-1.webp'
        }
        ,
        {
            id: 8,
            img: 'python.webp'
        }
        ,
    ]

    let active = context.overlayCertificatePic.active
    let img = context.overlayCertificatePic.img
    let img_id = context.overlayCertificatePic.id

    let handleCloseOverlay = (e) =>{
        e.stopPropagation()
        context.setOverlayCertificatePic({active: false})
    }

    let handleOverlayNext = (e) =>{
        let id = img_id + 1 >= certificates.length ? 0 : img_id + 1
        let pic = certificates.filter((item)=>{
            return item.id == id
        })

        console.log(pic, id)

        context.setOverlayCertificatePic({active: true, img: pic[0].img, id: pic[0].id})
    }

    let handleOverlayPrev = (e) =>{
        let id = img_id - 1 <= 0 ? certificates.length - 1 : img_id - 1
        let pic = certificates.filter((item)=>{
            return item.id == id
        })

        console.log(pic, id)

        context.setOverlayCertificatePic({active: true, img: pic[0].img, id: pic[0].id})
    }



    return (
        <div onClick={(e)=>{handleCloseOverlay(e)}} className={`certificatesOverlay ${active ? 'active ' : ''}`}>
            <Tilt  className="Tilt"
                {...tiltOptions}>
                <img onClick={(e)=>{e.stopPropagation()}} src={`./assets/images/certificados/${img}`} />
            </Tilt>
            <div onClick={(e)=>{e.stopPropagation()}} className='overlayNav'>
                <FaCaretLeft onClick={(e)=>{handleOverlayPrev(e)}}/>
                <FaCaretRight onClick={(e)=>{handleOverlayNext(e)}}/>
            </div>
        </div>
    )
}

export default CertificatesOverlay