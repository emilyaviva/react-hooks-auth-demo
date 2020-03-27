import React, { useState, useEffect, useCallback } from 'react'
import cookie from 'react-cookies'
import jwt from 'jsonwebtoken'

export const LoginContext = React.createContext()

const { REACT_APP_API_URL, REACT_APP_SECRET } = process.env

function DuAuthMich (props) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  async function login (credentials) {
    const { username, password } = credentials
    try {
      const raw = await fetch(`${REACT_APP_API_URL}/signin`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        }
      })
      const response = await raw.json()
      const token = response.token
      validateToken(token)
    } catch (error) {
      console.error(error)
    }
  }

  async function logout () {
    setLoginState(false, null, {})
  }

  const setLoginState = useCallback(function (loggedIn, token, user) {
    setLoggedIn(loggedIn)
    setUser(user)
    cookie.save('auth', token || '')
  }, [setLoggedIn, setUser])

  const validateToken = useCallback(async function (token) {
    try {
      const user = jwt.verify(token, REACT_APP_SECRET)
      setLoginState(true, token, user)
    } catch (error) {
      setLoginState(false, null, {})
      console.error('Token validation error:', error)
    }
  }, [setLoginState])

  useEffect(() => {
    const cookieToken = cookie.load('auth')
    if (cookieToken) validateToken(cookieToken)
  }, [validateToken])

  return (
    <LoginContext.Provider value={{ loggedIn, user, login, logout }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default DuAuthMich
