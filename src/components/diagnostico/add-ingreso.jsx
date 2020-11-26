import React, {useState, useEffect} from 'react';
import InOutAdder from './in-out-adder';
import DeudaAdder from './deuda-adder';
import PropiedadAdder from './propiedad-adder';
// import firebase from "firebase/app";

export default function AddIngreso(props) {

    const [ingresos,
        setIngresos] = useState([]);
    const [egresos,
        setEgresos] = useState([]);
    const [deudas,
        setDeudas] = useState([]);
    const [propiedades,
        setPropiedades] = useState([]);
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
    const [perTypeDeudas,
        setPerTypeDeudas] = useState({
        hipotecario: {
            len: 0,
            total: 0
        },
        libre: {
            len: 0,
            total: 0
        },
        diario: {
            len: 0,
            total: 0
        }
    });
    const [perTypePropiedades,
        setPerTypePropiedades] = useState({
        inmueble: {
            len: 0,
            total: 0
        },
        vehiculo: {
            len: 0,
            total: 0
        },
        otro: {
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

    const [hipotecarioTotal,
        setHipotecarioTotal] = React.useState([]);
    const [libreTotal,
        setLibreTotal] = React.useState([]);
    const [diarioTotal,
        setDiarioTotal] = React.useState([]);

    const [inmuebleTotal,
        setInmuebleTotal] = React.useState([]);
    const [vehiculoTotal,
        setVehiculoTotal] = React.useState([]);
    const [otroTotal,
        setOtroTotal] = React.useState([]);

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
                    honoPrice = parseInt(ingresos[i].price);
                    totalHonorario.push({desc: ingresos[i].desc, price: ingresos[i].price});
                    break;
                case "Salario":
                    salaCount++;
                    salaPrice = parseInt(ingresos[i].price);
                    totalSalario.push({desc: ingresos[i].desc, price: ingresos[i].price});
                    break;
                case "Efectivo":
                    efeCount++;
                    efePrice = parseInt(ingresos[i].price);
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
                    vitaPrice = parseInt(egresos[i].price);
                    totalVitales.push({desc: egresos[i].desc, price: egresos[i].price});
                    break;
                case "Financieros":
                    finanCount++;
                    finanPrice = parseInt(egresos[i].price);
                    totalFinancieros.push({desc: egresos[i].desc, price: egresos[i].price});
                    break;
                case "Hormiga":
                    hormiCount++;
                    hormiPrice = parseInt(egresos[i].price);
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

    const newDeudas = (type) => {
        const type_ = type;
        const price_ = document
            .getElementById("priceDeuda")
            .value;
        const desc_ = document
            .getElementById("descDeuda")
            .value;
        setDeudas([
            ...deudas, {
                desc: desc_,
                type: type_,
                price: price_
            }
        ])
    };

    useEffect(() => {
        props.getDeudas(deudas)
        typeCounterDeudas()
    }, [deudas])

    const typeCounterDeudas = () => {
        let hipoCount = 0;
        let hipoPrice = 0;
        let libreCount = 0;
        let librePrice = 0;
        let diarioCount = 0;
        let diarioPrice = 0;
        let totalHipotecario = [];
        let totalLibre = [];
        let totalDiario = [];
        for (let i = 0; i < deudas.length; i++) {
            switch (deudas[i].type) {
                case "Hipotecario":
                    hipoCount++;
                    hipoPrice = parseInt(deudas[i].price);
                    totalHipotecario.push({desc: deudas[i].desc, price: deudas[i].price});
                    break;
                case "Libre":
                    libreCount++;
                    librePrice = parseInt(deudas[i].price);
                    totalLibre.push({desc: deudas[i].desc, price: deudas[i].price});
                    break;
                case "Diario":
                    diarioCount++;
                    diarioPrice = parseInt(deudas[i].price);
                    totalDiario.push({desc: deudas[i].desc, price: deudas[i].price});
                    break;
            }
        }
        setPerTypeDeudas({
            hipotecario: {
                len: hipoCount,
                total: hipoPrice
            },
            libre: {
                len: libreCount,
                total: librePrice
            },
            diario: {
                len: diarioCount,
                total: diarioPrice
            }
        })
        setHipotecarioTotal(totalHipotecario);
        setLibreTotal(totalLibre);
        setDiarioTotal(totalDiario);
    };

    const newPropiedades = (type) => {
        const type_ = type;
        const price_ = document
            .getElementById("pricePropiedad")
            .value;
        const desc_ = document
            .getElementById("descPropiedad")
            .value;
        setPropiedades([
            ...propiedades, {
                desc: desc_,
                type: type_,
                price: price_
            }
        ])
    };

    useEffect(() => {
        props.getPropiedades(propiedades)
        typeCounterPropiedades()
    }, [propiedades])

    const typeCounterPropiedades = () => {
        let inmuCount = 0;
        let inmuPrice = 0;
        let vehiCount = 0;
        let vehiPrice = 0;
        let otroCount = 0;
        let otroPrice = 0;
        let totalInmueble = [];
        let totalVehiculo = [];
        let totalOtro = [];
        for (let i = 0; i < propiedades.length; i++) {
            switch (propiedades[i].type) {
                case "Inmueble":
                    inmuCount++;
                    inmuPrice = parseInt(propiedades[i].price);
                    totalInmueble.push({desc: propiedades[i].desc, price: propiedades[i].price});
                    break;
                case "Vehiculo":
                    vehiCount++;
                    vehiPrice = parseInt(propiedades[i].price);
                    totalVehiculo.push({desc: propiedades[i].desc, price: propiedades[i].price});
                    break;
                case "Otro":
                    otroCount++;
                    otroPrice = parseInt(propiedades[i].price);
                    totalOtro.push({desc: propiedades[i].desc, price: propiedades[i].price});
                    break;
            }
        }
        setPerTypePropiedades({
            inmueble: {
                len: inmuCount,
                total: inmuPrice
            },
            vehiculo: {
                len: vehiCount,
                total: vehiPrice
            },
            otro: {
                len: otroCount,
                total: otroPrice
            }
        })
        setInmuebleTotal(totalInmueble);
        setVehiculoTotal(totalVehiculo);
        setOtroTotal(totalOtro);
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
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">Salario
                                </div>
}
                            {perTypeIngresos.honorario.total > 0
                                ? <div className="type__card card__active text-center">Honorario
                                        <br></br>
                                        ${perTypeIngresos.honorario.total}
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">Honorario
                                </div>
}
                            {perTypeIngresos.efectivo.total > 0
                                ? <div className="type__card card__active text-center">Efectivo
                                        <br></br>
                                        ${perTypeIngresos.efectivo.total}
                                        <br/> {props.divisa}
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
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">Vitales
                                </div>
}
                            {perTypeEgresos.financieros.total > 0
                                ? <div className="type__card card__active text-center">Financieros
                                        <br></br>
                                        ${perTypeEgresos.financieros.total}
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">Financieros
                                </div>
}
                            {perTypeEgresos.hormiga.total > 0
                                ? <div className="type__card card__active text-center">Hormiga
                                        <br></br>
                                        ${perTypeEgresos.hormiga.total}
                                        <br/> {props.divisa}
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
            </div>
        )
    }

    const deudaChart = () => {
        return (
            <div className="form__ingresos relative">
                <div id="form__egresos" className="">
                    <div className="form_ingresos__container">
                        <div className="type__card__container">
                            {perTypeDeudas.hipotecario.total > 0
                                ? <div className="type__card card__active text-center">Hipotecario
                                        <br></br>
                                        ${perTypeDeudas.hipotecario.total}
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">Hipotecario
                                </div>
}
                            {perTypeDeudas.libre.total > 0
                                ? <div className="type__card card__active text-center">Libre inversión
                                        <br></br>
                                        Tarjeta de crédito
                                        <br></br>
                                        ${perTypeDeudas.libre.total}
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">Libre inversión
                                    <br></br>
                                    Tarjeta de crédito
                                </div>
}
                            {perTypeDeudas.diario.total > 0
                                ? <div className="type__card card__active text-center">De pago diario
                                        <br></br>
                                        ${perTypeDeudas.diario.total}
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">De pago diario
                                </div>
}
                        </div>
                    </div>
                </div>
                <div className="add__btn">
                    <DeudaAdder newDeuda={newDeudas} inOut={"deuda"}/>
                </div>
            </div>
        )
    }

    const propiedadChart = () => {
        return (
            <div className="form__ingresos relative">
                <div id="form__egresos" className="">
                    <div className="form_ingresos__container">
                        <div className="type__card__container">
                            {perTypePropiedades.inmueble.total > 0
                                ? <div className="type__card card__active text-center">Inmueble
                                        <br></br>
                                        ${perTypePropiedades.inmueble.total}
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">Inmueble
                                </div>
}
                            {perTypePropiedades.vehiculo.total > 0
                                ? <div className="type__card card__active text-center">Vehículo
                                        <br></br>
                                        ${perTypePropiedades.vehiculo.total}
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">Vehículo
                                </div>
}
                            {perTypePropiedades.otro.total > 0
                                ? <div className="type__card card__active text-center">Otro
                                        <br></br>
                                        ${perTypePropiedades.otro.total}
                                        <br/> {props.divisa}
                                    </div>
                                : <div className="type__card card__inactive">Otro
                                </div>
}
                        </div>
                    </div>
                </div>
                <div className="add__btn">
                    <PropiedadAdder newPropiedad={newPropiedades} inOut={"propiedad"}/>
                </div>
            </div>
        )
    }

    switch (props.category) {
        case 0:
            return (ingresoChart());
        case 1:
            return (egresoChart());
        case 2:
            return (deudaChart());
        case 3:
            return (propiedadChart());
    }
}