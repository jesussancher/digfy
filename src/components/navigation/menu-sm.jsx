import React from 'react'

export default function MenuSM(props) {

    return (
        <div
            className="menu__small fixed"
            style={{
            width: !props.status
                ? "0px"
                : "100%",
            opacity: !props.status
                ? "0"
                : "1"
        }}>
            <div>
                <div className="questrial__font">
                    <nav className="menu__sm">
                        <ul>
                            <li>
                                <a href="inicio">Inicio</a>
                            </li>
                            <li>
                                <a href="nosotros">Nosotros</a>
                            </li>
                            <li>
                                <a href="asesorias">Asesorías</a>
                            </li>
                            <li>
                                <a href="ayuda">Ayuda</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="menu__right__btn__container">
                    <a className="menu__center__btn questrial__font" href="">Diagnóstico</a>
                </div>
            </div>
        </div>
    )
}