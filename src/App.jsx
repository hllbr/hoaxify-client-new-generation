import { Outlet } from 'react-router-dom'
import { LanguageSelector } from './shared/components/LanguageSelector'
import { AuthenticationContext } from './shared/state/context'
import { Navbar } from './shared/components/Navbar'

const App = () => {
  return (
    <AuthenticationContext>
      {/* <Provider store={store}> */}
      <Navbar />
      <div className='container mt-4'>
        <Outlet />
        <LanguageSelector />
      </div>
      {/* </Provider> */}
    </AuthenticationContext>
  )
}

export default App
