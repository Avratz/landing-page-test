import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from 'app/components/Logo'
import Button from 'app/components/Button'
import ham from 'assets/img/ham.svg'
import close from 'assets/img/close.svg'

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
		if (offset > 0 && !visible) {
			scrollTo(undefined, '#home', 'auto')
		}
		setVisible((prev) => !prev)
	}

	React.useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset)
		}
	}, [])

	const scrollTo = (e, section, behavior = 'smooth') => {
		if (e !== undefined) e.preventDefault()
		const $section = document.querySelector(section)
		$section.scrollIntoView({ behavior, block: 'nearest' })
		if (visible) {
			setVisible(false)
		}
	}

	return (
		<header className={styles.header} id="home">
			<div
				className={
					offset > 150 && !visible ? styles.fixed + ' ' + styles.fixedShadow : styles.fixed
				}
			>
				<div className={styles.container}>
					<div className={visible ? styles.top + ' ' + styles.show : styles.top}>
						<Logo isFull />
						<Button className={styles.button} handleClick={toggleNav} theme="icon">
							<img alt="" src={visible ? close : ham} />
						</Button>
					</div>
					<nav className={visible ? styles.nav + ' ' + styles.visible : styles.nav}>
						<a href="#home" onClick={(e) => scrollTo(e, '#home')}>
							{t('common.home')}
						</a>
						<a href="#benefits" onClick={(e) => scrollTo(e, '#benefits')}>
							{t('common.benefits')}
						</a>
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
			</div>
		</header>
	)
}

export default Header
