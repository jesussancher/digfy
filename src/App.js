import './css/styles.css';
import NavBar from './components/navigation/nav-bar';
import Banner from './components/banner/banner';
import Nosotros from './components/fpp/nosotros';
import Diagnostico from './components/diagnostico/diagnostico'
// import firebase from "firebase/app";
function App() {
    // const firebaseConfig = {
    //     apiKey: "AIzaSyDOWzd52YOpksTuSbXL91BQjLVLXsBFdyM",
    //     authDomain: "digfy-b76a1.firebaseapp.com",
    //     databaseURL: "https://digfy-b76a1.firebaseio.com",
    //     projectId: "digfy-b76a1",
    //     storageBucket: "digfy-b76a1.appspot.com",
    //     messagingSenderId: "922940835920",
    //     appId: "1:922940835920:web:bb51da45bb932c45f2e955",
    //     measurementId: "G-2ZHT2TS42Q"
    // };
    // if (!firebase.apps.length) {
    //     firebase.initializeApp(firebaseConfig);
    // }


    return (
        <div>
            <section id="inicio">
                <NavBar/>
                <header className="header__container">
                    <Banner/>
                </header>
            </section>
            <section id="nosotros"><Nosotros/></section>
            <section id="diagnostico"><Diagnostico/></section>
            <section id="ayuda">
                <h1>Apoyo</h1>
            </section>

        </div>
    );
}

export default App;
