import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from 'app/components/Logo'
import Button from 'app/components/Button'

const Header = () => {
	const [t, i18n] = useTranslation()
	const [lang, setLang] = React.useState('es')

	const changeLanguage = (language) => {
		setLang(language)
		i18n.changeLanguage(language)
	}

	return (
		<header>
			<Logo isFull />
			<nav>
				<a href="#home">{t('common.home')}</a>
				<a href="#benefits">{t('common.benefits')}</a>
				<Button title={t('common.login')} />
				{lang === 'en' ? (
					<a href="#changeLanguage" onClick={() => changeLanguage('es')}>
						ES
					</a>
				) : (
					<a href="#changeLanguage" onClick={() => changeLanguage('en')}>
						EN
					</a>
				)}
			</nav>
		</header>
	)
}

export default Header
