import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'app/components/Button'

import styles from './Thanks.module.scss'

const Thanks = () => {
	const [t] = useTranslation()
	return (
		<div className={styles.thanks}>
			<h2 dangerouslySetInnerHTML={{ __html: t('thanks.title') }} className={styles.title}></h2>
			<h3>{t('thanks.subtitle')}</h3>
			<Button>{t('thanks.more')}</Button>
		</div>
	)
}

export default Thanks
