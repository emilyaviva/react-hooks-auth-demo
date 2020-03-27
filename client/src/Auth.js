import { useContext } from 'react'
import { LoginContext } from './context'

function Auth ({ children, permission }) {
  const { loggedIn, user } = useContext(LoginContext)
  const isPermissible = permission
    ? user?.permissions?.includes(permission)
    : true // if no permission prop, you only need to be logged in
  const ok = loggedIn && Object.keys(user).length !== 0 && isPermissible
  return ok ? children : null
}

export default Auth
