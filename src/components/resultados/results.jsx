import React, {useState, useEffect} from 'react';
import Legends from './legends';
import GraphicsFlujo from './graphics/graphics-flujo';
import GraphicsNivel from './graphics/graphics-nivel';
import GraphicsAhorro from './graphics/graphics-ahorro';
import GraphicsConsumo from './graphics/graphics-consumo';

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
            <div className="section__content__container">
                <div className="legend__side">
                    <Legends data={props.data} divisa={props.divisa} getGraph={getGraph}/>
                </div>
                <div className="graph__side">
                    {graph === "flujo"
                        ? <GraphicsFlujo data={props.data}/>
                        : graph === "nivel"
                            ? <GraphicsNivel data={props.data} graph={graph}/>
                            : graph === "ahorro"
                                ? <GraphicsAhorro data={props.data} graph={graph}/>
                                : <GraphicsConsumo data={props.data} graph={graph}/>}

                </div>
            </div>
        </div>
    )
}