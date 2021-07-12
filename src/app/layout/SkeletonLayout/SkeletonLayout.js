import React from 'react'
import PropTypes from 'prop-types'

import styles from './SkeletonLayout.module.scss'

const SkeletonLayout = ({ children, header = false }) => {
	return (
		<React.Fragment>
			{header ? (
				<div className={styles.header}>
					<div className={styles.rectH15}></div>
					<div className={styles.square44 + ' ' + styles.displayNone}></div>
					<nav className={styles.nav}>
						<div className={styles.rectH20}></div>
						<div className={styles.rectH20}></div>
						<div className={styles.rectH20}></div>
					</nav>
				</div>
			) : null}
			{children}
		</React.Fragment>
	)
}

SkeletonLayout.propTypes = {
	children: PropTypes.node,
	header: PropTypes.bool,
}

export default SkeletonLayout
