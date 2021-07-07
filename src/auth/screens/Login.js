import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Button from 'app/components/Button'
import Input from 'app/components/Input'
import Logo from 'app/components/Logo'
import styles from 'auth/styles/Auth.module.scss'

const Login = () => {
	const [t] = useTranslation()
	return (
		<div className={styles.formBox}>
			<Logo isFull />
			<form className={styles.form}>
				<Input placeholder={t('auth.general.email')} type="text" />
				<Input placeholder={t('auth.general.password')} type="password" />
				<a href="#forgot">{t('auth.login.forgot')}</a>
				<Button>{t('common.login')}</Button>
				<Link to="/register">{t('auth.login.dontHave')}</Link>
			</form>
		</div>
	)
}

export default Login
