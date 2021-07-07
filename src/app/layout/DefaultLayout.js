import React from 'react'
import PropTypes from 'prop-types'
import Header from 'app/components/Header'
import Footer from 'app/components/Footer'

const DefaultLayout = ({ children, compact = false }) => {
	return (
		<React.Fragment>
			<Header />
			<main>{children}</main>
			<Footer compact={compact} />
		</React.Fragment>
	)
}

DefaultLayout.propTypes = {
	children: PropTypes.node,
	compact: PropTypes.bool,
}

export default DefaultLayout
