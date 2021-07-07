import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.module.scss'

const Input = (props) => {
	return <input className={styles.input} {...props} />
}

Input.propTypes = {
	props: PropTypes.object,
}
export default Input
