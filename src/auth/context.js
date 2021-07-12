import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import SkeletonLayout from 'app/layout/SkeletonLayout/SkeletonLayout'
import SkeletonTech from 'technologies/screens/SkeletonTech'

import api from './api/client'

const AuthContext = React.createContext({})

const AuthProvider = ({ children }) => {
	const [user, setUser] = React.useState(undefined)
	const [favorites, setFavorites] = React.useState([])
	const [loading, setLoading] = React.useState(true)
	const [t] = useTranslation()

	React.useEffect(() => {
		const lsUser = JSON.parse(window.localStorage.getItem('USER'))
		const lsFavorites = JSON.parse(window.localStorage.getItem('FAVORITES'))

		if (lsUser !== null) {
			setUser(lsUser)
		}
		if (lsFavorites !== null) {
			setFavorites(lsFavorites)
		}
		setLoading(false)
	}, [])

	React.useEffect(() => {
		if (user) {
			window.localStorage.setItem('USER', JSON.stringify(user))
		}
	}, [user])

	React.useEffect(() => {
		if (favorites) {
			window.localStorage.setItem('FAVORITES', JSON.stringify(favorites))
		}
	}, [favorites])

	const signup = React.useCallback(
		async (form) => {
			setLoading(true)
			try {
				const { data, status } = await api.signup(form)
				if (status !== 200) throw new Error(t('generalError.C-3PO'))
				let newUser = { ...form, ...data }
				setUser(newUser)
			} catch (e) {
				//eslint-disable-next-line
				console.error(e)
			}
			setLoading(false)
		},
		[t],
	)
	const addFav = React.useCallback(
		(tech) => {
			if (tech !== undefined) {
				let newFavs = [...favorites, tech]
				setFavorites(newFavs)
			}
		},
		[favorites],
	)

	const removeFav = React.useCallback(
		(tech) => {
			if (tech !== undefined) {
				let newFavs = favorites.filter((fav) => fav.tech !== tech)
				setFavorites(newFavs)
			}
		},
		[favorites],
	)

	const actions = React.useMemo(
		() => ({
			signup,
			addFav,
			removeFav,
		}),
		[signup, addFav, removeFav],
	)
	const stateMemo = React.useMemo(
		() => ({
			state: { favorites, user },
			actions,
		}),
		[user, favorites, actions],
	)

	if (loading)
		return (
			<SkeletonLayout header>
				<SkeletonTech />
			</SkeletonLayout>
		)
	return <AuthContext.Provider value={stateMemo}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export { AuthProvider as Provider, AuthContext as default }
