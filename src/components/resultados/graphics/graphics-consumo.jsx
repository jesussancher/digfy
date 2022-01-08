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

    const calcConsumo = () => {
        let totalIngresos = 0;
        let totalDeudas = 0;
        if (data.ingresos && data.deudas !== undefined) {
            const deudas = data.deudas;
            const ingresos = data.ingresos;
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
            }
            for (let u = 0; u < deudas.length; u++) {
                if (deudas[u].type === "Libre") {
                    totalDeudas += parseInt(deudas[u].price);
                } else if (deudas[u].type === "Diario") {
                    totalDeudas += parseInt(deudas[u].price);
                }
            }
        }
        const deudasConsumo = totalDeudas / totalIngresos
        return (deudasConsumo * 100).toFixed(2)
    }


    useEffect(() => {
        newChartConsumo()
    }, [graph])
    const newChartConsumo = () => {
        new Chart($('#myChartConsumo'), {
            type: 'doughnut',
            data: {
                labels: [
                    'Ingresos: $' + getIngAh()[0] +' (100%)',
                    'Deudas: $' + (getIngAh()[0] * calcConsumo() / 100) + ' ('+calcConsumo() + '%)'
                ],
                datasets: [
                    {
                        label: "Dinero",
                        backgroundColor: [
                            "#69247f", "#6bc1ce"
                        ],
                        data: [
                            getIngAh()[0],
                            calcConsumo() * getIngAh()[0] / 100
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
            <h1 className="purple">Deudas de consumo</h1>
            <canvas id="myChartConsumo" width="350" height="350"></canvas>
        </ div>
    );
}