import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import './style.css'
import {useEffect, useRef, useState} from "react";

function BtnDarkMode() {
    const [disabled, setDisabled] = useState('light');
    const btnRef = useRef(null);

    useEffect(()=>{
        if (disabled === 'dark'){
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    },[disabled])

    const toggleDarkMode = () => {
        setDisabled((currentValue)=>{
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }
    return (
        <>
        {disabled}
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
        </>
    )
}

export default BtnDarkMode;