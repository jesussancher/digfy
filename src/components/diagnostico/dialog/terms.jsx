import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Terms(props) {
    const [open,
        setOpen] = React.useState(false);
    const [scroll,
        setScroll] = React.useState('paper');

    React.useEffect(() => {
        setOpen(props.open)
    }, [props.open]);

    const handleClose = () => {
        setOpen(false);
        props.close(false)
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description">
                <DialogTitle id="scroll-dialog-title">Aviso de Privacidad y Términos y Condicones</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}>
                        {`Acepto Aviso de Privacidad y Términos y Condiciones, al registrarme en esta página web autorizo a FINANZAS PERSONALES PRÁCTICAS de manera expresa y consiente para que de conformidad con la Ley 1581 de 2012 y el Decreto 1377 del 2013 y aquellos demás que trate, almacene y transmita los datos acá consignados, con fines de recolección, análisis de información de visitantes, atención de dudas, sugerencias y recomendaciones, y desarrollo y ejecución de las diferentes obligaciones del servicio que ofrecen. FINANZAS PERSONALES PRÁCTICAS cuenta con rigurosos estándares de seguridad. Todos sus datos se mantendrán en estricta confidencialidad.`}
                    </DialogContentText>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}>
                        {`Acepto ser contactado por medio de una cuenta institucional y verificada de FINANZAS PERSONALES PRÁCTICAS`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}