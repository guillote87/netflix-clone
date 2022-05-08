import React, { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/netflix.png'
import avatar from '../../images/avatar.jpg'
import './Navbar.css'

export const Navbar = () => {
    const [show, handleShow] = useState(false)
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll",null)
        }
    }, [])

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <div>
                <Link to='/'><img className="logo" src={logo} alt='logo' /></Link>

                <img className="nav-avatar" src={avatar} alt='avatar' />
            </div>

        </div>
    )
}
