import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useLocation, Link } from 'react-router-dom'
import Logo from 'app/components/Logo'
import Button from 'app/components/Button'
import ham from 'assets/img/ham.svg'
import close from 'assets/img/close.svg'
import { useAuth } from 'auth/hooks/useAuth'

import styles from './Header.module.scss'

const Header = () => {
	const [t, i18n] = useTranslation()
	const [lang, setLang] = React.useState('es')
	const [visible, setVisible] = React.useState(false)
	const [offset, setOffset] = React.useState(0)
	const history = useHistory()
	const location = useLocation()
	const { state } = useAuth()

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
		const handleScroll = () => {
			setOffset(window.pageYOffset)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollTo = React.useCallback(
		(e, section, behavior = 'smooth') => {
			if (e !== undefined) e.preventDefault()
			const $section = document.querySelector(section)
			if ($section && (section !== '#home' || location.pathname === '/')) {
				$section.scrollIntoView({ behavior, block: 'center' })
			} else {
				history.push('/', { section })
			}
			if (visible) {
				setVisible(false)
			}
		},
		[history, location.pathname, visible],
	)
	React.useEffect(() => {
		let isMounted = true
		if (isMounted) {
			const section = location.state?.section
			if (section && section !== '#home') {
				scrollTo(undefined, section)
			}
		}
		return () => {
			isMounted = false
		}
	}, [location, scrollTo])

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
						{state.user === undefined ? (
							<Button handleClick={() => history.push('/login')} theme="outline">
								{t('common.login')}
							</Button>
						) : state.favorites.length > 0 ? (
							<Link to="/technologies">
								{t('common.favorites')}
								{'(' + state.favorites.length + ')'}
							</Link>
						) : null}
						{lang === 'en' ? (
							<a href="#changeLanguage" onClick={() => changeLanguage('es')}>
								English
							</a>
						) : (
							<a href="#changeLanguage" onClick={() => changeLanguage('en')}>
								Español
							</a>
						)}
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
