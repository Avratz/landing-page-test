import React from 'react'
import { Route as ReactRoute, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const Route = ({ redirectTo, authNeeded = false, ...props }) => {
	const notAuthorized = true
	if (authNeeded && notAuthorized) {
		return (
			<Redirect
				to={{
					pathname: '/login',
				}}
			/>
		)
	}
	return redirectTo ? <Redirect to={redirectTo} /> : <ReactRoute {...props} />
}

Route.propTypes = {
	props: PropTypes.object,
	authNeeded: PropTypes.bool,
	redirectTo: PropTypes.string,
}
export default Route
