import React, {useState} from 'react';
import Legends from './legends';
import GraphicsFlujo from './graphics/graphics-flujo';
import GraphicsNivel from './graphics/graphics-nivel';
import GraphicsAhorro from './graphics/graphics-ahorro';
import GraphicsConsumo from './graphics/graphics-consumo';
import PDF from './pdf';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

export default React.memo(function Results(props) {

    const [graph,
        setGraph] = useState("flujo");

    const getGraph = (e) => {
        setGraph(e)
    }

    const {data} = props;

    const useStyles = makeStyles((theme) => ({
        addButton: {
            backgroundColor: '#69247f',
            marginLeft: '15px',
            border: 'solid 1px #69247f',
            color: '#fff',
            transition: 'all 300ms ease',
            '&:hover': {
                color: '#6bc1ce',
                backgroundColor: '#69247f'
            }
        }
    }));
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className="section__container">
                <h3 className="montserrat__font text-center purple">{props.data.name}, ¡Así están tus finanzas!</h3>
                <p className="section__description">
                    Según la información que diste, te contamos en cuatro aspectos cómo se
                    encuentran tus estados financieros.
                </p>

                <div style={{
                    textAlign: "center"
                }}>
                    <br></br>
                    {/* {data.ingresos !== undefined
                    ? <PDF data={data}/>
                    : <div></div>} */}
                    <PDF data={data}/>
                </div>

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
            < div className="pay__section">
                <h1 className="purple">¡Es una oportunidad de mejora!</h1>
                <a href="https://mpago.li/1mTgGkK" target="_blank" rel="noreferrer" alt="mercadopago">
                    <Button className={classes.addButton}>
                        Agenda tu asesoría
                    </Button>
                </a>
            </div >
        </React.Fragment>
    )
})