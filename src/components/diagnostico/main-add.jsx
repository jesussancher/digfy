import React from 'react';

export default function MainAdd(props) {

    if (props.status) {
        return (
            <div className="form__main__container">
                <i onClick={() => props.getStatus(false)} class="fas fa-plus"></i>
                <p className="form__title montserrat__font">Agregar {props.title}
                </p>
            </div>
        )
    } else {
        return <div></div>
    }

}