import React, {useState} from 'react';
import MainAdd from './main-add';
import AddSwitch from './add-switch';

export default function Nosotros() {
    const [formTitle,
        setFormTitle] = useState(["Ingresos", "Gastos", "Activos", "Deudas"]);
    const [formChart,
        setFormChart] = useState(0);
    const [ingresos, setIngresos] = useState();
    const [mainAddStatus,
        setMainAddStatus] = useState(true);
    const getMainAddStatus = (e) => {
        setMainAddStatus(e)
    }
    const getIngresos = (e) => {
        setIngresos(e)
    }

    return (
        <div className="section__container">
            <h3 className="montserrat__font purple">Entiende tus finanzas</h3>
            <p className="section__description">
                Saber cómo se encuentran tus finanzas y cómo mejorarlas es clave para que puedas
                disfrutar de tus mayores deseos y puedas cumplir tus sueños. ¡Te ayudamos a
                lograrlo!
            </p>
            <div className="section__content__container">
                <div className="form__container nav__shadow">
                    <MainAdd
                        title={formTitle[formChart]}
                        status={mainAddStatus}
                        getStatus={getMainAddStatus}/> {!mainAddStatus
                        ? <AddSwitch formChart={formChart} getIngresos={getIngresos}/>
                        : <div></div>}
                </div>
                <div className="legend__container">Explain</div>
            </div>
        </div>
    )
}