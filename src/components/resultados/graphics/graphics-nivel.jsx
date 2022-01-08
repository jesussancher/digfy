import React, {useEffect} from 'react';
import Chart from 'chart.js';
import $ from 'jquery';

export default function GraphicsNivel(props) {
    const {data} = props;
    const {graph} = props;

    const getIngAh = () => {
        let totalIngresos = 0;
        let totalAhorros = 0;
        if (data.ingresos && data.save !== undefined) {
            const ingresos = data.ingresos;
            const ahorros = parseInt(data.save);
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
                totalAhorros = totalIngresos * ahorros / 100
            }
        }
        return [totalIngresos, totalAhorros]
    }

    const calcNivel = () => {
        let totalIngresos = 0;
        let totalDeudas = 0;
        if (data.ingresos && data.deudas !== undefined) {
            const ingresos = data.ingresos;
            const deudas = data.deudas;
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
            }
            for (let u = 0; u < deudas.length; u++) {
                totalDeudas += parseInt(deudas[u].price);
            }
        }
        const nivelEndeudamiento = totalDeudas / totalIngresos;
        return (nivelEndeudamiento * 100).toFixed(2)
    }
    useEffect(() => {
        newChartNivel()
    }, [graph])
    const newChartNivel = () => {
        new Chart($('#myChartNivel'), {
            type: 'doughnut',
            data: {
                labels: [
                    'Ingresos: $' + getIngAh()[0] +' (100%)',
                    'Deudas: $' + (getIngAh()[0] * calcNivel() / 100) + ' ('+calcNivel() + '%)'
                ],
                datasets: [
                    {
                        label: "Dinero",
                        backgroundColor: [
                            "#69247f", "#6bc1ce"
                        ],
                        data: [
                            getIngAh()[0],
                            calcNivel() * getIngAh()[0] / 100
                        ]
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
            <h1 className="purple">Nivel de Endeudamiento</h1>
            <canvas id="myChartNivel" width="350" height="350"></canvas>
        </ div>
    );
}