import React from 'react'
import Logo from '../assets/logo.png'
import '../styles/menu.css'
import Button from './Button'

const Menu = () => {
    return (
        <nav className="Menu">
            <a href='/'>
                <img src={Logo} alt="Logo" className="Logo"/>
            </a>
            <Button alt='Novo vídeo' className='ButtonLink' name='Novo vídeo'/>
        </nav>
    )
}

export default Menu
