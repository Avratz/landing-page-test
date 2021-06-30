import { render } from '@testing-library/react'
import Header from './Header'
import LogoFull from '../Logo/assets/logo_full_color.svg'
describe('Header', () => {
	const component = render(<Header />)

	test('Renders wolox logo', () => {
		const logo = component.container.querySelector('img')
		expect(logo).toHaveAttribute('src', LogoFull)
		expect(logo).toBeInTheDocument()
	})
})
