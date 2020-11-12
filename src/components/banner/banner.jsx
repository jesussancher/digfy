import React from 'react'

export default function Banner() {
    return (
        <div className="banner__container">
            <div className="banner__info">
                <p className="banner__tag montserrat__font">#MejoresFinanzas</p>
                <p className="banner__title montserrat__font">Aprende a dejar tus deudas en $0</p>
                <a className="banner__btn btn montserrat__font" href="#diagnostico">¿Cómo están mis finanzas?</a>
            </div>
            <div className="banner__img">
                <img src="https://blush.design/api/download?shareUri=DkjAQu_Tv&w=650&h=650&fm=png" alt="Banner"/>
            </div>
        </div>
    )
}