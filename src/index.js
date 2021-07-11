import React from 'react'
import ReactDOM from 'react-dom'
import ErrorComponent from 'app/components/ErrorBoundary'
import { Provider as AuthProvider } from 'auth/context'

import App from './App'
import 'i18n'

ReactDOM.render(
	<React.StrictMode>
		<ErrorComponent>
			<AuthProvider>
				<App />
			</AuthProvider>
		</ErrorComponent>
	</React.StrictMode>,
	document.getElementById('root'),
)
