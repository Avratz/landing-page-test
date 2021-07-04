import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function ErrorComponent() {
	const [t] = useTranslation()
	return <h1>{t('generalError.C-3PO')}</h1>
}

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false,
		}
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	render() {
		return this.state.hasError ? <ErrorComponent /> : this.props.children
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node,
}

export default ErrorBoundary
