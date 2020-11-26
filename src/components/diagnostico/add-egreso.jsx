import React, {useState, useEffect} from 'react';
import InOutAdder from './in-out-adder';
// import firebase from "firebase/app";

export default function AddEgreso(props) {

    const [egresos,
        setEgresos] = useState([]);
    const [listOpen,
        setListOpen] = useState([false, 'close']);
    const [perType,
        setPerType] = useState({
        financieros: {
            len: 0,
            total: 0
        },
        vitales: {
            len: 0,
            total: 0
        },
        hormigas: {
            len: 0,
            total: 0
        }
    });
    const [vitalesTotal,
        setVitalesTotal] = React.useState([]);
    const [financierosTotal,
        setFinancierosTotal] = React.useState([]);
    const [hormigasTotal,
        setHormigasTotal] = React.useState([]);
    const [data,
        setData] = useState([]);

    const newIngreso = (type) => {
        const type_ = type;
        const price_ = document
            .getElementById("priceIngreso")
            .value;
        const desc_ = document
            .getElementById("descIngreso")
            .value;
        setEgresos([
            ...egresos, {
                desc: desc_,
                type: type_,
                price: price_
            }
        ])
    }
    useEffect(() => {
        props.getEgresos(egresos)
    }, [egresos])

    const typeCounter = () => {
        let honoCount = 0;
        let honoPrice = 0;
        let salaCount = 0;
        let salaPrice = 0;
        let efeCount = 0;
        let efePrice = 0;
        let totalFinancieros = [];
        let totalVitales = [];
        let totalHormigas = [];
        for (let i = 0; i < egresos.length; i++) {
            switch (egresos[i].type) {
                case "Financieros":
                    honoCount++;
                    honoPrice += parseInt(egresos[i].price);
                    totalFinancieros.push({desc: egresos[i].desc, price: egresos[i].price});
                    break;
                case "Vitales":
                    salaCount++;
                    salaPrice += parseInt(egresos[i].price);
                    totalVitales.push({desc: egresos[i].desc, price: egresos[i].price});
                    break;
                case "Hormigas":
                    efeCount++;
                    efePrice += parseInt(egresos[i].price);
                    totalHormigas.push({desc: egresos[i].desc, price: egresos[i].price});
                    break;
            }
        }
        setPerType({
            financieros: {
                len: honoCount,
                total: honoPrice
            },
            vitales: {
                len: salaCount,
                total: salaPrice
            },
            hormigas: {
                len: efeCount,
                total: efePrice
            }
        })
        setFinancierosTotal(totalFinancieros);
        setVitalesTotal(totalVitales);
        setHormigasTotal(totalHormigas);
    };

    useEffect(() => {
        typeCounter()
    }, [egresos]);

    const openList = (type) => {
        switch (type) {
            case "Vitales":
                setData(vitalesTotal);
                break;
            case "Financieros":
                setData(financierosTotal);
                break;
            case "Hormigas":
                setData(hormigasTotal);
                break;
        }
        setListOpen([true, type])
    }
    const closeList = () => {
        setListOpen([false, 'close'])
    }

    const updateData = (type,data) => {
        switch (type) {
            case "Vitales":
                setVitalesTotal(data);
                break;
            case "Financieros":
                setFinancierosTotal(data);
                break;
            case "Hormigas":
                setHormigasTotal(data);
                break;
        }
        console.log(type)
    };

    return (
        <div className="form__ingresos relative">
            <div id="form__ingresos" className="">
                <div className="form_ingresos__container">
                    <div className="type__card__container">
                        {perType.vitales.total > 0
                            ? <div
                                    className="type__card card__active text-center"
                                    // onClick={() => openList("Salario")}
                                    >Vitales
                                    <br></br>
                                    ${perType.vitales.total}
                                    <br/>
                                    COP
                                </div>
                            : <div className="type__card card__inactive">Vitales
                            </div>
}
                        {perType.financieros.total > 0
                            ? <div
                                    className="type__card card__active text-center"
                                    // onClick={() => openList("Honorario")}
                                    >Financieros
                                    <br></br>
                                    ${perType.financieros.total}
                                    <br/>
                                    COP
                                </div>
                            : <div className="type__card card__inactive">Financieros
                            </div>
}
                        {perType.hormigas.total > 0
                            ? <div
                                    className="type__card card__active text-center"
                                    // onClick={() => openList("Efectivo")}
                                    >Hormiga
                                    <br></br>
                                    ${perType.hormigas.total}
                                    <br/>
                                    COP
                                </div>
                            : <div className="type__card card__inactive">Hormiga
                            </div>
}
                    </div>
                </div>
            </div>
            <div className="add__btn">
                <InOutAdder newIngreso={newIngreso} inOut={"ingreso"}/>
            </div>
        </div>
    )
}