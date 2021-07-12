import api, { wrapPromise } from 'api'

const apiCalls = () => {
	const techs = getTechs()
	return {
		listTechs: wrapPromise(techs),
	}
}

const getTechs = async () => {
	try {
		const { data, status } = await api.get('/techs')
		if (status !== 200) throw new Error('Something has happend.')
		return data
	} catch (err) {
		// eslint-disable-next-line
		console.error(err)
	}
}
export default apiCalls
