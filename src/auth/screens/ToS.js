import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from 'auth/styles/Auth.module.scss'

const ToS = () => {
	const [t] = useTranslation()
	return (
		<div className={styles.tos}>
			<h2 className={styles.tosTitle}>{t('auth.register.termsTitle')}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maiores commodi culpa quis
				non. Nemo, aliquam quidem? Quisquam non suscipit quo doloremque recusandae asperiores fuga,
				voluptatem temporibus magni commodi reprehenderit!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maiores commodi culpa quis
				non. Nemo, aliquam quidem? Quisquam non suscipit quo doloremque recusandae asperiores fuga,
				voluptatem temporibus magni commodi reprehenderit!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maiores commodi culpa quis
				non. Nemo, aliquam quidem? Quisquam non suscipit quo doloremque recusandae asperiores fuga,
				voluptatem temporibus magni commodi reprehenderit!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maiores commodi culpa quis
				non. Nemo, aliquam quidem? Quisquam non suscipit quo doloremque recusandae asperiores fuga,
				voluptatem temporibus magni commodi reprehenderit!
			</p>
		</div>
	)
}

export default ToS
