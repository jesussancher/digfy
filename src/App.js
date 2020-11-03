import './css/styles.css';
import NavBar from './components/navigation/nav-bar'

function App() {
    return (
        <div>
            <section id="inicio">
                <NavBar/>
                <header className="header__container"></header>
            </section>
            <section id="nosotros"><h1>Nosotros</h1></section>
            <section id="asesorias"><h1>Asesorías</h1></section>
            <section id="ayuda"><h1>Apoyo</h1></section>

        </div>
    );
}

export default App;
