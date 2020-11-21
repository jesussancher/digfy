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

export default function DataConfirm(props) {
    const [open,
        setOpen] = React.useState(false);
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
        }
    }));

    const classes = useStyles();
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };

    const [termsOpen,
        setTermsOpen] = React.useState(false);

    const termsClose = (e) => {
        setTermsOpen(e)
    }
    return (
        <div>
            <Dialog
                className={classes.dialog}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">¡Estamos listos!</DialogTitle>
                <DialogContent className={classes.content}>
                    <div>
                        <img
                            style={{
                            width: '50%'
                        }}
                            src={CroodWaving}
                            alt="confirm"/>
                    </div>
                    <DialogContent className={classes.textContent}>
                        <DialogContentText>
                            ¡Queremos seguir en contacto contigo! Para nosotros es importante apoyarte a
                            mejorar tus cuentas.
                        </DialogContentText>
                        <TextField
                            required
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nombre"
                            type="text"
                            fullWidth/>
                        <TextField
                            required
                            autoFocus
                            margin="dense"
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
                    <Button className={classes.addButton} onClick={handleClose} color="primary">
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>
            <Terms open={termsOpen} close={termsClose}/>
        </div>
    );
}