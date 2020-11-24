import React, {useState} from 'react';
import Chart from 'chart.js';
import $ from 'jquery';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 300
    }
});
function valuetext(value) {
    return `$${value}`;
}

export default function Graphics(props) {
    const classes = useStyles();
    const data = {
        confirmation: true,
        name: 'Jesús',
        email: 'j@a.com',
        save: 25,
        ingresos: [
            {
                desc: '',
                type: 'Salario',
                price: '1000'
            }
        ],
        egresos: [
            {
                desc: '',
                type: 'Financieros',
                price: '100'
            }
        ],
        deudas: [
            {
                desc: '',
                type: 'Diario',
                price: '200'
            }, {
                desc: '',
                type: 'Hipotecario',
                price: '300'
            }
        ],
        propiedades: [
            {
                desc: '',
                type: 'Vehiculo',
                price: '12012000'
            }
        ]
    }

    // const [ingEg,     setIngEg] = useState([])

    const getIngEg = () => {
        let totalIngresos = 0;
        let totalEgresos = 0;
        if (data.ingresos && data.egresos != undefined) {
            const ingresos = data.ingresos;
            const egresos = data.egresos;
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
            }
            for (let u = 0; u < egresos.length; u++) {
                totalEgresos += parseInt(egresos[u].price);
            }
        }

        return [totalIngresos, totalEgresos]
    }

    const getIngAh = () => {
        let totalIngresos = 0;
        let totalAhorros = 0;
        if (data.ingresos && data.save != undefined) {
            const ingresos = data.ingresos;
            const ahorros = parseInt(data.save);
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
                totalAhorros = totalIngresos * ahorros / 100
            }
        }
        return [
            totalIngresos - totalAhorros,
            totalAhorros
        ]
    }

    const calcNivel = () => {
        let totalIngresos = 0;
        let totalDeudas = 0;
        if (data.ingresos && data.deudas != undefined) {
            const ingresos = data.ingresos;
            const deudas = data.deudas;
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
            }
            for (let u = 0; u < deudas.length; u++) {
                totalDeudas += parseInt(deudas[u].price);
            }
        }
        const nivelEndeudamiento = totalDeudas / totalIngresos
        return (nivelEndeudamiento * 100).toFixed(2)
    }

    const PrettoSlider = withStyles({
        root: {
            color: calcNivel() <= 30
                ? '#1cd587'
                : calcNivel() <= 40
                    ? '#FFC300'
                    : calcNivel() <= 60
                        ? 'salmon'
                        : '#C70039',
            width: 200,
            height: 8
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
                boxShadow: 'inherit'
            }
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)'
        },
        track: {
            height: 28,
            borderRadius: 4
        },
        rail: {
            height: 28,
            borderRadius: 4
        }
    })(Slider);

    const marks = [
        {
            value: 0,
            label: '0'
        }, {
            value: 100,
            label: '100%'
        }
    ];
    const ctx = $('#myChart');

    var myChart = new Chart(ctx, {
        type: props.graph === "flujo"
            ? 'pie'
            : 'doughnut',
        data: {
            labels: props.graph === "flujo"
                ? ["Ingresos", "Egresos"]
                : [
                    "Ingresos", "Ahorros"
                ],
            datasets: [
                {
                    label: "Dinero",
                    backgroundColor: [
                        "#69247f", "#6bc1ce"
                    ],
                    data: props.graph === "flujo"
                        ? getIngEg()
                        : getIngAh()
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: props.graph === "flujo"
                    ? 'Flujo de efectivo'
                    : 'Capacidad de ahorro'
            }
        }
    });

    switch (props.graph) {
        case "flujo":
            return (
                <div>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>
            );
        case "nivel":
            return (
                <React.Fragment>
                    {/* <Typography id="vertical-slider" gutterBottom>
                        Temperature
                    </Typography> */}
                    {/* <div className={classes.root}>
                        <Slider
                            orientation="vertical"
                            defaultValue={calcNivel()}
                            aria-labelledby="vertical-slider"
                            getAriaValueText={valuetext}
                            marks={marks}/>
                    </div> */}
                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={calcNivel()}/>
                </React.Fragment>
            );

        case "ahorro":
            return (
                <div>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>
            );

        case "consumo":
            return (
                <div>
                    <canvas id="myCha" width="400" height="400"></canvas>
                </div>
            );
    }

}
