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

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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

export default function InOutAdder(props) {
    const classes = useStyles();
    const [open,
        setOpen] = React.useState(false);
    const [type,
        setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const newIngreso = () => {
        props.newIngreso(type);
        // handleClose();
    }
    return (
        <div>
            <Button className={classes.addButton} onClick={handleClickOpen}>Agregar ingreso</Button>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}>
                <DialogTitle>Ingresos</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-dialog-select-label">Tipo</InputLabel>
                            {props.inOut == "ingreso"
                                ? <Select
                                        labelId="demo-dialog-select-label"
                                        id="typeIngreso"
                                        value={type}
                                        onChange={handleChange}
                                        input={< Input />}>
                                        <MenuItem value={"Salario"}>Salario</MenuItem>
                                        <MenuItem value={"Honorario"}>Honorarios</MenuItem>
                                        <MenuItem value={"Efectivo"}>Efectivo</MenuItem>
                                    </Select>
                                : <div></div>}
                            <TextField className={classes.inputField} id="priceIngreso" type="number" label="¿Cuánto?" variant="outlined"/>
                            <TextField className={classes.inputField} id="priceIngreso" type="text" label="¿Qué?" variant="outlined"/>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className={classes.backButton}>
                        Cancelar
                    </Button>
                    <Button onClick={newIngreso} className={classes.addButton}>
                        Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}