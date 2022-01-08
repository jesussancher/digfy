import React, {useEffect} from 'react';
import Chart from 'chart.js';
import $ from 'jquery';


export default function GraphicsFlujo(props) {
    const {data} = props;
    let {graph} = props;

    const getIngEg = () => {
        let totalIngresos = 0;
        let totalEgresos = 0;
        if (data.ingresos && data.egresos !== undefined) {
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
        newChartFlujo()
    }, [graph])

    const newChartFlujo = () => {
        new Chart($('#myChartFlujo'), {
            type: 'doughnut',
            data: {
                labels: [
                    'Ingresos: $' + getIngEg()[0] + ' (100%)',
                    'Egresos: $' + getIngEg()[1] + ' (' + (getIngEg()[1]*100/getIngEg()[0]) + '%)'
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
        })
    };

    return (
        <div>
            <h1 className="purple">Flujo de efectivo</h1>
            <canvas id="myChartFlujo" width="350" height="350">Holaaa</canvas>
        </ div>
    )

}