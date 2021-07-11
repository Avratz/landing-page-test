import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Button from 'app/components/Button'
import Input from 'app/components/Input'
import Logo from 'app/components/Logo'
import SelectBox from 'app/components/SelectBox'
import styles from 'auth/styles/Auth.module.scss'
import useForm from 'auth/hooks/useForm'
import { COUNTRIES, PROVINCES } from 'auth/constants'

const Register = () => {
	const [t] = useTranslation()
	const { form, handleSubmit, error, disable, handleChange } = useForm({
		name: '',
		surname: '',
		email: '',
		country: '',
		province: '',
		telephone: '',
		password: '',
		repeatPassword: '',
		acceptedTerms: false,
	})
	return (
		<div className={styles.formBox}>
			<Logo isFull />
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					error={error.name}
					name="name"
					placeholder={t('auth.register.name')}
					type="text"
					onChange={handleChange}
				/>
				<Input
					error={error.surname}
					name="surname"
					placeholder={t('auth.register.surname')}
					type="text"
					onChange={handleChange}
				/>
				<Input
					error={error.email}
					name="email"
					placeholder={t('auth.general.email')}
					type="email"
					onChange={handleChange}
				/>
				<SelectBox
					error={error.country}
					handleChange={handleChange}
					name="country"
					options={COUNTRIES}
					placeholder={t('auth.register.select.country')}
				/>
				<SelectBox
					disabled={form.country ? false : true}
					error={error.country}
					handleChange={handleChange}
					name="province"
					options={form.country ? PROVINCES[form.country] : []}
					placeholder={t('auth.register.select.province')}
				/>
				<Input
					error={error.telephone}
					name="telephone"
					placeholder={t('auth.register.telephone')}
					type="tel"
					onChange={handleChange}
				/>
				<Input
					error={error.password}
					name="password"
					placeholder={t('auth.general.password')}
					type="password"
					onChange={handleChange}
				/>
				<Input
					error={error.repeatPassword}
					name="repeatPassword"
					placeholder={t('auth.register.passwordRepeat')}
					type="password"
					onChange={handleChange}
				/>
				<React.Fragment>
					<label className={styles.terms}>
						{t('auth.register.terms')}
						<input name="acceptedTerms" type="checkbox" onChange={handleChange} />
					</label>
					{error.acceptedTerms !== undefined ? (
						<p className={styles.error}>{t(error.acceptedTerms)}</p>
					) : null}
				</React.Fragment>
				<Button theme={disable ? 'disabled' : 'default'}>{t('common.register')}</Button>
				<Link to="/login">{t('auth.register.haveAccount')}</Link>
			</form>
		</div>
	)
}

export default Register
