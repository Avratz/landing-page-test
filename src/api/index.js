import Axios from 'axios'

const api = Axios.create({
	baseURL: 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com',
	responseType: 'json',
	method: 'get',
	timeout: 10000,
})

export const wrapPromise = (promise) => {
	let status = 'pending'
	let result
	let suspender = promise
		.then((res) => {
			status = 'success'
			result = res
		})
		.catch((err) => {
			status = 'error'
			result = err
		})

	return {
		read() {
			if (status === 'pending') {
				throw suspender
			} else if (status === 'error') {
				throw result
			}

			return result
		},
	}
}

export default api
