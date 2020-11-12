import React from 'react';
import AddIngreso from './add-ingreso';
import AddEgreso from './add-egreso';

export default function AddSwitch(props) {
            return (
                <div><AddIngreso getIngresos={props.getIngresos} getEgresos={props.getEgresos} category={props.formChart}/></div>
            );
}