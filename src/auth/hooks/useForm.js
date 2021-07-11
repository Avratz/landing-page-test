import React from 'react'
import PropTypes from 'prop-types'
import validations from 'utils/validations'

const useForm = (initialState) => {
	const [form, setform] = React.useState(initialState)
	const [active, setActive] = React.useState({})
	const [error, setError] = React.useState({})
	const [disable, setDisable] = React.useState(true)

	React.useEffect(() => {
		Object.keys(form).forEach((key) => {
			const val = form[key]
			if (active[key]) {
				setError((prev) => ({ ...prev, [key]: undefined }))
				if (validations.isEmpty(val)) {
					setError((prev) => ({ ...prev, [key]: 'auth.error.empty' }))
				}
				if (key === 'email' && validations.notEmail(val)) {
					setError((prev) => ({ ...prev, [key]: 'auth.error.email' }))
				}
				if (key === 'name' || (key === 'surname' && validations.maxLength(val, 30))) {
					setError((prev) => ({ ...prev, [key]: 'auth.error.maxLength' }))
				}
				if (key === 'telephone') {
					if (validations.notNumber(val)) {
						setError((prev) => ({ ...prev, [key]: 'auth.error.notNumber' }))
					}
					if (validations.maxLength(val, 10)) {
						setError((prev) => ({ ...prev, [key]: 'auth.error.maxLengthTel' }))
					}
				}
				if (key === 'password' || key === 'repeatPassword') {
					if (validations.invalidPassword(val)) {
						setError((prev) => ({ ...prev, [key]: 'auth.error.invalidPassword' }))
					}
					if (
						active['password'] &&
						active['repeatPassword'] &&
						form['password'] !== form['repeatPassword']
					) {
						setError((prev) => ({ ...prev, [key]: 'auth.error.passwordDontMatch' }))
					}
				}
				if (key === 'acceptedTerms' && !val) {
					setError((prev) => ({ ...prev, [key]: 'auth.error.acceptedTerms' }))
				}
			}
		})
	}, [form, active])

	React.useEffect(() => {
		Object.keys(error).filter((key) => error[key] !== undefined).length > 0
			? setDisable(true)
			: setDisable(false)
	}, [error])

	const handleChange = (e) => {
		if (e.target) {
			let name = e.target.name
			let val = e.target.value
			if (name === 'acceptedTerms') {
				val = e.target.checked
			}
			setform((prev) => ({ ...prev, [name]: val }))
			setActive((prev) => ({ ...prev, [name]: true }))
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		Object.keys(form).forEach((key) => {
			setActive((prev) => ({ ...prev, [key]: true }))
		})
		if (!disable) {
			//apicall
		}
	}

	return { form, handleSubmit, error, disable, handleChange }
}

useForm.propTypes = {
	initialState: PropTypes.object,
}

export default useForm
