import React from 'react'
import PropTypes from 'prop-types'

import LogoFull from './assets/logo_full_color.svg'
import LogoBlack from './assets/Ic_Wolox_Footer.svg'
import styles from './Logo.module.scss'

const Logo = ({ isFull = false }) => {
	return (
		<img
			alt="Wolox"
			className={isFull ? styles.logoFull : styles.logoBlack}
			src={isFull ? LogoFull : LogoBlack}
		/>
	)
}

Logo.propTypes = {
	isFull: PropTypes.bool,
}

export default Logo
