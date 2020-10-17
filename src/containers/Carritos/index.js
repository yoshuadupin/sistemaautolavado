import React, { useState } from 'react'
import { Alert, Button } from "antd"
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

const CarritosContainer = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }
    return (
        <div>
            <h2>Profile</h2>
            {error && <Alert message={error} type="warning" />}
            <strong> Email:</strong>{currentUser.email}

            <Button onClick={handleLogout} type="link">
                Log Out
            </Button>
        </div>
    )
}

export default CarritosContainer
