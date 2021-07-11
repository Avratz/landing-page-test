import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const Button = ({ children, className = '', handleClick = () => null, theme = 'default' }) => {
	const useTheme = {
		default: styles.buttonDefault,
		outline: styles.buttonDefaultOutline,
		disabled: styles.buttonDisabled,
		none: styles.none,
		icon: styles.buttonIcon,
	}
	return (
		<button className={useTheme[theme] + ' ' + className} onClick={handleClick}>
			{children !== undefined ? children : ''}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func,
	theme: PropTypes.string,
	className: PropTypes.string,
}

export default Button
