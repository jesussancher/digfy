import React from 'react'

export default function Footer(props) {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__contact">
                    <p
                        style={{
                        fontSize: '30px',
                        margin: '0',
                        fontWeight: '700'
                    }}
                        className="blue">Contáctanos</p>
                    <div
                        style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <i
                            style={{
                            fontSize: '25px',
                            color: 'white',
                            marginRight: '10px'
                        }}
                            className="fas fa-phone"></i>
                        <p
                            style={{
                            fontSize: '15px',
                            color: 'white'
                        }}>+57 3015919909</p>
                    </div>
                    <div
                        style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <i
                            style={{
                            fontSize: '25px',
                            color: 'white',
                            marginRight: '10px'
                        }}
                            className="fas fa-envelope"></i>
                        <p
                            style={{
                            fontSize: '15px',
                            color: 'white'
                        }}>
                            finanzaspersonalespracticas@gmail.com
                        </p>
                    </div>
                    <div
                        style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                        <a href="https://www.facebook.com/finanzaspersonalespracticas/" target="_blank" rel="noreferrer" alt="Facebook"><i className="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/finanzaspersonalespracticas/" target="_blank" rel="noreferrer" alt="Instagram"><i className="fab fa-instagram-square"></i></a>
                        <a href="https://www.youtube.com/channel/UCGjkxD1cyzfcEKn-0dy7FAQ?sub_confirmation=1" target="_blank" rel="noreferrer" alt="Youtube"><i className="fab fa-youtube-square"></i></a>

                        

                    </div>
                </div>
                <div className="footer__description">
                    <p
                        style={{
                        fontSize: '30px',
                        margin: '0',
                        fontWeight: '700'
                    }}
                        className="blue">¿Quiénes somos?</p>
                    <p
                        style={{
                        fontSize: '15px',
                        color: 'white'
                    }}>
                        "FINANZAS PERSONALES PRACTICAS FPP SOMOS UN EQUIPO INTERDISCIPLINARIO,
                        COMPROMETIDO CON LA EDUCACIÓN FINANCIERA DE LAS PERSONAS, DONDE CREEMOS QUE EL
                        MUNDO SERÍA UN MEJOR LUGAR SI...LAS PERSONAS PUEDEN RESOLVER SUS PROBLEMAS
                        FINANCIEROS, PARA SER MÁS FELICES"
                    </p>
                </div>
            </div>
            <div className="footer__container">
                <div className="footer__copy">
                    <p
                        style={{
                        fontSize: '12px',
                        color: 'white'
                    }}>
                        Copyright © <a className="jesus" href="https://finanzaspersonalespracticas.com/" target="_blank" rel="noreferrer" alt="FPP"> FINANZAS PERSONALES PRACTICAS</a>
                    </p>
                    <p
                        style={{
                        fontSize: '12px',
                        color: 'white'
                    }}>
                        Design and development by <a className="jesus" href="https://twitter.com/Jesussancher" target="_blank" rel="noreferrer" alt="designer">Jesús Sánchez</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}