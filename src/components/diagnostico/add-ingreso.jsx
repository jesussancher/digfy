import React, {useState, useEffect} from 'react';
import InOutAdder from './in-out-adder';
import ListModal from './list-modal';
// import firebase from "firebase/app";

export default function AddIngreso(props) {

    const [ingresos,
        setIngresos] = useState([]);
    const [egresos,
        setEgresos] = useState([]);
    const [listOpen,
        setListOpen] = useState([false, 'close']);
    const [perTypeIngresos,
        setPerTypeIngresos] = useState({
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
    const [perTypeEgresos,
        setPerTypeEgresos] = useState({
        vitales: {
            len: 0,
            total: 0
        },
        financieros: {
            len: 0,
            total: 0
        },
        hormiga: {
            len: 0,
            total: 0
        }
    });
    const [salarioTotal,
        setSalarioTotal] = React.useState([]);
    const [honorarioTotal,
        setHonorarioTotal] = React.useState([]);
    const [efectivoTotal,
        setEfectivoTotal] = React.useState([]);

    const [vitalesTotal,
        setVitalesTotal] = React.useState([]);
    const [financierosTotal,
        setFinancierosTotal] = React.useState([]);
    const [hormigaTotal,
        setHormigaTotal] = React.useState([]);

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
        typeCounterIngresos()
    }, [ingresos])

    const typeCounterIngresos = () => {
        let honoCount = 0;
        let honoPrice = 0;
        let salaCount = 0;
        let salaPrice = 0;
        let efeCount = 0;
        let efePrice = 0;
        let totalHonorario = [];
        let totalSalario = [];
        let totalEfectivo = [];
        for (let i = 0; i < ingresos.length; i++) {
            switch (ingresos[i].type) {
                case "Honorario":
                    honoCount++;
                    honoPrice += parseInt(ingresos[i].price);
                    totalHonorario.push({desc: ingresos[i].desc, price: ingresos[i].price});
                    break;
                case "Salario":
                    salaCount++;
                    salaPrice += parseInt(ingresos[i].price);
                    totalSalario.push({desc: ingresos[i].desc, price: ingresos[i].price});
                    break;
                case "Efectivo":
                    efeCount++;
                    efePrice += parseInt(ingresos[i].price);
                    totalEfectivo.push({desc: ingresos[i].desc, price: ingresos[i].price});
                    break;
            }
        }
        setPerTypeIngresos({
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
        setHonorarioTotal(totalHonorario);
        setSalarioTotal(totalSalario);
        setEfectivoTotal(totalEfectivo);
    };

    const newEgreso = (type) => {
        const type_ = type;
        const price_ = document
            .getElementById("priceEgreso")
            .value;
        const desc_ = document
            .getElementById("descEgreso")
            .value;
        setEgresos([
            ...egresos, {
                desc: desc_,
                type: type_,
                price: price_
            }
        ])
    };

    useEffect(() => {
        props.getEgresos(egresos)
        typeCounterEgresos()
    }, [egresos]);

    const typeCounterEgresos = () => {
        let vitaCount = 0;
        let vitaPrice = 0;
        let finanCount = 0;
        let finanPrice = 0;
        let hormiCount = 0;
        let hormiPrice = 0;
        let totalVitales = [];
        let totalFinancieros = [];
        let totalHormiga = [];
        for (let i = 0; i < egresos.length; i++) {
            switch (egresos[i].type) {
                case "Vitales":
                    vitaCount++;
                    vitaPrice += parseInt(egresos[i].price);
                    totalVitales.push({desc: egresos[i].desc, price: egresos[i].price});
                    break;
                case "Financieros":
                    finanCount++;
                    finanPrice += parseInt(egresos[i].price);
                    totalFinancieros.push({desc: egresos[i].desc, price: egresos[i].price});
                    break;
                case "Hormiga":
                    hormiCount++;
                    hormiPrice += parseInt(egresos[i].price);
                    totalHormiga.push({desc: egresos[i].desc, price: egresos[i].price});
                    break;
            }
        }
        setPerTypeEgresos({
            vitales: {
                len: vitaCount,
                total: vitaPrice
            },
            financieros: {
                len: finanCount,
                total: finanPrice
            },
            hormiga: {
                len: hormiCount,
                total: hormiPrice
            }
        })
        setVitalesTotal(totalVitales);
        setFinancierosTotal(totalFinancieros);
        setHormigaTotal(totalHormiga);
    };

    const openList = (type) => {
        switch (type) {
            case "Salario":
                setData(salarioTotal);
                break;
            case "Honorario":
                setData(honorarioTotal);
                break;
            case "Efectivo":
                setData(efectivoTotal);
                break;
        }
        setListOpen([true, type])
    }
    const closeList = () => {
        setListOpen([false, 'close'])
    }

    const updateData = (type, data) => {
        switch (type) {
            case "Salario":
                setSalarioTotal(data);
                break;
            case "Honorario":
                setHonorarioTotal(data);
                break;
            case "Efectivo":
                setEfectivoTotal(data);
                break;
        }
        console.log(type)
    };

    const ingresoChart = () => {
        return (
            <div className="form__ingresos relative">
                <div id="form__ingresos" className="">
                    <div className="form_ingresos__container">
                        <div className="type__card__container">
                            {perTypeIngresos.salario.total > 0
                                ? <div className="type__card card__active text-center">Salario
                                        <br></br>
                                        ${perTypeIngresos.salario.total}
                                        <br/>
                                        COP
                                    </div>
                                : <div className="type__card card__inactive">Salario
                                </div>
}
                            {perTypeIngresos.honorario.total > 0
                                ? <div className="type__card card__active text-center">Honorario
                                        <br></br>
                                        ${perTypeIngresos.honorario.total}
                                        <br/>
                                        COP
                                    </div>
                                : <div className="type__card card__inactive">Honorario
                                </div>
}
                            {perTypeIngresos.efectivo.total > 0
                                ? <div className="type__card card__active text-center">Efectivo
                                        <br></br>
                                        ${perTypeIngresos.efectivo.total}
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
                <ListModal
                    open={listOpen}
                    close={closeList}
                    data={data}
                    category={listOpen[1]}
                    update={() => updateData}/>
            </div>
        )
    }

    const egresoChart = () => {
        return (
            <div className="form__ingresos relative">
                <div id="form__egresos" className="">
                    <div className="form_ingresos__container">
                        <div className="type__card__container">
                            {perTypeEgresos.vitales.total > 0
                                ? <div className="type__card card__active text-center">Vitales
                                        <br></br>
                                        ${perTypeEgresos.vitales.total}
                                        <br/>
                                        COP
                                    </div>
                                : <div className="type__card card__inactive">Vitales
                                </div>
}
                            {perTypeEgresos.financieros.total > 0
                                ? <div className="type__card card__active text-center">Financieros
                                        <br></br>
                                        ${perTypeEgresos.financieros.total}
                                        <br/>
                                        COP
                                    </div>
                                : <div className="type__card card__inactive">Financieros
                                </div>
}
                            {perTypeEgresos.hormiga.total > 0
                                ? <div className="type__card card__active text-center">Hormiga
                                        <br></br>
                                        ${perTypeEgresos.hormiga.total}
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
                    <InOutAdder newIngreso={newEgreso} inOut={"egreso"}/>
                </div>
                <ListModal
                    open={listOpen}
                    close={closeList}
                    data={data}
                    category={listOpen[1]}
                    update={() => updateData}/>
            </div>
        )
    }

    switch (props.category) {
        case 0:
            return (ingresoChart());
        case 1:
            return (egresoChart());
    }
}