import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">Meus serviços</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <FontAwesomeIcon icon={faPaintBrush} />
                        <div className="text">Web Design</div>
                        <p>Buscarei a solução ideal para o seu negócio, com designs detalhistas e modernos</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <FontAwesomeIcon icon={faCode} />
                        <div className="text">Criação de Sites</div>
                        <p>HTML, CSS e JS sempre foram meus aliados e com eles, escreverei código que irá trazer seu
                            projeto à vida</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <FontAwesomeIcon icon={faLaptop} />
                        <div className="text">Sistemas</div>
                        <p>Integração com banco de dados em sistemas PHP podem criar algo incrível e útil. Pode
                            acreditar!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services