import React from 'react';

export default function Nosotros() {
    return (
        <div className="section__container">
            <h3 className="montserrat__font text-center purple">Así es Digfy</h3>
            <div className="section__content__container">
                <div className="nosotros__card col__sm__12 col__md__9 row__lg__4">
                    <i className="fas fa-wallet"></i>
                    <h4 className="purple">Finanzas</h4>
                    <p>Cuentas claras con un método práctico, validado y personalizado.</p>
                </div>
                <div className="nosotros__card col__sm__12 col__md__9 row__lg__4">
                    <i className="fas fa-piggy-bank"></i>
                    <h4 className="purple">Personales</h4>
                    <p>Optimiza de manera eficiente la reducción de tus deudas.</p>
                </div>
                <div className="nosotros__card col__sm__12 col__md__9 row__lg__4">
                    <i className="fas fa-comments-dollar"></i>
                    <h4 className="purple">Prácticas</h4>
                    <p>Accede a asesorías dedicadas con un equipo de especialistas.</p>
                </div>
            </div>
            <div className="know__more__btn">
                <a className="banner__btn btn montserrat__font" href="https://finanzaspersonalespracticas.com/" target="_blank">Conoce más</a>
            </div>
        </div>
    )
}