import React from 'react'
import DefaultLayout from 'app/layout/DefaultLayout'
import Technologies from 'technologies/screens/Technologies'
import { Provider as TechsProvider } from 'technologies/context'

const TechPage = () => {
	return (
		<DefaultLayout compact>
			<TechsProvider>
				<Technologies />
			</TechsProvider>
		</DefaultLayout>
	)
}

export default TechPage
