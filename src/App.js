import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Route from 'router/components/Route'

import 'styles/Global.scss'

const HomePage = React.lazy(() => import('pages/Home'))
const LoginPage = React.lazy(() => import('pages/Login'))
const RegisterPage = React.lazy(() => import('pages/Register'))
const TechPage = React.lazy(() => import('pages/Technologies'))
const TosPage = React.lazy(() => import('pages/ToS'))

function App() {
	return (
		<Router>
			<React.Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact component={HomePage} path="/" />
					<Route onlyForAuth component={LoginPage} path="/login" />
					<Route onlyForAuth component={RegisterPage} path="/register" />
					<Route authNeeded component={TechPage} path="/technologies" />
					<Route component={TosPage} path="/terms-and-conditions" />
				</Switch>
			</React.Suspense>
		</Router>
	)
}

export default App
