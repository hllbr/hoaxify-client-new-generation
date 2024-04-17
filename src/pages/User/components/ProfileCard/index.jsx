import defaultProfileImage from '@/assets/profile.png'
import { Button } from '@/shared/components/Button'
import { useAuthState } from '@/shared/state/context'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line
export const ProfileCard = ({ user }) => {
  const authState = useAuthState()
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
