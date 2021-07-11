import React from 'react'
import { Route as ReactRoute, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth } from 'auth/hooks/useAuth'

const Route = ({ redirectTo, onlyForAuth = false, authNeeded = false, ...props }) => {
	const { state } = useAuth()
	const authorized = state ? true : false
	if (authNeeded && !authorized) {
		return (
			<Redirect
				to={{
					pathname: '/login',
				}}
			/>
		)
	}
	if (onlyForAuth && authorized) {
		return (
			<Redirect
				to={{
					pathname: '/technologies',
				}}
			/>
		)
	}
	return redirectTo ? <Redirect to={redirectTo} /> : <ReactRoute {...props} />
}

Route.propTypes = {
	props: PropTypes.object,
	authNeeded: PropTypes.bool,
	onlyForAuth: PropTypes.bool,
	redirectTo: PropTypes.string,
}
export default Route
