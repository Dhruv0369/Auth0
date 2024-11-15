import React, { useState } from 'react'
import BackGround from '../img/bg-image.png'
import { useAuth0 } from "@auth0/auth0-react";

const Theme = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const [showProfile, setShowProfile] = useState(false)

    const handleProfile = () => {
        setShowProfile(!showProfile)
    }
    return (
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">
                        Dhruv
                    </a>
                    {/* <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    About Us
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Services
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Featured
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                        <div className="nav__close" id="nav-close">
                            <i className="ri-close-line" />
                        </div> 
                    </div> */}
                    <div className="nav__actions">

                        {isAuthenticated && <i onClick={handleProfile} className="ri-user-line nav__login" id="login-box" />}

                        {isAuthenticated && showProfile && (
                            <>
                                <div className="profile-dropdown">
                                    <li className="list-none">{user.name}</li>
                                </div>
                            </>
                        )}



                        {isAuthenticated && <> <ul> <li className='list-none'></li> </ul></>}

                        {isAuthenticated
                            ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="login__button">Log Out</button>
                            : <button onClick={() => loginWithRedirect()} type="submit" className="login__button">Log In</button>

                        }
                    </div>
                </nav>
            </header>

            {/*==================== MAIN ====================*/}
            <main className="main">
                <img src={BackGround} alt="image" className="main__bg" />
            </main>
        </>
    )
}

export default Theme
