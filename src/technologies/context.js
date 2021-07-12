import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import api from './api/client'

const TechsContext = React.createContext({})

const TechsProvider = ({ children }) => {
	const [technologies, setTechnologies] = React.useState(undefined)
	const [loading, setLoading] = React.useState(true)
	const [t] = useTranslation()

	React.useEffect(() => {
		const lsTechs = JSON.parse(window.localStorage.getItem('TECHS'))

		if (lsTechs !== null) {
			setTechnologies(lsTechs)
			setLoading(false)
		} else {
			const fetchTechs = async () => {
				try {
					const { data, status } = await api.listTechs()
					if (status !== 200) throw new Error(t('generalError.C-3PO'))
					setTechnologies(data)
					setLoading(false)
				} catch (err) {
					// eslint-disable-next-line
					console.error(err)
					setLoading(false)
				}
			}
			fetchTechs()
		}
	}, [t])

	React.useEffect(() => {
		if (technologies) {
			window.localStorage.setItem('TECHS', JSON.stringify(technologies))
		}
	}, [technologies])

	const stateMemo = React.useMemo(
		() => ({
			state: technologies,
		}),
		[technologies],
	)
	if (loading) {
		return <p>Loading...</p>
	}

	return <TechsContext.Provider value={stateMemo}>{children}</TechsContext.Provider>
}

TechsProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export { TechsProvider as Provider, TechsContext as default }
