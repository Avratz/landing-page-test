import React from 'react'
import { useTranslation } from 'react-i18next'
import small from 'assets/img/hero/Ic_ilustra_Hero.png'
import medium from 'assets/img/hero/Ic_ilustra_Hero@2x.png'
import large from 'assets/img/hero/Ic_ilustra_Hero@3x.png'

import styles from './Hero.module.scss'

const Hero = () => {
	const [t] = useTranslation()
	return (
		<section className={styles.hero}>
			<h2 dangerouslySetInnerHTML={{ __html: t('hero.welcome') }} className={styles.title}></h2>
			<figure className={styles.heroImg}>
				<img alt="" src={small} srcSet={`${large} 1260w, ${medium} 840w, ${small} 420w`} />
			</figure>
		</section>
	)
}

export default Hero
