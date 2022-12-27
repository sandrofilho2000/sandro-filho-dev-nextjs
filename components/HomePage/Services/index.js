import React from 'react'
import { FaCode, FaLaptop, FaPaintBrush, FaChessBishop, FaShoppingBag, FaGoogle } from 'react-icons/fa'

import Tilt from 'react-parallax-tilt'


const Services = () => {
    const tiltOptions = {
        perspective: 500,
        glareEnable: true,
        glareMaxOpacity: 1,
        scale: 1,
        max: 3,
        tiltMaxAngleX: 3,
        tiltMaxAngleY: 3,
        glarePosition:"all",
    }
    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">Meus serviços</h2>
                <div className="serv-content">
                    <Tilt className="Tilt" 
                            {...tiltOptions}
                        >
                        <div className="card">
                            <div className="box">
                                <FaPaintBrush />
                                <div className="text">Web Design</div>
                                <p>Buscarei a solução ideal para o seu negócio, com designs detalhistas e modernos</p>
                            </div>
                        </div>

                    </Tilt>
                    <Tilt className="Tilt"
                            {...tiltOptions}
                        >

                        <div className="card">
                            <div className="box">
                                <FaCode />
                                <div className="text">Evolução/Criação de Sites</div>
                                <p>HTML, CSS e JS sempre foram meus aliados e com eles, escreverei o código que irá trazer seu
                                    projeto à vida</p>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt className="Tilt"
                            {...tiltOptions}
                        >

                        <div className="card">
                            <div className="box">
                                <FaLaptop />
                                <div className="text">Sistemas</div>
                                <p>Integração com banco de dados em sistemas PHP podem criar algo incrível e útil. Pode
                                    acreditar!</p>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt className="Tilt"
                            {...tiltOptions}
                        >
                        <div className="card">
                            <div className="box">
                                <FaGoogle />
                                <div className="text">SEO</div>
                                <p>Usando as melhores praticas de SEO, colocarei seu site nas primeiras posições do Google</p>
                            </div>
                        </div>

                    </Tilt>





                </div>
            </div>
        </section>
    )
}

export default Services