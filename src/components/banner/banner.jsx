import React, {useState} from 'react'
import bannerImg from '../../assets/images/play.svg'
import $ from 'jquery'
export default function Banner() {

    const [open,
        setOpen] = useState(false)

    const openVideo = () => {
        setOpen(!open)
    }

    $(function () {
        $('#video').css({
            width: $(window).innerWidth() * 0.85 + 'px',
            height: $(window).innerHeight() * 0.85 + 'px'
        });

        $(window).resize(function () {
            $('#video').css({
                width: $(window).innerWidth() * 0.85 + 'px',
                height: $(window).innerHeight() * 0.85 + 'px'
            });
        });
    });

    return (
        <div className="banner__container">
            <div className="banner__info">
                <p className="banner__tag montserrat__font">#MejoresFinanzas</p>
                <p className="banner__title montserrat__font">Aprende a dejar tus deudas en $0</p>
                <a className="banner__btn btn montserrat__font" href="#diagnostico">Conocer mis finanzas</a>
            </div>
            <div className="banner__img">
                {!open
                    ? <img src={bannerImg} onClick={() => openVideo()} alt="Banner"/>
                    : <div className="videoContainer">
                        <span onClick={() => openVideo()} className="close__video">
                            <i className="fas fa-times-circle"></i>
                        </span>
                        <iframe
                            id="video"
                            width="560"
                            height="315"
                            title="Digfy Video"
                            src="https://www.youtube.com/embed/tH9pg9giExY?controls=0&autoplay=1"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>}
            </div>
        </div>
    )
}