import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {SnackbarProvider, useSnackbar} from 'notistack';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    inputField: {
        marginTop: '20px'
    },
    hidden: {
        display: 'none'
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

function MyApp(props) {
    const {enqueueSnackbar} = useSnackbar();

    const classes = useStyles();
    const [open,
        setOpen] = React.useState(false);
    const [type,
        setType] = React.useState('');
    const [price,
        setPrice] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value || '');
    };
    const handleChangePrice = (event) => {
        setPrice(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setType('¿Qué?');
        setPrice('¿Cuánto?');
        setOpen(false);
    };

    const handleClickVariant = (variant) => {
        // switch (props.props.inOut) {     case "ingresos":
        enqueueSnackbar('¡Agregado exitosamente!', {variant, autoHideDuration: 1000});
        //         break; }
    };
    const newDeuda = () => {
        if (type !== '' && price !== 0) {
            props
                .props
                .newDeuda(type);
            handleClickVariant('success')
        }
        setTimeout(() => {
            handleClose()
        }, [1000])
    }
    return (
        <React.Fragment>
            <Button className={classes.addButton} onClick={handleClickOpen}>Agregar créditos</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Créditos</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl required className={classes.formControl}>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="typeDeuda"
                                value={type}
                                onChange={handleChange}
                                input={< Input />}>
                                <MenuItem value={"Hipotecario"}>Hipotecario</MenuItem>
                                <MenuItem value={"Libre"}>Libre Inversión y Tarjeta de crédito</MenuItem>
                                <MenuItem value={"Diario"}>De pago diario</MenuItem>
                            </Select>
                            <TextField
                                className={classes.inputField}
                                id="priceDeuda"
                                value={price}
                                onChange={handleChangePrice}
                                type="number"
                                label="¿Cuánto fue?"
                                variant="outlined"/>
                            <TextField
                                className={classes.inputField
                           /*  classes.hidden */}
                                id="descDeuda"
                                type="text"
                                label="Descríbelo"
                                variant="outlined"/>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className={classes.backButton}>
                        Cerrar
                    </Button>
                    <Button onClick={newDeuda} className={classes.addButton}>
                        Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default function InOutAdder(props) {
    return (
        <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}>
            <MyApp props={props}/>
        </SnackbarProvider>
    )
}