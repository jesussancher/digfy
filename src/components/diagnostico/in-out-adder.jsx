import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {SnackbarProvider, useSnackbar} from 'notistack';
import Snackbar from '@material-ui/core/Snackbar';

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
        setOpen(false);
    };

    const handleClickVariant = (variant) => {
        // switch (props.props.inOut) {     case "ingresos":
        enqueueSnackbar('¡Agregado exitosamente!', {variant, autoHideDuration: 1000});
        //         break; }
    };
    const newIngreso = () => {
        if (type != '' && price != 0) {
            props
                .props
                .newIngreso(type);
            handleClickVariant('success')
        }
        setTimeout(() => {
            handleClose()
        }, [1000])
    }
    return (
        <React.Fragment>

            {props.props.inOut == "ingreso"
                ? <Button className={classes.addButton} onClick={handleClickOpen}>Agregar ingreso</Button>
                : props.props.inOut === "egreso"
                    ? <Button className={classes.addButton} onClick={handleClickOpen}>Agregar egreso</Button>
                    : <Button className={classes.addButton} onClick={handleClickOpen}>Agregar otra cosa</Button>
}
            {props.props.inOut == "ingreso"
                ? <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Ingresos</DialogTitle>
                        <DialogContent>
                            <form className={classes.container}>
                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-dialog-select-label">Tipo</InputLabel>
                                    {props.props.inOut == "ingreso"
                                        ? <Select
                                                labelId="demo-dialog-select-label"
                                                id="typeIngreso"
                                                value={type}
                                                onChange={handleChange}
                                                input={< Input />}>
                                                <MenuItem value={"Salario"}>Salario</MenuItem>
                                                <MenuItem value={"Honorario"}>Honorario</MenuItem>
                                                <MenuItem value={"Efectivo"}>Efectivo</MenuItem>
                                            </Select>
                                        : <div></div>}
                                    <TextField
                                        className={classes.inputField}
                                        id="priceIngreso"
                                        value={price}
                                        onChange={handleChangePrice}
                                        type="number"
                                        label="¿Cuánto fue?"
                                        variant="outlined"/>
                                    <TextField
                                        className={classes.inputField}
                                        id="descIngreso"
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
                            <Button onClick={newIngreso} className={classes.addButton}>
                                Agregar
                            </Button>
                        </DialogActions>
                    </Dialog>
                : props.props.inOut === "egreso"
                    ? <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Egresos</DialogTitle>
                            <DialogContent>
                                <form className={classes.container}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel id="demo-dialog-select-label">Tipo</InputLabel>
                                        {props.props.inOut == "egreso"
                                            ? <Select
                                                    labelId="demo-dialog-select-label"
                                                    id="typeEgreso"
                                                    value={type}
                                                    onChange={handleChange}
                                                    input={< Input />}>
                                                    <MenuItem value={"Vitales"}>Vitales</MenuItem>
                                                    <MenuItem value={"Financieros"}>Financieros</MenuItem>
                                                    <MenuItem value={"Hormiga"}>Hormiga</MenuItem>
                                                </Select>
                                            : <div></div>}
                                        <TextField
                                            className={classes.inputField}
                                            id="priceEgreso"
                                            value={price}
                                            onChange={handleChangePrice}
                                            type="number"
                                            label="¿Cuánto fue?"
                                            variant="outlined"/>
                                        <TextField
                                            className={classes.inputField}
                                            id="descEgreso"
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
                                <Button onClick={newIngreso} className={classes.addButton}>
                                    Agregar
                                </Button>
                            </DialogActions>
                        </Dialog>
                    : <Button className={classes.addButton} onClick={handleClickOpen}>Agregar otra cosa</Button>
}

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