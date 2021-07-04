import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
	const [t] = useTranslation()
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: t('landing.hero.welcome') }}></div>
		</div>
	)
}

export default Hero
