import React from 'react'
import { useTranslation } from 'react-i18next'
import Benefit from 'app/components/Benefit'
import flexibility from 'assets/img/Ic_Hour.svg'
import homeOffice from 'assets/img/Ic_HomeOffice.svg'
import workshops from 'assets/img/Ic_Workshops.svg'
import snacks from 'assets/img/Ic_DrinkSnacks.svg'
import remoteWeek from 'assets/img/Ic_laptop.svg'
import latestTechs from 'assets/img/Ic_brain.svg'

import styles from './Benefits.module.scss'

const Benefits = () => {
	const [t] = useTranslation()
	const BENEFITS = [
		{
			icon: flexibility,
			name: t('benefits.flexibility'),
		},
		{
			icon: homeOffice,
			name: t('benefits.homeOffice'),
		},
		{
			icon: workshops,
			name: t('benefits.workshops'),
		},
		{
			icon: snacks,
			name: t('benefits.snacks'),
		},
		{
			icon: remoteWeek,
			name: t('benefits.remoteWeek'),
		},
		{
			icon: latestTechs,
			name: t('benefits.latestTechs'),
		},
	]
	return (
		<section className={styles.benefits} id="benefits">
			<h2 dangerouslySetInnerHTML={{ __html: t('benefits.title') }} className={styles.title}></h2>
			<div className={styles.benefitsList}>
				{BENEFITS.map((item, index) => (
					<Benefit {...item} key={index} />
				))}
			</div>
			<div className={styles.line}></div>
		</section>
	)
}

export default Benefits
