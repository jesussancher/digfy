import React, {useState} from 'react'

export default function MenuSM(props) {
    const [status,
        setStatus] = useState(false)

    const getStatus = (e) => {
        setStatus(e)
    }
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
                    <a className="menu__center__btn questrial__font" href="">Diagnóstico</a>
                </div>
            </div>
        </div>
    )
}