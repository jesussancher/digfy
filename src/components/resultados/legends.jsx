import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px'
    },
    secondaryTail: {
        border: 'solid 1px #69247f',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    container: {
        width: '200%'
    },
    icon: {
        color: '#69247f'
    },
    lineDot: {
        backgroundColor: '#69247f'
    },
    greenBg: {
        backgroundColor: ' #1cd587',
        padding: '6px 16px',
        cursor: 'pointer'
    },
    pinkBg: {
        backgroundColor: 'salmon',
        padding: '6px 16px',
        cursor: 'pointer'
    },
    redBg: {
        backgroundColor: ' #C70039 ',
        padding: '6px 16px',
        cursor: 'pointer'
    },
    yellowBg: {
        backgroundColor: '#FFC300',
        padding: '6px 16px',
        cursor: 'pointer'
    },
    orangeBg: {
        backgroundColor: ' #FF5733',
        padding: '6px 16px',
        cursor: 'pointer'
    },
    whiteColor: {
        color: 'white'
    },
    darkColor: {
        color: '#4e4e4e'
    }
}));

export default function Legends(props) {
    // const data = {     confirmation: true,     name: 'Jesús',     email:
    // 'j@a.com',     save: '19',     ingresos: [         {             desc: '',
    //          type: 'Salario',             price: '1000'         }     ],
    // egresos: [         {             desc: '',             type: 'Financieros',
    //           price: '100'         }     ],     deudas: [         {
    // desc: '',             type: 'Diario',             price: '61'         }, {
    //          desc: '',             type: 'Hipotecario',             price: '30'
    //       }     ],     propiedades: [         {             desc: '',
    // type: 'Vehiculo',             price: '12012000'         }     ] }
    const [hover,
        setHover] = React.useState("");

    const {data} = props
    const calcFlujo = () => {
        const ingresos = data.ingresos;
        const egresos = data.egresos;
        let totalIngresos = 0;
        let totalEgresos = 0;
        for (let i = 0; i < ingresos.length; i++) {
            totalIngresos += parseInt(ingresos[i].price);
        }
        for (let u = 0; u < egresos.length; u++) {
            totalEgresos += parseInt(egresos[u].price);
        }
        const flujoEfectivo = totalIngresos - totalEgresos
        return flujoEfectivo
    }

    const calcNivel = () => {
        const ingresos = data.ingresos;
        const deudas = data.deudas;
        let totalIngresos = 0;
        let totalDeudas = 0;
        for (let i = 0; i < ingresos.length; i++) {
            totalIngresos += parseInt(ingresos[i].price);
        }
        for (let u = 0; u < deudas.length; u++) {
            totalDeudas += parseInt(deudas[u].price);
        }
        const nivelEndeudamiento = totalDeudas / totalIngresos
        return (nivelEndeudamiento * 100).toFixed(2)
    }

    const calcConsumo = () => {
        const deudas = data.deudas;
        const ingresos = data.ingresos;
        let totalIngresos = 0;
        let totalDeudas = 0;
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
        const deudasConsumo = totalDeudas / totalIngresos
        return (deudasConsumo * 100).toFixed(2)
    }
    const classes = useStyles();

    const getElevation = (e) => {
        switch (e.target.title) {
            case "flujo":
                setHover("flujo");
                break;
            case "nivel":
                setHover("nivel");
                break;
            case "consumo":
                setHover("consumo");
                break;
            case "ahorro":
                setHover("ahorro");
                break;
        }
    }
    const deleteElevation = (e) => {
        setHover("")
    }
    return (
        <Timeline className={classes.container} align="right">
            <TimelineItem>
                <TimelineContent >
                    <Paper
                        title="flujo"
                        className={calcFlujo() > 0
                        ? classes.greenBg
                        : calcFlujo() === 0
                            ? classes.yellowBg
                            : classes.pinkBg}
                        onMouseEnter={getElevation}
                        onMouseLeave={deleteElevation}
                        elevation={hover === "flujo"
                        ? 6
                        : 0}>
                        <Typography variant="h6" component="h1" className={classes.whiteColor}>
                            Flujo de Efectivo
                        </Typography>
                        <Typography className={classes.whiteColor}>{calcFlujo()} {props.divisa}</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent>
                    <Paper
                        title="nivel"
                        className={calcNivel() <= 30
                        ? classes.greenBg
                        : calcNivel() <= 40
                            ? classes.yellowBg
                            : calcNivel() <= 60
                                ? classes.pinkBg
                                : classes.redBg}
                        onMouseEnter={getElevation}
                        onMouseLeave={deleteElevation}
                        elevation={hover === "nivel"
                        ? 6
                        : 0}>
                        <Typography className={classes.whiteColor} variant="h6" component="h1">
                            Nivel de Endeudamiento
                        </Typography>
                        <Typography className={classes.whiteColor}>{calcNivel()}%</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent>
                    <Paper
                        title="ahorro"
                        className={data.save <= 15
                        ? classes.yellowBg
                        : classes.greenBg}
                        onMouseEnter={getElevation}
                        onMouseLeave={deleteElevation}
                        elevation={hover === "ahorro"
                        ? 6
                        : 0}>
                        <Typography className={classes.whiteColor} variant="h6" component="h1">
                            Capacidad de ahorro
                        </Typography>
                        <Typography className={classes.whiteColor}>{data.save}%</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent>
                    <Paper
                        title="consumo"
                        className={calcConsumo() <= 15
                        ? classes.greenBg
                        : classes.orangeBg}
                        onMouseEnter={getElevation}
                        onMouseLeave={deleteElevation}
                        elevation={hover === "consumo"
                        ? 6
                        : 0}>
                        <Typography className={classes.whiteColor} variant="h6" component="h1">
                            Deudas de consumo
                        </Typography>
                        <Typography className={classes.whiteColor}>{calcConsumo()}%</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}