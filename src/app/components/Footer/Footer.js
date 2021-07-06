import React from 'react'
import Thanks from 'app/components/Thanks'
import Logo from 'app/components/Logo'
import PropTypes from 'prop-types'

import styles from './Footer.module.scss'

const Footer = ({ compact = false }) => {
	return (
		<footer className={compact ? styles.footerCompact : styles.footer}>
			{compact ? null : <Thanks />}
			<Logo />
		</footer>
	)
}

Footer.propTypes = {
	compact: PropTypes.bool,
}

export default Footer
