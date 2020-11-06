import React, {useState, useEffect} from 'react';
import InOutAdder from './in-out-adder';

export default function AddIngreso(props) {

    const [ingresos,
        setIngresos] = useState([])

    const newIngreso = (type) => {
        const type_ = type;
        const price_ = document
            .getElementById("priceIngreso")
            .value;
        setIngresos([
            ...ingresos, {
                // desc: desc_,
                type: type_,
                price: price_
            }
        ])
        // console.log(desc_, type_, price_)
    }
    useEffect(() => {
        props.getIngresos(ingresos)
        console.log(ingresos.desc, ingresos.type, ingresos.price)
    }, [ingresos])

    return (
        <div className="form_ingresos__container">
            <div id="form__ingresos" className="">
                {ingresos.length > 0
                    ? ingresos.map(ingreso => {
                        return (
                            <div className="inout__card">
                                <p>{ingreso.type}</p>
                                <p>{ingreso.price}</p>
                            </div>
                        )
                    })
                    : <p className="text-center">Aún no tienes ingresos</p>}
            </div>
            <div className="add__btn">
                <InOutAdder newIngreso={newIngreso} inOut={"ingreso"}/>
            </div>
        </div>
    )
}