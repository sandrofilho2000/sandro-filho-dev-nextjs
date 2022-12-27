/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import Tilt from 'react-parallax-tilt'

const Skills = () => {

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
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">Minhas Habilidades</h2>
                <div className="skills-content">
                    <Tilt className="Tilt"
                        {...tiltOptions}
                    >
                        <div className="card ReactJS">
                            <FontAwesomeIcon icon={faCaretUp} />
                            <img alt="Logo react" title="Logo react" loading="lazy" width="190" height="204"
                                src="./assets/images/stacks/react.webp" />
                        </div>
                    </Tilt>
                    <Tilt className="Tilt"
                        {...tiltOptions}
                    >
                        <div className="card nodeJS">
                            <FontAwesomeIcon icon={faCaretUp} />
                            <img alt="Logo node" title="Logo node" loading="lazy" width="200" height="122"
                                src="./assets/images/stacks/node.webp" />
                        </div>
                    </Tilt>
                    <Tilt className="Tilt"
                        {...tiltOptions}
                    >
                        <div className="card typeScript">
                            <FontAwesomeIcon icon={faCaretUp} />
                            <img alt="Logo typescript" title="Logo typescript" loading="lazy" width="250" height="250"
                                src="./assets/images/stacks/typescript.webp" />
                        </div>
                    </Tilt>
                    <Tilt className="Tilt"
                        {...tiltOptions}
                    >
                        <div className="card vtex">
                            <FontAwesomeIcon icon={faCaretUp} />
                            <img alt="Logo vtex" title="Logo vtex" loading="lazy" width="200" height="72"
                                src="./assets/images/stacks/vtex.webp" />
                        </div>
                    </Tilt>
                    <Tilt className="Tilt"
                        {...tiltOptions}
                    >
                        <div className="card php">
                            <FontAwesomeIcon icon={faCaretUp} />
                            <img alt="Logo php" title="Logo php" loading="lazy" width="200" height="137"
                                src="./assets/images/stacks/php.webp" />
                        </div>
                    </Tilt>
                    <Tilt className="Tilt"
                        {...tiltOptions}
                    >
                        <div className="card mysql">
                            <FontAwesomeIcon icon={faCaretUp} />
                            <img alt="Logo mysql" title="Logo mysql" loading="lazy" width="200" height="137"
                                src="./assets/images/stacks/mysql.webp" />
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>

    )
}

export default Skills