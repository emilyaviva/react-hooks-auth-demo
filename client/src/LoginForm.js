import React, { useContext } from 'react'
import { LoginContext } from './context'
import useForm from './useForm'

function LoginForm () {
  const { loggedIn, login, logout } = useContext(LoginContext)
  const { handleSubmit, handleTextInput } = useForm(login)

  return loggedIn
    ? <button onClick={logout}>Log Out</button>
    : (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          {...handleTextInput}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          {...handleTextInput}
        />
        <button value="submit">Log In</button>
      </form>
    )
}

export default LoginForm
