import { Button } from '@/shared/components/Button'
import { useAuthState } from '@/shared/state/context'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProfileImage } from '@/shared/components/ProfileImage'
import { UserEditForm } from './UserEditForm'
import { UserDeleteButton } from './UserEditButton'

export const ProfileCard = ({ user }) => {
  const authState = useAuthState()
  const { t } = useTranslation()
  const [editMode, setEditMode] = useState(false)
  const isLoggedInUser = !editMode && authState.id === user?.id
  const [tempImage, setTempImage] = useState()

  const visibileUsername =
    authState.id === user.id ? authState.username : user.username

  return (
    <div className='card'>
      <div className='card-header text-center'>
        <ProfileImage width={200} tempImage={tempImage} image={user.image} />
      </div>
      <div className='card-body text-center'>
        {!editMode && <span className='fs-3 d-block'>{visibileUsername}</span>}
        {isLoggedInUser && (
          <>
            <Button
              onClick={() => setEditMode(true)}
              text={t('Profile.editProfile')}
            />
            <div className='d-inline m-2'></div>
            <UserDeleteButton />
          </>
        )}
        {editMode && (
          <UserEditForm setEditMode={setEditMode} setTempImage={setTempImage} />
        )}
      </div>
    </div>
  )
}
