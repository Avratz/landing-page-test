import React from 'react'
import TechsContext from 'technologies/context'

export function useTechs() {
	return React.useContext(TechsContext)
}
