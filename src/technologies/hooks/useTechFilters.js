import React from 'react'
import PropTypes from 'prop-types'

const useTechFilters = (intialState) => {
	const [technologies, setTechnologies] = React.useState(intialState)
	const [order, setOrder] = React.useState('ASC')
	const [key, setKey] = React.useState('')

	React.useEffect(() => {
		const ordered = [
			...intialState
				.sort((a, b) => a.tech.localeCompare(b.tech))
				.filter(
					({ tech, type }) =>
						tech.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
						type.toLowerCase().indexOf(key.toLowerCase()) !== -1,
				),
		]
		if (order === 'ASC') {
			setTechnologies(ordered)
		} else if (order === 'DESC') {
			setTechnologies(ordered.reverse())
		}
	}, [order, intialState, key])

	const toggleOrderByName = () => {
		if (order === 'ASC') {
			setOrder('DESC')
		} else if (order === 'DESC') {
			setOrder('ASC')
		}
	}

	const searchBy = (e) => {
		let val = e.target.value
		if (val !== undefined) {
			setKey(val)
		}
	}
	return { searchBy, toggleOrderByName, technologies, order }
}

useTechFilters.propTypes = {
	initialState: PropTypes.object,
}

export default useTechFilters
