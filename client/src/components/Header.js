
import { Link, NavLink } from "react-router-dom";

export default function Header (){
    return(
        <header className="nav">
            <Link to="/" className="nav__home">
                TOGETHER
            </Link>

            <nav className="nav__right">
                <ul className="nav__list">
                    <li className="nav__list--link">
                        <NavLink to="/clients" className="nav__list--item">Clients</NavLink>
                    </li>
                    <li className="nav__list--link">
                        <NavLink to="/programs" className="nav__list--item">Programs</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}