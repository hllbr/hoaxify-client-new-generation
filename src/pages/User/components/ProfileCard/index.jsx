import defaultProfileImage from '@/assets/profile.png'
import { Button } from '@/shared/components/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

// eslint-disable-next-line
export const ProfileCard = ({ user }) => {
  // const authState = useAuthState()
  const authState = useSelector((store) => store.auth)
  const { t } = useTranslation()
  return (
    <div className='card'>
      <div className='card-header text-center'>
        <img
          src={defaultProfileImage}
          width={200}
          className='img-fluid rounded-circle shadow-sm me-2'
        />
      </div>
      <div className='card-body text-center'>
        {/* eslint-disable-next-line */}
        <span className='fs-3'>{user.username}</span>
        {/* eslint-disable-next-line */}
        {authState.id === user.id && (
          <Button text={t('Profile.editProfile')}></Button>
        )}
      </div>
    </div>
  )
}
