import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import styles from './Input.module.scss'

const Input = ({ className = '', error, ...props }) => {
	const [t] = useTranslation()
	return (
		<React.Fragment>
			<input
				className={`${styles.input} ${error !== undefined ? styles.errorInput : ''} ${className}`}
				{...props}
			/>
			{error !== undefined ? <p className={styles.error}>{t(error)}</p> : null}
		</React.Fragment>
	)
}

Input.propTypes = {
	props: PropTypes.object,
	className: PropTypes.string,
	error: PropTypes.string,
}
export default Input
