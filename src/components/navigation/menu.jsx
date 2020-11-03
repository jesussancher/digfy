import React from 'react'

export default function Menu(props) {
    return (
        <div className="menu__container row">
            <div className="menu__nav__container questrial__font">
                <nav
                    className={props.y < 70
                    ? "menu__nav"
                    : "menu__nav__70"}>
                    <ul >
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="">Nosotros</a>
                        </li>
                        <li>
                            <a href="">Asesorías</a>
                        </li>
                        <li>
                            <a href="">Ayuda</a>
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