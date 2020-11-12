import React, {useState, useEffect} from 'react';
import MainAdd from './main-add';
import AddSwitch from './add-switch';

export default function Nosotros() {
    const [formTitle,
        setFormTitle] = useState(["Ingresos", "Gastos", "Activos", "Deudas"]);
    const [formChart,
        setFormChart] = useState(0);
    const [ingresos,
        setIngresos] = useState();
    const [egresos,
        setEgresos] = useState();
    const [mainAddStatus,
        setMainAddStatus] = useState(false);
    const getMainAddStatus = (e) => {
        setMainAddStatus(e)
    }
    const getIngresos = (e) => {
        setIngresos(e);
    }
    const getEgresos = (e) => {
        setEgresos(e);
    }

    const setInput = (e) => {
        setFormChart(e)
    }

    const legend = [
        {
            title: 'Mas que números, son tus esfuerzos',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et dicta voluptas, ' +
                    'tenetur dolorem, assumenda exercitationem at sintfugit maiores saepe cum tempori' +
                    'bus labore aliquam sequi laborum pariatur ipsa sit.'
        }, {
            title: 'fdf',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et dicta voluptas, ' +
                    'tenetur dolorem, assumenda exercitationem at sintfugit maiores saepe cum tempori' +
                    'bus labore aliquam sequi laborum pariatur ipsa sit.'
        }
    ]

    return (
        <div className="section__container">
            <h3 className="montserrat__font text-center purple">Entiende tus finanzas</h3>
            <p className="section__description">
                Saber cómo se encuentran tus finanzas y cómo mejorarlas es clave para que puedas
                disfrutar de tus mayores deseos y puedas cumplir tus sueños. ¡Te ayudamos a
                lograrlo!
            </p>
            <div className="section__content__container">
                <div className="form__container">
                    {!mainAddStatus
                        ? <AddSwitch
                                formChart={formChart}
                                getIngresos={getIngresos}
                                getEgresos={getEgresos}/>
                        : <div></div>}
                </div>
                <div className="legend__container">
                    <div className="legend__description">
                        <h5 className="legend__title purple">{legend[formChart].title}</h5>
                        <p className="lenged__text">{legend[formChart].desc}</p>
                    </div>
                    <button onClick={() => setInput(0)}>Ingresos</button>
                    <button onClick={() => setInput(1)}>Egresos</button>
                </div>
            </div>
        </div>
    )
}