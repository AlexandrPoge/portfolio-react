import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import './style.css'
import {useContext, useEffect, useRef} from "react";
import {useLocalStorage} from '../../utils/UseLocalStorage'
import {AppContext} from "../../context";

function BtnDarkMode() {
    const [disabled, setDisabled] = useLocalStorage('light');
    const btnRef = useRef(null);
    const {appRef} = useContext(AppContext);

    useEffect(()=>{
        if (disabled === 'dark'){
            appRef.current.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active');
        } else {
           appRef.current.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');

        }
    },[disabled, appRef])

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