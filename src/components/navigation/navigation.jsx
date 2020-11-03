import React, {useState, useEffect} from 'react';
import Burger from './burger';
import Menu from './menu';
import MenuMD from './menu-md';
import MenuSM from './menu-sm';

export default function Navigation(props) {
    // Change navigation on width change
    const [winWidth,
        setWinWidth] = useState(window.innerWidth)
    const [status,
        setStatus] = useState(false)

    window.addEventListener('resize', () => {
        setWinWidth(window.innerWidth)
    })

    const getStatus = (e) => {
        setStatus(e)
    }
    if (winWidth <= 480) {
        return (
            <div>
                <Burger winWidth={winWidth} color={props.color} status={getStatus}/>
                <MenuSM status={status}/>
            </div>
        )
    } else if (winWidth > 480 && winWidth < 992) {
        return (
            <div>
                <Burger winWidth={winWidth} color={props.color} status={getStatus}/>
                <MenuMD status={status}/>
            </div>
        )
    } else {
        return (<Menu y={props.y}/>)
    }

}