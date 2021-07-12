import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Route from 'router/components/Route'
import Loading from 'app/components/Loading/Loading'
import SkeletonTech from 'technologies/screens/SkeletonTech'
import SkeletonLayout from 'app/layout/SkeletonLayout/SkeletonLayout'

import 'styles/Global.scss'

const HomePage = React.lazy(() => import('pages/Home'))
const LoginPage = React.lazy(() => import('pages/Login'))
const RegisterPage = React.lazy(() => import('pages/Register'))
const TechPage = React.lazy(() => import('pages/Technologies'))
const TosPage = React.lazy(() => import('pages/ToS'))

function App() {
	return (
		<Router>
			<React.Suspense
				fallback={
					<SkeletonLayout header>
						<Loading />
					</SkeletonLayout>
				}
			>
				<Switch>
					<Route exact component={HomePage} path="/" />
					<Route onlyForAuth component={LoginPage} path="/login" />
					<Route onlyForAuth component={RegisterPage} path="/register" />
					<Route component={TosPage} path="/terms-and-conditions" />
					<React.Suspense
						fallback={
							<SkeletonLayout header>
								<SkeletonTech />
							</SkeletonLayout>
						}
					>
						<Route authNeeded component={TechPage} path="/technologies" />
					</React.Suspense>
				</Switch>
			</React.Suspense>
		</Router>
	)
}

export default App
