import React from 'react'
import PropTypes from 'prop-types'

import styles from './Benefit.module.scss'

const Benefit = ({ icon, name }) => {
	return (
		<div className={styles.benefit}>
			<img alt="" src={icon} />
			<h4>{name}</h4>
		</div>
	)
}

Benefit.propTypes = {
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default Benefit
