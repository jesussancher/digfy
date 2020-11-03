import React, {useState} from 'react'

export default function MenuMD(props) {
    const [status,
        setStatus] = useState(false)

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
                        <ul>
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
                <div className="menu__right__btn__container">
                    <a className="menu__right__btn questrial__font" href="">Diagnóstico</a>
                </div>
            </div>
        </div>
    )
}