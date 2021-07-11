import React from 'react'
import { useTranslation } from 'react-i18next'

const ToS = () => {
	const [t] = useTranslation()
	return (
		<div className="container">
			<h2>{t('auth.register.termsTitle')}</h2>
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
