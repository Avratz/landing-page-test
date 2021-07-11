import api from 'api'

const apiCalls = {
	signup: (data) => api.post('/signup', data),
}
export default apiCalls
