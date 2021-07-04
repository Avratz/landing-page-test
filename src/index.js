import React from 'react'
import ReactDOM from 'react-dom'
import ErrorComponent from 'app/components/ErrorBoundary'

import App from './App'
import 'i18n'

ReactDOM.render(
	<React.StrictMode>
		<ErrorComponent>
			<App />
		</ErrorComponent>
	</React.StrictMode>,
	document.getElementById('root'),
)
