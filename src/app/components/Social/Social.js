import React from 'react'
import { useTranslation } from 'react-i18next'
import small from 'assets/img/social/img_woloxer.png'
import medium from 'assets/img/social/img_woloxer@2x.png'
import large from 'assets/img/social/img_woloxer@3x.png'
import twitter from 'assets/img/twitter.svg'
import Button from 'app/components/Button'

import styles from './Social.module.scss'

const Social = () => {
	const [t] = useTranslation()
	return (
		<section className={styles.social}>
			<div className={styles.titleContainer}>
				<h2 dangerouslySetInnerHTML={{ __html: t('social.title') }} className={styles.title}></h2>
			</div>
			<figure className={styles.woloxers}>
				<div className={styles.inner}>
					<h2
						dangerouslySetInnerHTML={{ __html: t('social.woloxers') }}
						className={styles.woloxersTitle}
					></h2>
					<div className={styles.twitter}>
						<img alt="" className={styles.twitterImg} src={twitter} />
						<p>@wolox</p>
					</div>
					<Button className={styles.button}>{t('social.follow')}</Button>
				</div>

				<img
					alt=""
					className={styles.imgWoloxer}
					src={small}
					srcSet={`${large} 1260w, ${medium} 840w, ${small} 420w`}
				/>
			</figure>
		</section>
	)
}

export default Social
