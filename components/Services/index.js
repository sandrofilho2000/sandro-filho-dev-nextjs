import React from 'react'
import { FaCode, FaLaptop, FaPaintBrush, FaChessBishop, FaShoppingBag, FaGoogle} from 'react-icons/fa'

const Services = () => {
    return (
        <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">Meus serviços</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <FaPaintBrush/>
                        <div className="text">Web Design</div>
                        <p>Buscarei a solução ideal para o seu negócio, com designs detalhistas e modernos</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <FaCode/>
                        <div className="text">Evolução/Criação de Sites</div>
                        <p>HTML, CSS e JS sempre foram meus aliados e com eles, escreverei o código que irá trazer seu
                            projeto à vida</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <FaLaptop/>
                        <div className="text">Sistemas</div>
                        <p>Integração com banco de dados em sistemas PHP podem criar algo incrível e útil. Pode
                            acreditar!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <FaGoogle/>
                        <div className="text">SEO</div>
                        <p>Usando as melhores praticas de SEO, colocarei seu site nas primeiras posições do Google</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services