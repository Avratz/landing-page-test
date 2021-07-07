import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Route from 'router/components/Route'
import HomePage from 'pages/Home'
import LoginPage from 'pages/Login'
import RegisterPage from 'pages/Register'
import 'styles/Global.scss'
import TechPage from 'pages/Technologies'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact component={HomePage} path="/" />
				<Route component={LoginPage} path="/login" />
				<Route component={RegisterPage} path="/register" />
				<Route authNeeded component={TechPage} path="/technologies" />
			</Switch>
		</Router>
	)
}

export default App
