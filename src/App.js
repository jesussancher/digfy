import './css/styles.css';
import NavBar from './components/navigation/nav-bar';
import Banner from './components/banner/banner';
import Nosotros from './components/fpp/nosotros';

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
            <section id="asesorias"><h1>Asesorías</h1></section>
            <section id="ayuda"><h1>Apoyo</h1></section>

        </div>
    );
}

export default App;
