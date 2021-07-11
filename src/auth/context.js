import React from 'react'
import PropTypes from 'prop-types'

import api from './api/client'

const AuthContext = React.createContext({})

const AuthProvider = ({ children }) => {
	const [user, setUser] = React.useState(undefined)

	React.useEffect(() => {
		const lsUser = JSON.parse(window.localStorage.getItem('USER'))

		if (lsUser !== null) {
			setUser(lsUser)
		}
	}, [])

	React.useEffect(() => {
		if (user) {
			window.localStorage.setItem('USER', JSON.stringify(user))
		}
	}, [user])

	const signup = React.useCallback(async (form) => {
		try {
			const { data, status } = await api.signup(form)
			if (status === 200) {
				let newUser = { ...form, ...data, favorites: [] }
				setUser(newUser)
			}
		} catch (e) {
			//eslint-disable-next-line
			console.error(e)
		}
	}, [])
	const addFav = React.useCallback(() => {
		//
	}, [])

	const actions = React.useMemo(
		() => ({
			signup,
			addFav,
		}),
		[signup, addFav],
	)
	const stateMemo = React.useMemo(
		() => ({
			state: user,
			actions,
		}),
		[user, actions],
	)

	return <AuthContext.Provider value={stateMemo}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export { AuthProvider as Provider, AuthContext as default }
