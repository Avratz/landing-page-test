const validations = {
	isEmpty(val) {
		if (val !== undefined && val !== '') {
			return false
		}
		return true
	},
	notEmail(val) {
		if (val === undefined || val === '') {
			return true
		}
		const email = val.trim().toLowerCase()
		// eslint-disable-next-line
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return !re.test(email)
	},
	maxLength(val, length) {
		if (val === undefined || val === '') {
			return true
		}
		return val.length > length ? true : false
	},
	invalidPassword(val) {
		if (val === undefined || val === '') {
			return true
		}
		const containLettersAndNumbers = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/.test(val)
		if (containLettersAndNumbers && val.length >= 6) {
			return false
		}
		return true
	},
	notNumber(val) {
		if (val === undefined || val === '') {
			return true
		}
		const onlyNumbers = /^[0-9]+$/.test(val)
		if (onlyNumbers) {
			return false
		}
		return true
	},
}

export default validations
