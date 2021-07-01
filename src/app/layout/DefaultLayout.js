import React from 'react'
import PropTypes from 'prop-types'
import Header from 'app/components/Header'
import Footer from 'app/components/Footer'

const DefaultLayout = ({ children }) => {
	return (
		<React.Fragment>
			<Header />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	)
}

DefaultLayout.propTypes = {
	children: PropTypes.node,
}

export default DefaultLayout
