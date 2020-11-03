import React, {useEffect, useState} from 'react';
import Navigation from './navigation'

export default function NavBar() {
    const [logoColor,
        setLogoColor] = useState("#fff");
    const [y,
        setY] = useState(window.scrollY);
    // Navigation change bacground colour
    const getHieght = () => {
        const y = window.scrollY;
        setY(y)
        return y
    }
    window.onscroll = () => {
        const navBar = document.getElementById("navBar");
        if (getHieght() < 70) {
            navBar
                .classList
                .add("bg__purple");
            navBar
                .classList
                .remove("bg__white");
            setLogoColor("#fff");
            navBar
                .classList
                .remove("nav__shadow");
        } else {
            navBar
                .classList
                .add("bg__white");
            navBar
                .classList
                .remove("bg__purple");
            navBar
                .classList
                .add("nav__shadow")
            setLogoColor("#69247f");
        }
    }
    return (
        <div id="navBar" className="nav__bar row fixed row-center">
            <div className="logo__container">
                <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 450.27 71.74">
                    <g id="Layer_1" data-name="Layer 1"><path
                        d="M6.28,13.11h0A30.33,30.33,0,0,1,36.61,43.44v0a0,0,0,0,1,0,0H6.28a0,0,0,0,1,0,0V13.11A0,0,0,0,1,6.28,13.11Z"
                        transform="translate(26.28 -6.88) rotate(45)"
                        style={{
            fill: '#6bc1ce'
        }}/><path
                        d="M117.68,4.11a4.09,4.09,0,0,1,2.93,1.18,3.85,3.85,0,0,1,1.22,2.9,3.92,3.92,0,0,1-1.22,2.89,4,4,0,0,1-2.93,1.22,3.85,3.85,0,0,1-2.82-1.24,4,4,0,0,1,0-5.71A3.89,3.89,0,0,1,117.68,4.11Z"
                        style={{
            fill: '#6bc1ce'
        }}/><rect
                        x="114.25"
                        y="18.85"
                        width="6.93"
                        height="35.03"
                        style={{
            fill: logoColor
        }}/><path
                        d="M127.42,31a10.73,10.73,0,0,1,4.09-8.86q4.1-3.26,11.18-3.25h14.43v5.41H150a14.33,14.33,0,0,1,2.85,3.8,9.09,9.09,0,0,1,.8,3.92,10.49,10.49,0,0,1-1.56,5.39,11,11,0,0,1-4,4.06,24.39,24.39,0,0,1-8.06,2.24q-3.92.59-3.92,2.71a2.3,2.3,0,0,0,1.47,2A23,23,0,0,0,142.92,50a57,57,0,0,1,8.28,2.2,10.84,10.84,0,0,1,3.33,2.29A8.54,8.54,0,0,1,157,60.81a9.15,9.15,0,0,1-4.43,8q-4.44,3-11.86,3t-12-3a9.22,9.22,0,0,1-4.47-8q0-7.11,8.79-9.17-3.5-2.25-3.5-4.46a4,4,0,0,1,1.51-3,9.19,9.19,0,0,1,4.05-2Q127.43,38.61,127.42,31Zm11.39,24.56A10.12,10.12,0,0,0,133.08,57a4.43,4.43,0,0,0-2.23,3.81q0,5.4,9.75,5.41a15.21,15.21,0,0,0,7.13-1.36A4.18,4.18,0,0,0,150.27,61c0-1.63-1.07-2.95-3.2-4A19.06,19.06,0,0,0,138.81,55.52Zm1.63-30.66a6.65,6.65,0,0,0-4.79,1.91,6.11,6.11,0,0,0-2,4.57,5.77,5.77,0,0,0,1.94,4.47,7,7,0,0,0,4.91,1.77,6.93,6.93,0,0,0,4.89-1.81,5.87,5.87,0,0,0,2-4.51,6,6,0,0,0-2-4.57A7,7,0,0,0,140.44,24.86Z"
                        style={{
            fill: logoColor
        }}/><path
                        d="M163.29,18.85v-2.1q0-8.44,3.6-12.6A11,11,0,0,1,175.51,0a23.17,23.17,0,0,1,5.14.69V7.46a9.46,9.46,0,0,0-3.2-.61c-2.71,0-4.6.73-5.65,2.17s-1.58,4-1.58,7.73v2.1h3.26l3,5.42h-6.24V53.88h-6.93V24.27h-6.65V18.85Z"
                        style={{
            fill: logoColor
        }}/><path
                        d="M203.49,18.85h7.78L186.45,71.74h-7.74L190.6,46.36,177.07,18.85H185l9.46,19.79Z"
                        style={{
            fill: logoColor
        }}/><path
                        d="M58.16,53.77V1.06H76q10.77,0,17,3.23a24.36,24.36,0,0,1,10,9.5,26.46,26.46,0,0,1,3.7,13.68A25.86,25.86,0,0,1,98.81,46.1a25.51,25.51,0,0,1-9,5.71,27.1,27.1,0,0,1-5.48,1.57,74.59,74.59,0,0,1-9.52.39Zm17-46H65.71V47.05h9.68a38.37,38.37,0,0,0,8.8-.78,21.07,21.07,0,0,0,5.24-2,18.29,18.29,0,0,0,3.83-2.93,19.54,19.54,0,0,0,5.59-14.32A18.31,18.31,0,0,0,88.25,9.9a20.52,20.52,0,0,0-5.19-1.7A52.67,52.67,0,0,0,75.16,7.79Z"
                        style={{
            fill: logoColor
        }}/></g>
                </svg>
            </div>
            <div className="navigation">
                <Navigation color={logoColor} y={y}/>
            </div>
        </div>
    )
}