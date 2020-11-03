import React, {useState} from 'react';

export default function Burger(props) {
    const [open,
        setOpen] = useState(false);

    const burgerClick = () => {
        setOpen(!open)
        props.status(!open)
    }

    if (!open) {
        return (
            <div className="burger__container" onClick={() => burgerClick()}>
                <svg className="burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                    <g id="Layer_1" data-name="Layer 1"><rect
                        x="2"
                        y="4"
                        width="31"
                        height="3.87"
                        rx="2.44"
                        style={{
                fill: props.color
            }}/><rect
                        x="2"
                        y="26.13"
                        width="31"
                        height="3.87"
                        rx="2.44"
                        style={{
                fill: props.color
            }}/><rect
                        x="2"
                        y="15.06"
                        width="31"
                        height="3.87"
                        rx="2.44"
                        style={{
                fill: props.color
            }}/></g>
                </svg>
            </div>
        )
    } else {
        return (
            <div  className="burger__container" onClick={() => burgerClick()}>
                <svg className="burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                    <g id="Layer_1" data-name="Layer 1"><rect
                        x="-0.83"
                        y="15.06"
                        width="36.66"
                        height="3.87"
                        rx="2.44"
                        transform="translate(17.5 -7.25) rotate(45)"
                        style={{
                fill: props.color
            }}/>
                        <rect
                            x="-0.83"
                            y="15.06"
                            width="36.66"
                            height="3.87"
                            rx="2.44"
                            transform="translate(42.25 17.5) rotate(135)"
                            style={{
                            fill: props.color
                        }}></rect>
                    </g>
                </svg>
            </div>
        )
    }

}