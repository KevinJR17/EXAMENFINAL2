import React from 'react'
import { Home } from '../componentes/Home'
import { About } from '../componentes/About'
import { Desboard } from '../componentes/Desboard'
import { BrowserRouter, Routes ,Route,NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <BrowserRouter>
    <header className='menu'>
        <h1>EXAMEN FINAL KEVIN ALVARO HUASCO ZUÑAGUA</h1>
        <nav>
            <ul className='ul-menu'>
                    <NavLink to="/Home">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/About">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/Desboard">
                        <li>Desboard</li>
                    </NavLink>
            </ul>
        </nav>
    </header>
    <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Desboard' element={<Desboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export  {NavBar}