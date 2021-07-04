import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from 'i18n/dictionaries'

i18n.use(initReactI18next).init({
	resources,
	lng: 'es',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
