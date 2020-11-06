import React from 'react';
import AddIngreso from './add-ingreso';

export default function AddSwitch(props) {
    switch (props.formChart) {
        case 0:
            return (
                <div><AddIngreso getIngresos={props.getIngresos}/></div>
            );
            break
    }
}