import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
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

    const [hover,
        setHover] = React.useState("");
    const [data,
        setData] = React.useState({});
    React.useEffect(() => {
        setData(props.data)
    }, [props.data])

    const calcFlujo = () => {
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

        const flujoEfectivo = totalIngresos - totalEgresos
        return flujoEfectivo
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

    const calcConsumo = () => {
        let totalIngresos = 0;
        let totalDeudas = 0;
        if (data.ingresos && data.deudas != undefined) {
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
    const classes = useStyles();

    const getGraph = (e) => {
        props.getGraph(e)
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
                        onClick={() => getGraph("flujo")}>
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
                        onClick={() => getGraph("nivel")}>
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
                        onClick={() => getGraph("ahorro")}>
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
                        onClick={() => getGraph("consumo")}>
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