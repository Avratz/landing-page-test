import React from 'react'
import PropTypes from 'prop-types'
import LogoFull from './assets/logo_full_color.svg'
import LogoBlack from './assets/Ic_Wolox_Footer.svg'

const Logo = ({ isFull = false }) => {
	return <img src={isFull ? LogoFull : LogoBlack} alt="Wolox" />
}

Logo.propTypes = {
	isFull: PropTypes.bool,
}

export default Logo
