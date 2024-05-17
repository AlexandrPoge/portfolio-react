import vkontakte from "../../img/icons/vkontakte.svg";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import github from "../../img/icons/githubik.svg";
import linkedFooter from "../../img/icons/linkedInfooter.svg";
import './style.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#"><img src={vkontakte} alt="Link"/></a></li>
                        <li className="social__item"><a href="#"><img src={instagram} alt="Link"/></a></li>
                        <li className="social__item"><a href="#"><img src={twitter} alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="#"><img src={github} alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="#"><img src={linkedFooter} alt="Link"/></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;