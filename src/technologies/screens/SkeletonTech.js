import React from 'react'

import styles from '../styles/Technologies.module.scss'

const SkeletonTech = () => {
	return (
		<div className={styles.technologies}>
			<div className={styles.header}>
				<div className={styles.rectH80}></div>
				<div className={styles.rectH20}></div>
			</div>
			<div className={styles.rectV80}></div>
			<div className={styles.rectV80}></div>
			<div className={styles.rectV80}></div>
			<div className={styles.rectV80}></div>
			<div className={styles.rectV80}></div>
			<div className={styles.rectV80}></div>
		</div>
	)
}

export default SkeletonTech
