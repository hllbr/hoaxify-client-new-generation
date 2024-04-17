import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '@/assets/richCat.png'
import { useAuthDispatch, useAuthState } from '../state/context'

export const Navbar = () => {
  const { t } = useTranslation()
  const authState = useAuthState()
  const dispatch = useAuthDispatch()

  const onClickLogout = () => {
    dispatch({ type: 'logout-success' })
  }

  return (
    <nav className='navbar bg-body-tertiary navbar-expand shadow-sm'>
      <div className='container-fluid'>
        <Link className='navbar-brand mb-0 h1 ' to='*'>
          <img src={logo} width={70} height={70} />
          Hoaxify
        </Link>
        <ul className='navbar-nav'>
          {authState.id === 0 && (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/Login'>
                  {t('login')}
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>
                  {t('signUp')}
                </Link>
              </li>
            </>
          )}
          {authState.id > 0 && (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to={`/user/${authState.id}`}>
                  My Profile
                </Link>
              </li>
              <li className='nav-item'>
                <span
                  className='nav-link'
                  role='button'
                  onClick={onClickLogout}
                >
                  Logout
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
