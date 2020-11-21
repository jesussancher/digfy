import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CroodWaving from './../../../assets/images/crood-waving.png'
// import classes from '*.module.css';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Terms from './terms';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import InputAdornment from '@material-ui/core/InputAdornment';

// function Alert(props) {     return <MuiAlert elevation={6} variant="filled"
// {...props}/>; }

export default function DataConfirm(props) {
    const [open,
        setOpen] = React.useState(false);
    const [userData,
        setUserData] = React.useState({name: '', email: '', save: 0})
    const [state,
        setState] = React.useState({checkedG: false});
    const handleClickOpen = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        setOpen(props.open)
    }, [props.open]);

    const handleClose = () => {
        setOpen(false);
        props.close(false)
    };

    const GreenCheckbox = withStyles({
        root: {
            color: '#69247f',
            '&$checked': {
                color: '#69247f'
            }
        },
        checked: {}
    })((props) => <Checkbox color="default" {...props}/>);

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        },
        content: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        textContent: {
            width: '40%',
            textAlign: 'left'
        },
        dialog: {
            textAlign: 'center'
        },
        addButton: {
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
        },
        separator: {
            marginBottom: '30px'
        }
    }));

    const classes = useStyles();
    const handleChange = (event) => {
        props.confirmation(event.target.checked)
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };

    const handleDataChangeName = (event) => {
        props.getUserData({name: event.target.value})
        setUserData({
            ...userData,
            name: event.target.value
        })
    }

    const handleDataChangeEmail = (event) => {
        props.getUserData({email: event.target.value})
        setUserData({
            ...userData,
            email: event.target.value
        })
    }

    const handleDataChangeSave = (event) => {
        props.getUserData({save: event.target.value})
        setUserData({
            ...userData,
            save: event.target.value
        })
    }

    const [termsOpen,
        setTermsOpen] = React.useState(false);
    const [alertOpen,
        setAlertOpen] = React.useState(false);
    const [alert,
        setAlert] = React.useState("Ingresa tu nombre")
    const termsClose = (e) => {
        setTermsOpen(e)
    }
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };
    const handleOpenAlert = (message, event) => {
        setAlert(message);
        setAlertOpen(event)
    }

    return (
        <div>
            <Dialog
                className={classes.dialog}
                open={open}
                scroll={'body'}
                onClose={handleClose}
                maxWidth={'sm'}
                alt="confirm">
                <DialogTitle className={classes.dialog} id="alert-dialog-title">{"¡Estamos listos!"}</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <div>
                        <img
                            style={{
                            width: "30%"
                        }}
                            src={CroodWaving}
                            alt="error"/>
                    </div>
                    {/* <DialogContentText>
                            Pero antes de continuar
                        </DialogContentText>
                        <TextField
                            className={classes.separator}
                            required
                            autoFocus
                            onChange={handleDataChangeSave}
                            margin="dense"
                            id="save"
                            name="save"
                            label="¿Cuál es tu porcentaje de ahorro al mes?"
                            type="number"
                            InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>
                        }}
                            fullWidth/> */}

                    <DialogContentText>
                        ¡Queremos seguir en contacto contigo! Para nosotros es importante apoyarte a
                        mejorar tus cuentas.
                    </DialogContentText>
                    <DialogContent>
                        <TextField
                            required
                            autoFocus
                            onChange={handleDataChangeName}
                            margin="dense"
                            id="name"
                            name="name"
                            label="Nombre"
                            type="text"
                            fullWidth/>
                        <TextField
                            required
                            autoFocus
                            onChange={handleDataChangeEmail}
                            margin="dense"
                            name="email"
                            id="email"
                            label="Correo Electrónico"
                            type="email"
                            fullWidth/>
                        <FormControlLabel
                            control={< GreenCheckbox checked = {
                            state.checkedG
                        }
                        onChange = {
                            handleChange
                        }
                        name = "checkedG" />}
                            label="He leído y acepto los términos de privacidad"/>
                        <br/>
                        <a
                            onClick={() => setTermsOpen(true)}
                            style={{
                            textDecoration: 'none',
                            color: '#69247f',
                            cursor: 'pointer'
                        }}>Aviso de Privacidad y Términos y Condiciones</a>
                    </DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.backButton} onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button
                        className={classes.addButton}
                        onClick={() => userData.save === 0
                        ? handleOpenAlert("¿Cuánto ahorras al mes?", true)
                        : userData.name === ''
                            ? handleOpenAlert("Ingresa tu nombre", true)
                            : !state.checkedG
                                ? handleOpenAlert("Confirma políticas de privacidad", true)
                                : !userData.email.includes("@")
                                    ? handleOpenAlert("Ingresa un correo electrónico válido", true)
                                    : props.saveInfo()}
                        color="primary">
                        Generar diagnóstico
                    </Button>
                </DialogActions>
                < Terms open={termsOpen} close={termsClose}/> {/* <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="warning">
                    {alert}
                </Alert>
            </Snackbar> */};
            </Dialog>
        </div>
    );
}