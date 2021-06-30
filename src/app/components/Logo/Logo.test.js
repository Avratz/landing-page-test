import { render, screen } from '@testing-library/react'
import Logo from './Logo'
import LogoFull from './assets/logo_full_color.svg'
import LogoBlack from './assets/Ic_Wolox_Footer.svg'

describe('Logo', () => {
	test('Logo full', () => {
		const component = render(<Logo isFull />)
		const logo = component.container.querySelector('img')

		expect(logo).toHaveAttribute('src', LogoFull)
		expect(logo).toHaveAttribute('alt', 'Wolox')
	})

	test('Logo small', () => {
		const component = render(<Logo />)
		const logo = component.container.querySelector('img')

		expect(logo).toHaveAttribute('src', LogoBlack)
		expect(logo).toHaveAttribute('alt', 'Wolox')
	})
})
