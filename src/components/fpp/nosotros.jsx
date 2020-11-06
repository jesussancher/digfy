import React from 'react';

export default function Nosotros() {
    return (
        <div className="section__container">
            <h3 className="montserrat__font purple">Así es Digfy</h3>
            <div className="section__content__container">
                <div className="nosotros__card col__sm__12 col__md__9 row__lg__4">
                    <i class="fas fa-wallet"></i>
                    <h3 className="purple">Finanzas</h3>
                    <p>Cuentas en verde con un método dinámico y personalizado.</p>
                </div>
                <div className="nosotros__card col__sm__12 col__md__9 row__lg__4">
                    <i class="fas fa-piggy-bank"></i>
                    <h3 className="purple">Personales</h3>
                    <p>Optimiza de manera eficiente tu bioma financiero.</p>
                </div>
                <div className="nosotros__card col__sm__12 col__md__9 row__lg__4">
                    <i class="fas fa-comments-dollar"></i>
                    <h3 className="purple">Prácticas</h3>
                    <p>Accede a asesorías dedicadas con un equipo de especialistas.</p>
                </div>
            </div>
            <div className="know__more__btn">
                <a className="banner__btn btn montserrat__font" href="https://finanzaspersonalespracticas.com/" target="_blank">Conoce más</a>
            </div>
        </div>
    )
}