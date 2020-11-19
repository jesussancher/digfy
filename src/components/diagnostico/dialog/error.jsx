import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>;
});

export default function ErrorDialog(props) {
    const [open,
        setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        setOpen(props.open)
    }, [props.open])

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
            ? tempRest.push("Deudas")
            : console.log("Deuda");
        !props.data.propiedades
            ? tempRest.push("Bienes")
            : console.log("Bienes");
        setRest(tempRest)
    }

    React.useEffect(() => {
        resting()
    }, [props.data])

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">{"¡Falta información por asociar!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Para que podamos hacer un diagnóstico práctico de tus finanzas por favor
                        completa:
                    </DialogContentText>
                    {rest.map(restItem => {
                        return (
                            <DialogContentText>
                                * {restItem}
                            </DialogContentText>
                        )
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Continuar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}