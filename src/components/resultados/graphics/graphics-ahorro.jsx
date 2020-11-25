import React, {useState, useCallback, useEffect} from 'react';
import Chart from 'chart.js';
import $ from 'jquery';

export default function GraphicsAhorro(props) {
    const {data} = props;
    let {graph} = props;

    const getIngAh = () => {
        let totalIngresos = 0;
        let totalAhorros = 0;
        if (data.ingresos && data.save != undefined) {
            const ingresos = data.ingresos;
            const ahorros = parseInt(data.save);
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
            }
            totalAhorros = totalIngresos * ahorros / 100
        }
        return [totalIngresos, totalAhorros]
    }

    useEffect(() => {
        newChartAhorro()
    }, [graph])

    const newChartAhorro = () => {
        new Chart($('#myChartAhorro'), {
            type: 'doughnut',
            data: {
                labels: [
                    'Ingresos: $' + getIngAh()[0] + ' (100%)',
                    'Ahorros: $' + getIngAh()[1] + ' (' + data.save + '%)'
                ],
                datasets: [
                    {
                        label: "Dinero",
                        backgroundColor: [
                            "#69247f", "#6bc1ce"
                        ],
                        data: getIngAh()
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
        })
    };

    return (
        <div>
            <h1 className="purple">Capacidad de ahorro</h1>
            <canvas id="myChartAhorro" width="350" height="350">Holaaa</canvas>
        </ div>
    )

}