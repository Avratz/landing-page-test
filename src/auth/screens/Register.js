import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Button from 'app/components/Button'
import Input from 'app/components/Input'
import Logo from 'app/components/Logo'
import styles from 'auth/styles/Auth.module.scss'

const Register = () => {
	const [t] = useTranslation()
	return (
		<div className={styles.formBox}>
			<Logo isFull />
			<form className={styles.form}>
				<Input placeholder={t('auth.register.name')} type="text" />
				<Input placeholder={t('auth.register.surname')} type="text" />
				<Input placeholder={t('auth.general.email')} type="text" />
				<Input placeholder={t('auth.register.telephone')} type="text" />
				<Input placeholder={t('auth.register.surname')} type="text" />
				<Input placeholder={t('auth.general.password')} type="password" />
				<Input placeholder={t('auth.register.passwordRepeat')} type="password" />
				<label>
					{t('auth.register.terms')}
					<input type="checkbox" />
				</label>
				<Button>{t('common.register')}</Button>
				<Link to="/login">{t('auth.register.haveAccount')}</Link>
			</form>
		</div>
	)
}

export default Register
