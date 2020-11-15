import React, {useState, useEffect} from 'react';
import MainAdd from './main-add';
import AddSwitch from './add-switch';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import IngresosIcon from '../../assets/images/ingresosIcon.jsx';
import EgresosIcon from '../../assets/images/egresosIcon.jsx';
import DeudasIcon from '../../assets/images/deudasIcon.jsx';
import PropiedadesIcon from '../../assets/images/propiedadesIcon.jsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StepConnector from '@material-ui/core/StepConnector';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';

export default function Nosotros() {
    const [formTitle,
        setFormTitle] = useState(["Ingresos", "Gastos", "Activos", "Deudas"]);
    const [formChart,
        setFormChart] = useState(0);
    const [ingresos,
        setIngresos] = useState();
    const [egresos,
        setEgresos] = useState();
    const [deudas,
        setDeudas] = useState();
    const [propiedades,
        setPropiedades] = useState();
    const [state,
        setState] = useState(false);
    const [mainAddStatus,
        setMainAddStatus] = useState(false);
    const getMainAddStatus = (e) => {
        setMainAddStatus(e)
    }
    const getIngresos = (e) => {
        setIngresos(e);
    }
    const getEgresos = (e) => {
        setEgresos(e);
    }
    const getDeudas = (e) => {
        setDeudas(e);
    }
    const getPropiedades = (e) => {
        setPropiedades(e);
    }

    const setInput = (e) => {
        setFormChart(e)
    }

    const legend = [
        {
            title: 'Mas que números, son resultados de tus esfuerzos <3',
            desc: 'Tu sueldo, o tus ingresos como independiente, cada centavo cuenta para tus finan' +
                    'zas.'
        }, {
            title: 'Todo lo que salga de tu bolsillo que no volverá :/',
            desc: 'El mercado, la cuota del carro, hasta las cenas en tu restaurente favorito cuent' +
                    'an.'
        }, {
            title: 'Alguna vez fueron metas, ahora te cobran intereses',
            desc: 'La hipoteca de tu casa, o ese préstamo para viajar a la playa, a eso nos referim' +
                    'os.'
        }, {
            title: 'Es todo tuyo, trabajaste por ello y lo conseguiste.',
            desc: 'El apartamento, el carro, hasta las consolas de videojuegos tienen cabida aquí.'
        }
    ]
    const [btnHover,
        setBtnHover] = useState(0);
    const buttonHover = (e) => {
        setBtnHover(e)
    }
    const [divisa,
        setDivisa] = useState('COP');
    const changeDivisa = () => {
        if (state) {
            setDivisa('USD')
        } else {
            setDivisa('COP')
        }
    }
    useEffect(() => {
        changeDivisa()
    }, [state])

    const handleChangeDivisa = (event) => {
        setState(event.target.checked);
    };
    const PurpleSwitch = withStyles({
        switchBase: {
            color: '#6bc1ce',
            '&$checked': {
                color: '#69247f'
            },
            '&$checked + $track': {
                backgroundColor: '#69247f'
            }
        },
        checked: {},
        track: {
            backgroundColor: '#6bc1ce'
        }
    })(Switch);
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '75%',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        backButton: {
            marginRight: theme.spacing()
        },
        step: {
            backgroundColor: '#69247F'
        },
        instructions: {
            marginTop: theme.spacing(),
            marginBottom: theme.spacing(1)
        },
        addButton: {
            marginLeft: '15px',
            border: 'solid 1px #69247f',
            color: '#69247f',
            transition: 'all 300ms ease',
            '&:hover': {
                color: '#fff',
                backgroundColor: '#69247f'
            }
        },
        backButton: {
            color: '#69247f',
            transition: 'all 300ms ease'
        }
    }));
    const QontoConnector = withStyles({
        alternativeLabel: {
            top: 10,
            left: 'calc(-50% + 16px)',
            right: 'calc(50% + 16px)'
        },
        active: {
            '& $line': {
                borderColor: '#69247F'
            }
        },
        completed: {
            '& $line': {
                borderColor: '#69247F'
            }
        },
        line: {
            borderColor: '#eaeaf0',
            borderTopWidth: 3,
            borderRadius: 1
        }
    })(StepConnector);

    const useQontoStepIconStyles = makeStyles({
        root: {
            color: '#eaeaf0',
            display: 'flex',
            height: 22,
            alignItems: 'center'
        },
        active: {
            color: '#69247F'
        },
        circle: {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor'
        },
        completed: {
            color: '#69247F',
            zIndex: 1,
            fontSize: 18
        }
    });

    function QontoStepIcon(props) {
        const classes = useQontoStepIconStyles();
        const {active, completed} = props;

        return (
            <div
                className={clsx(classes.root, {
                [classes.active]: active
            })}>
                {completed
                    ? <Check className={classes.completed}/>
                    : <div className={classes.circle}/>}
            </div>
        );
    }

    QontoStepIcon.propTypes = {
        active: PropTypes.bool,
        completed: PropTypes.bool
    };
    const getSteps = () => {
        return ['', '', '', ''];
    }

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return 'Select campaign settings...';
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            case 3:
                return 'This is the bit I really care about!';
            default:
                return 'Unknown stepIndex';
        }
    }
    const classes = useStyles();

    const steps = getSteps();

    const handleNext = () => {
        if(formChart < 3){
            setFormChart((prevActiveStep) => prevActiveStep + 1)
        }
    };

    const handleBack = () => {
        setFormChart((prevActiveStep) => prevActiveStep - 1)
    };

    return (
        <div className="section__container">
            <h3 className="montserrat__font text-center purple">Entiende tus finanzas</h3>
            <p className="section__description">
                Saber cómo se encuentran tus finanzas y cómo mejorarlas es clave para que puedas
                disfrutar de tus mayores deseos y puedas cumplir tus sueños. ¡Te ayudamos a
                lograrlo!
            </p>
            <div className="section__content__container">
                <div className="form__container">
                    <div className="divisa__switch">
                        <p>COP</p>
                        <PurpleSwitch checked={state} onChange={handleChangeDivisa} name="divisas"/>
                        <p>USD</p>
                    </div>
                    {!mainAddStatus
                        ? <AddSwitch
                                divisa={divisa}
                                formChart={formChart}
                                getIngresos={getIngresos}
                                getEgresos={getEgresos}
                                getDeudas={getDeudas}
                                getPropiedades={getPropiedades}/>
                        : <div></div>}
                </div>
                <div className="legend__container">
                    <div className="legend__description">
                        <h5 className="legend__title purple">{legend[formChart].title}</h5>
                        <p className="lenged__text">{legend[formChart].desc}</p>
                    </div>
                    <div className="legend__btn__container">
                        <div
                            onClick={() => setInput(0)}
                            onMouseEnter={() => buttonHover(0)}
                            onMouseLeave={() => buttonHover(100)}
                            className="legend__btn">
                            <IngresosIcon
                                color={formChart == 0
                                ? '#69247F'
                                : btnHover == 0
                                    ? '#69247F'
                                    : '#6bc1ce'}/>
                            <p
                                style={formChart == 0
                                ? {
                                    color: '#69247F'
                                }
                                : btnHover == 0
                                    ? {
                                        color: '#69247F'
                                    }
                                    : {
                                        color: '#6bc1ce'
                                    }}
                                className="legend__btn__title">Ingresos</p>
                        </div>
                        <div
                            onClick={() => setInput(1)}
                            onMouseEnter={() => buttonHover(1)}
                            onMouseLeave={() => buttonHover(100)}
                            className="legend__btn">
                            <EgresosIcon
                                color={formChart == 1
                                ? '#69247F'
                                : btnHover == 1
                                    ? '#69247F'
                                    : '#6bc1ce'}/>
                            <p
                                style={formChart == 1
                                ? {
                                    color: '#69247F'
                                }
                                : btnHover == 1
                                    ? {
                                        color: '#69247F'
                                    }
                                    : {
                                        color: '#6bc1ce'
                                    }}
                                className="legend__btn__title">Egresos</p>
                        </div>
                        <div
                            onClick={() => setInput(2)}
                            onMouseEnter={() => buttonHover(2)}
                            onMouseLeave={() => buttonHover(100)}
                            className="legend__btn">
                            <DeudasIcon
                                color={formChart == 2
                                ? '#69247F'
                                : btnHover == 2
                                    ? '#69247F'
                                    : '#6bc1ce'}/>
                            <p
                                style={formChart == 2
                                ? {
                                    color: '#69247F'
                                }
                                : btnHover == 2
                                    ? {
                                        color: '#69247F'
                                    }
                                    : {
                                        color: '#6bc1ce'
                                    }}
                                className="legend__btn__title">
                                Créditos</p>
                        </div>
                        <div
                            onClick={() => setInput(3)}
                            onMouseEnter={() => buttonHover(3)}
                            onMouseLeave={() => buttonHover(100)}
                            className="legend__btn">
                            <PropiedadesIcon
                                color={formChart == 3
                                ? '#69247F'
                                : btnHover == 3
                                    ? '#69247F'
                                    : '#6bc1ce'}/>
                            <p
                                style={formChart == 3
                                ? {
                                    color: '#69247F'
                                }
                                : btnHover == 3
                                    ? {
                                        color: '#69247F'
                                    }
                                    : {
                                        color: '#6bc1ce'
                                    }}
                                className="legend__btn__title">Propiedades</p>
                        </div>
                    </div>
                    <div  style={{marginLeft: '15px'}} className="legend_stepper">
                        <Stepper className={classes.root} activeStep={formChart}>
                            {steps.map((label) => (
                                <Step key={label} connector={< QontoConnector />}>
                                    <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <div>
                            {formChart === steps.length
                                ? (
                                    <div>
                                        <Typography className={classes.instructions}>All steps completed</Typography>
                                        {/* <Button onClick={handleReset}>Reset</Button> */}
                                    </div>
                                )
                                : (
                                    <div>
                                        {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
                                        <div >
                                            <Button
                                                disabled={formChart === 0}
                                                onClick={handleBack}
                                                className={classes.backButton}>
                                                Atrás
                                            </Button>
                                            <Button className={classes.addButton} onClick={handleNext}>
                                                {formChart === steps.length - 1
                                                    ? 'Confirmar'
                                                    : 'Siguiente'}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}