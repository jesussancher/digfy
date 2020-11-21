import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CroodCheer from './../../../assets/images/crood-cheer.png';
import CroodSad from './../../../assets/images/crood-sad.png';
import {makeStyles, withStyles} from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>;
});

export default function ProcessConfirm(props) {
    const [open,
        setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        setOpen(props.open)
    }, [props.open]);

    const handleClose = () => {
        if (props.result === "success") {
            document
                .getElementById("resultados")
                .scrollIntoView();
            setOpen(false);
            props.close(false)
        } else {
            setOpen(false);
            props.close(false)
        }
    };

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
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle className={classes.dialog} id="alert-dialog-slide-title">{props.result === "success"
                        ? "¡Hecho!"
                        : "¡Ouch!"}</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <div>
                        <img
                            style={{
                            width: "50%"
                        }}
                            src={props.result === "success"
                            ? CroodCheer
                            : CroodSad}
                            alt="error"/>
                    </div>
                    <DialogContentText id="alert-dialog-slide-description">
                        {props.result === "success"
                            ? "Todo salió bien"
                            : "Algo salió mal"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.addButton} onClick={handleClose} color="primary">
                        {props.result === "success"
                            ? "Ver mi diagnóstico"
                            : "Cerrar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}