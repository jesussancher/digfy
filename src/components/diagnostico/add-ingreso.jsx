import React, {useState, useEffect} from 'react';
import InOutAdder from './in-out-adder';
import ListModal from './list-modal'
export default function AddIngreso(props) {

    const [ingresos,
        setIngresos] = useState([]);
    const [listOpen,
        setListOpen] = useState(false);
    const [perType,
        setPerType] = useState({
        honorario: {
            len: 0,
            total: 0
        },
        salario: {
            len: 0,
            total: 0
        },
        efectivo: {
            len: 0,
            total: 0
        }
    });

    const newIngreso = (type) => {
        const type_ = type;
        const price_ = document
            .getElementById("priceIngreso")
            .value;
        const desc_ = document
            .getElementById("descIngreso")
            .value;
        setIngresos([
            ...ingresos, {
                desc: desc_,
                type: type_,
                price: price_
            }
        ])
    }
    useEffect(() => {
        props.getIngresos(ingresos)
    }, [ingresos])

    const typeCounter = () => {
        let honoCount = 0;
        let honoPrice = 0;
        let salaCount = 0;
        let salaPrice = 0;
        let efeCount = 0;
        let efePrice = 0;
        for (let i = 0; i < ingresos.length; i++) {
            switch (ingresos[i].type) {
                case "Honorario":
                    honoCount++;
                    honoPrice += parseInt(ingresos[i].price);
                    break;
                case "Salario":
                    salaCount++;
                    salaPrice += parseInt(ingresos[i].price);
                    break;
                case "Efectivo":
                    efeCount++;
                    efePrice += parseInt(ingresos[i].price);
                    break;
            }
        }
        setPerType({
            honorario: {
                len: honoCount,
                total: honoPrice
            },
            salario: {
                len: salaCount,
                total: salaPrice
            },
            efectivo: {
                len: efeCount,
                total: efePrice
            }
        })
    };

    useEffect(() => {
        typeCounter()
    }, [ingresos]);

    const openList = () => {
        setListOpen(true)
    }
    const closeList = () => {
        setListOpen(false)
    }
    return (
        <div className="form__ingresos relative">
            <div id="form__ingresos" className="">
                <div className="form_ingresos__container">
                    <div className="type__card__container">
                        {perType.salario.total > 0
                            ? <div className="type__card card__active text-center" onClick={openList}>Salario
                                    <br></br>
                                    ${perType.salario.total}
                                    <br/>
                                    COP
                                </div>
                            : <div className="type__card card__inactive">Salario
                            </div>
}
                        {perType.honorario.total > 0
                            ? <div className="type__card card__active text-center">Honorario
                                    <br></br>
                                    ${perType.honorario.total}
                                    <br/>
                                    COP
                                </div>
                            : <div className="type__card card__inactive">Honorario
                            </div>
}
                        {perType.efectivo.total > 0
                            ? <div className="type__card card__active text-center">Efectivo
                                    <br></br>
                                    ${perType.efectivo.total}
                                    <br/>
                                    COP
                                </div>
                            : <div className="type__card card__inactive">Efectivo
                            </div>
}
                    </div>
                </div>
            </div>
            <div className="add__btn">
                <InOutAdder newIngreso={newIngreso} inOut={"ingreso"}/>
            </div>
            <ListModal open={listOpen} close={closeList} data={ingresos}/>
        </div>
    )
}