import Axios from 'axios'

const api = Axios.create({
	baseURL: 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com',
	responseType: 'json',
	method: 'get',
	timeout: 10000,
})

export default api
