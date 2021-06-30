import React from 'react'
import LogoFull from './assets/logo_full_color.svg'
import LogoBlack from './assets/Ic_Wolox_Footer.svg'

const Logo = ({isFull = false}) => <img src={isFull ? LogoFull : LogoBlack} alt="Wolox" />

export default Logo
