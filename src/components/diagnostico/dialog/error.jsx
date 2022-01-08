import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CroodList from './../../../assets/images/crood-list.png';
import {makeStyles} from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>;
});

export default function ErrorDialog(props) {
    const [open,
        setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    React.useEffect(() => {
        setOpen(props.open)
    }, [props.open]);

    const handleClose = () => {
        setOpen(false);
        props.close(false)
    };

    const [rest,
        setRest] = React.useState([])

    const resting = () => {
        let tempRest = []
        !props.data.ingresos
            ? tempRest.push("Ingresos")
            : console.log("Intreso");
        !props.data.egresos
            ? tempRest.push("Egresos")
            : console.log("Egreso");
        !props.data.deudas
            ? tempRest.push("Créditos")
            : console.log("Deuda");
        !props.data.propiedades
            ? tempRest.push("Bienes")
            : console.log("Bienes");
        setRest(tempRest)
    }

    React.useEffect(() => {
        resting()
    }, [props.data])

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: '10px 10px'
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
        overflow: {
            overflow: 'hidden'
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={open}
                className={classes.overflow}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle className={classes.dialog} id="alert-dialog-slide-title">{"¡Falta información por asociar!"}</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <div>
                        <img
                            style={{
                            width: "80%"
                        }}
                            src={CroodList}
                            alt="error"/>
                    </div>
                    <DialogContentText id="alert-dialog-slide-description">
                        Para que podamos hacer un diagnóstico práctico de tus finanzas por favor
                        completa:
                    </DialogContentText>
                    {rest.map(restItem => {
                        return (
                            <Button className={classes.button} variant="contained" disabled>
                                {restItem
}
                            </Button>
                        // < DialogContentText > *  < /DialogContentText>
                        )
                    })}
                </DialogContent>
                <DialogActions>
                    <Button className={classes.addButton} onClick={handleClose} color="primary">
                        Continuar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}