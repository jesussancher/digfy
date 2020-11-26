import React from 'react';
import AddIngreso from './add-ingreso';

export default function AddSwitch(props) {
            return (
                <div><AddIngreso getIngresos={props.getIngresos} getEgresos={props.getEgresos} getDeudas={props.getDeudas} getPropiedades={props.getPropiedades} category={props.formChart} divisa={props.divisa}/></div>
            );
}