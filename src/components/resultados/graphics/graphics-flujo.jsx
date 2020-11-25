import React, {useState, useCallback, useEffect} from 'react';
import Chart from 'chart.js';
import $ from 'jquery';
import {makeStyles, withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 300
    }
});

export default function GraphicsFlujo(props) {
    const classes = useStyles();
    const {data} = props;
    let {graph} = props;

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

    useEffect(() => {
        getIngEg()
    }, [data])

    const ctxFlujo = $('#myChartFlujo')
    new Chart(ctxFlujo, {
        type: 'doughnut',
        data: {
            labels: [
                'Ingresos: $' + getIngEg()[0],
                'Egresos: $' + getIngEg()[1]
            ],
            datasets: [
                {
                    label: "Dinero",
                    backgroundColor: [
                        "#69247f", "#6bc1ce"
                    ],
                    data: getIngEg()
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            hover: {
                mode: null
            }
        }
    });
    switch (graph) {
        case 'flujo':
            return (
                <div>
                    <h1 className="purple">Flujo de efectivo</h1>
                    <canvas id="myChartFlujo" width="350" height="350">Holaaa</canvas>
                </ div>
            );
        case 'nivel':
            return (
                <div>
                    <h1 className="purple">Nivel de endeudamiento</h1>
                    <canvas id="myChartFlujo" width="350" height="350">Holaaa</canvas>
                </ div>
            );
        default:
            return (
                <div>
                    <h1 className="purple">Selecciona lo que quieras ampliar</h1>
                    <p className="purple">y mira la magia</p>
                </ div>
            );
    }

}