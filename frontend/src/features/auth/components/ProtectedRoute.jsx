import React from 'react'
import { useAuth } from '../hooks/useAuth.js'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {

    const {user, loading} = useAuth()

    if (loading) {
        return <div>Loading...</div> // Or a loading spinner
    }

    if(!user)
    {
        return <Navigate to = '/login' replace /> 
    }
  return children
}

export default ProtectedRoute
