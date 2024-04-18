
import defaultProfileImage from '@/assets/profile.png'
import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import { useAuthState } from '@/shared/state/context'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { updateUser } from './api'

export const ProfileCard = ({ user }) => {
  const authState = useAuthState()
  const { t } = useTranslation()
  const [editMode, setEditMode] = useState(false)
  const isEditButtonVisible = !editMode && authState.id === user?.id
  const [newUsername, setNewUsername] = useState()
  const [apiProgress, setApiProgress] = useState(false)

  const onChangeUsername = event => {
    setNewUsername(event.target.value)
  }

  const onClickSave = async () => {
    setApiProgress(true)
    try {
      await updateUser(user.id, { username: newUsername })
    } catch {
      
    } finally {
      setApiProgress(false)
    }
  }

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
        {!editMode && <span className='fs-3 d-block'>{user.username}</span>}
        {isEditButtonVisible && (
          <Button
            onClick={() => setEditMode(true)}
            text={t('Profile.editProfile')}
          />
        )}
        {editMode && (
          <>
            <Input
              onChange={onChangeUsername}
              defaultValue={user.username}
              label={t('Profile.username')}
            />
            <Button apiProgress={apiProgress} disabled={apiProgress} onClick={onClickSave} text={t('Profile.save')} />
            <div className='d-inline m-2'></div>
            <Button
              disabled={apiProgress}
              onClick={() => setEditMode(false)}
              className={'btn btn-outline-secondary'}
              text={t('Profile.cancel')}
            />
          </>
        )}
      </div>
    </div>
  )
}
