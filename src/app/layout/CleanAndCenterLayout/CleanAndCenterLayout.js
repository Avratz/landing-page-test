import React from 'react'
import PropTypes from 'prop-types'

import styles from './CleanAndCenterLayout.module.scss'

const CleanAndCenterLayout = ({ children }) => {
	return <main className={styles.clean}>{children}</main>
}

CleanAndCenterLayout.propTypes = {
	children: PropTypes.node,
}

export default CleanAndCenterLayout
