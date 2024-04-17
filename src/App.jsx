import { Outlet } from 'react-router-dom'
import { LanguageSelector } from './shared/components/LanguageSelector'
import { Navbar } from './shared/components/NavBar'
// import { AuthenticationContext } from './shared/state/context'
import { Provider } from 'react-redux'
import { store } from './shared/state/redux'

const App = () => {
  return (
    // <AuthenticationContext>
      <Provider store={store}>
        <Navbar />
        <div className='container mt-4'>
          <Outlet />
          <LanguageSelector />
        </div>
      </Provider>
    // </AuthenticationContext>
  )
}

export default App
