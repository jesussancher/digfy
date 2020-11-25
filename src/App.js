import './css/styles.css';
import NavBar from './components/navigation/nav-bar';
import Banner from './components/banner/banner';
import Nosotros from './components/fpp/nosotros';
import Diagnostico from './components/diagnostico/diagnostico';
import Results from './components/resultados/results';
import {useState} from 'react';

function App() {
    const [data,
        setData] = useState({})
    const [divisa,
        setDivisa] = useState('COP')
    const getDivisa = (e) => {
        setDivisa(e)
    }
    const getData = (e) => {
        setData(e)
    }

    return (
        <div>
            <section id="inicio">
                <NavBar/>
                <header className="header__container">
                    <Banner/>
                </header>
            </section>
            <section id="nosotros"><Nosotros/></section>
            <section id="diagnostico"><Diagnostico data={getData} divisa={getDivisa}/></section>
            <section id="resultados">
                {data.ingresos === undefined
                    ? <div></div>
                    : <Results data={data} divisa={divisa}/>}
            </section>

        </div>
    );

}

export default App;
