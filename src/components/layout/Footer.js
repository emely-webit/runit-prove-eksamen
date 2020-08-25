import React from 'react'
import FooterLogo from '../../image/logobot.png'
import "./layout.scss";


const Footer = () => {
    return (
        <footer className="bg-dark col-12 p-2">
           <img className="img-fluid col-3 offset-lg-9" src={FooterLogo} alt="RunIT logo hvid og rødt" />
        </footer>
    )
}

export default Footer
