import {
  Outlet,
} from 'react-router-dom'
import { LanguageSelector } from './shared/components/LanguageSelector'
import { Navbar } from './shared/components/NavBar'
import { Login } from './pages/Login'
import { AuthenticationContext } from './shared/state/context'
const App = () => {
  return (
    <AuthenticationContext>
      <Navbar/>
      <div className='container mt-4'>
        {/* <Login onLoginSuccess={onLoginSuccess} /> */}
        <Outlet />
        <LanguageSelector />
      </div>
    </AuthenticationContext>
  )
}

export default App
