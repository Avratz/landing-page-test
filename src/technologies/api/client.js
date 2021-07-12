import api from 'api'

const apiCalls = {
	listTechs: () => api.get('/techs'),
}
export default apiCalls
