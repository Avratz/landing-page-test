import React from 'react'
import PropTypes from 'prop-types'

import api from './api/client'

const TechsContext = React.createContext({})
const resource = api()

const TechsProvider = ({ children }) => {
	const techs = resource.listTechs.read()
	const stateMemo = React.useMemo(
		() => ({
			state: techs,
		}),
		[techs],
	)
	return <TechsContext.Provider value={stateMemo}>{children}</TechsContext.Provider>
}

TechsProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export { TechsProvider as Provider, TechsContext as default }
