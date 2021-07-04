import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ title = 'default' }) => {
	return <button>{title}</button>
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Button
