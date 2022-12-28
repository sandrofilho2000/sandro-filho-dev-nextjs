/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, {useContext, useState} from 'react'
import Tilt from 'react-parallax-tilt'
import AppContext from '../../AppContext'

const Certificates = () => {
    const context = useContext(AppContext)

    const [certificateOverlay, setCertificateOverlay] = useState()

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

    let handleOpenOverlay = (e) =>{
        let id = e.currentTarget.getAttribute("picId")
        let pic = certificates.filter((item)=>{
            return item.id == id
        })

        context.setOverlayCertificatePic({active: true, img: pic[0].img, id: pic[0].id})
    }

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

    return (
        <section className='certificates' id='certificates'>
            <div className='max-width'>
                <h2 className='title'>
                    Certificados
                </h2>
                <div className='certificates-content'>
                    {
                        certificates.map((item, index)=>{
                            return (

                                <div onClick={(e)=>{handleOpenOverlay(e)}} picId={item.id} key={item.id} className='certificate'>
                                    <Tilt className='Tilt'
                                        {...tiltOptions}
                                    >
                                        <img src={`./assets/images/certificados/${item.img}`} />
                                    </Tilt>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Certificates