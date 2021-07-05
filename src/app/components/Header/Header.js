import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from 'app/components/Logo'
import Button from 'app/components/Button'
import ham from 'assets/ham.svg'
import close from 'assets/close.svg'

import styles from './Header.module.scss'

const Header = () => {
	const [t, i18n] = useTranslation()
	const [lang, setLang] = React.useState('es')
	const [visible, setVisible] = React.useState(false)
	const [offset, setOffset] = React.useState(0)

	const changeLanguage = (language) => {
		setLang(language)
		i18n.changeLanguage(language)
	}

	const toggleNav = () => {
		setVisible((prev) => !prev)
	}

	React.useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset)
		}
	}, [offset])

	return (
		<header className={styles.header}>
			<div
				className={
					offset > 100 && !visible ? styles.fixed + ' ' + styles.fixedShadow : styles.fixed
				}
			>
				<div className={styles.top}>
					<Logo isFull />
					<Button className={styles.button} handleClick={toggleNav} theme="icon">
						<img alt="Menu button" src={visible ? close : ham} />
					</Button>
				</div>
				<nav className={visible ? styles.nav + ' ' + styles.visible : styles.nav}>
					<a href="#home">{t('common.home')}</a>
					<a href="#benefits">{t('common.benefits')}</a>
					<Button theme="outline">{t('common.login')}</Button>
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
			</div>
		</header>
	)
}

export default Header
