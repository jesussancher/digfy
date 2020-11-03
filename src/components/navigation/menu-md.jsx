import React, {useEffect, useState} from 'react'

export default function MenuMD(props) {

    const [navOffset,
        setNavOffset] = useState({inicio: '0', nosotros: '0', asesorias: '0', ayuda: '0'})

    const sectionOffset = () => {
        const y = window.scrollY;
        const inicio = document
            .getElementById("inicio")
            .offsetHeight;
        const nosotros = document
            .getElementById("nosotros")
            .offsetHeight + inicio;
        const asesorias = document
            .getElementById("asesorias")
            .offsetHeight + nosotros;
        const ayuda = document
            .getElementById("ayuda")
            .offsetHeight + asesorias;
        setNavOffset({
            inicio: inicio - 1,
            nosotros: nosotros - 1,
            asesorias: asesorias - 1,
            ayuda: ayuda - 1
        })
    }

    useEffect(() => {
        sectionOffset()
    })

    return (
        <div
            className="menu__medium fixed"
            style={{
            width: !props.status
                ? "0px"
                : "350px",
            opacity: !props.status
                ? "0"
                : "1"
        }}>
            <div className="menu__right__container">
                <div className="menu__md__container questrial__font">
                    <nav className="menu__md">
                        <ul >
                            <li>
                                <a
                                    className
                                    ={window.scrollY < navOffset.inicio
                                    ? "active__md__link"
                                    : ""}
                                    href="#inicio">Inicio</a>
                            </li>
                            <li>
                                <a
                                    className
                                    ={window.scrollY >= navOffset.inicio && window.scrollY < navOffset.nosotros
                                    ? "active__md__link"
                                    : ""}
                                    href="#nosotros">Nosotros</a>
                            </li>
                            <li>
                                <a
                                    className
                                    ={window.scrollY >= navOffset.nosotros && window.scrollY < navOffset.asesorias
                                    ? "active__md__link"
                                    : ""}
                                    href="#asesorias">Asesorías</a>
                            </li>
                            <li>
                                <a
                                    a
                                    className
                                    ={window.scrollY >= navOffset.asesorias && window.scrollY < navOffset.ayuda
                                    ? "active__md__link"
                                    : ""}
                                    href="#ayuda">Ayuda</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="menu__right__btn__container">
                    <a className="menu__right__btn questrial__font" href="">Diagnóstico</a>
                </div>
            </div>
        </div>
    )
}