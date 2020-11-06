import './css/styles.css';
import NavBar from './components/navigation/nav-bar';
import Banner from './components/banner/banner';
import Nosotros from './components/fpp/nosotros';
import Diagnostico from './components/diagnostico/diagnostico'

function App() {
    return (
        <div>
            <section id="inicio">
                <NavBar/>
                <header className="header__container">
                    <Banner />
                </header>
            </section>
            <section id="nosotros"><Nosotros /></section>
            <section id="diagnostico"><Diagnostico /></section>
            <section id="ayuda"><h1>Apoyo</h1></section>

        </div>
    );
}

export default App;
