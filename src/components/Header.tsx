import logo from '../assets/images/logo.png';
import { NavLink } from "react-router-dom";


function Header() {

    return (
        <nav className="navbar sticky-top navbar-expand-md custom-navbar navbar-light bg-light">
            <div className="container">
                <img className="navbar-brand" src={logo} id="logo_custom" alt="logo" />
                <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button"
                    data-toggle="collapse" data-target="#collapsibleNavbar" >
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item ">
                            <NavLink to={'/'} className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }  >Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to={'courses'} className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }   >New courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'blogs'} className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }   >Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'news'} className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }   >News</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'verify-certificate'} className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }   >Verify Certificate</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;