import React, {useState, useEffect} from 'react';
import Legends from './legends';
import Graphics from './graphics';
import {GetApp} from '@material-ui/icons';

export default function Results(props) {

    const [graph,
        setGraph] = useState("flujo");

    const getGraph = (e) => {
        setGraph(e)
    }

    return (
        <div
            style={{
            marginTop: '30vh'
        }}
            className="section__container">
            <h3 className="montserrat__font text-center purple">{props.data.name}, ¡Así están tus finanzas!</h3>
            <p className="section__description">
                Según la información que diste, te contamos en cuatro aspectos cómo se
                encuentran tus estados financieros.
            </p>
            <div className="results__section section__content__container">
                <div className="legend__side">
                    <Legends data={props.data} divisa={props.divisa} getGraph={getGraph}/>
                </div>
                <div className="graph__side">
                    <Graphics graph={graph}/>
                </div>
            </div>
        </div>
    )
}