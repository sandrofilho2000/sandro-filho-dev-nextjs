import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Vamos tomar um café?</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Faça contato</div>
                    <p>Me mande um email para temos um briefing do projeto. Lembrando que o prazo de entrega é de até 20
                        dias</p>
                    <div className="icons">
                        <div className="row">
                            <FaGithub/>
                            <div className="info">
                                <div className="head">GitHub</div>
                                <div className="sub-title"><a href="https://github.com/sandrofilho2000"
                                        target="_blank" rel="noreferrer">@sandrofilho2000</a></div>
                            </div>
                        </div>
                        <div className="row">
                            <FaLinkedin/>
                            <div className="info">
                                <div className="head">Linkedin</div>
                                <div className="sub-title"><a href="https://www.linkedin.com/in/sandro-filho-927101201/"
                                        target="_blank" rel="noreferrer">Sandro Filho</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <FaPhone/>
                            <div className="info">
                                <div className="head">Telefone</div>
                                <div className="sub-title">
                                    <a href="https://api.whatsapp.com/send?phone=5521984238879&amp;text=Ol%C3%A1"
                                        target="_blank" rel="noreferrer">
                                        <ion-icon name="logo-whatsapp" role="img" aria-label="logo whatsapp"></ion-icon>
                                        (21)98423-8879
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <FaEnvelope/>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">sandrofilho98@yahoo.com.br</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Mensagem</div>
                    <form>
                        <div className="fields">
                            <div className="field name">
                                <input name="name" id="name" placeholder="Nome" required="" type="text" />
                            </div>
                            <div className="field email">
                                <input name="email" id="email" placeholder="Email" required="" type="email" />
                            </div>
                        </div>
                        <div className="field">
                            <input name="subject" id="subject" placeholder="Assunto" required="" type="text" />
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" name="text" id="text" placeholder="Mensagem.." required=""
                                rows="10"></textarea>
                        </div>
                        <div className="button">
                            <button role="button" aria-label="Enviar mensagem" type="submit">Enviar Mensagem 
                            <FaWhatsapp/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact