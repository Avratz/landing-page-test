import React from 'react'
import AuthContext from 'auth/context'

export function useAuth() {
	return React.useContext(AuthContext)
}
