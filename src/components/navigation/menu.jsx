import React, {useEffect, useState} from 'react'

export default function Menu(props) {

    const [navOffset,
        setNavOffset] = useState({inicio: '0', nosotros: '100', asesorias: '2000', ayuda: '3000'})

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
        setNavOffset({inicio: inicio-1, nosotros: nosotros-1, asesorias: asesorias-1, ayuda: ayuda-1})
    }

    useEffect(() => {
        sectionOffset()
    })

    return (
        <div className="menu__container row">
            <div className="menu__nav__container questrial__font">
                <nav
                    className={window.scrollY < 70
                    ? "menu__nav"
                    : "menu__nav__70"}>
                    <ul >
                        <li>
                            <a
                                className
                                ={window.scrollY < navOffset.inicio
                                ? "active__link"
                                : ""}
                                href="#inicio">Inicio</a>
                        </li>
                        <li>
                            <a
                                className
                                ={window.scrollY >= navOffset.inicio && window.scrollY < navOffset.nosotros
                                ? "active__link"
                                : ""}
                                href="#nosotros">Nosotros</a>
                        </li>
                        <li>
                            <a className
                                ={window.scrollY >= navOffset.nosotros && window.scrollY < navOffset.asesorias
                                ? "active__link"
                                : ""}
                                href="#asesorias">Asesorías</a>
                        </li>
                        <li>
                            <a a className
                                ={window.scrollY >= navOffset.asesorias-1 && window.scrollY < navOffset.ayuda
                                ? "active__link"
                                : ""}
                                href="#ayuda">Ayuda</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="menu__btn__container">
                <a className="menu__btn btn questrial__font" href="">Diagnóstico</a>
            </div>
        </div>
    )
}