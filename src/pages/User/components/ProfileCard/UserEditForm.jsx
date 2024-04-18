import { Alert } from '@/shared/components/Alert'
import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import { useAuthDispatch, useAuthState } from '@/shared/state/context'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { updateUser } from './api'

export function UserEditForm({ setEditMode }) {
  const { t } = useTranslation()
  const authState = useAuthState()
  const [newUsername, setNewUsername] = useState(authState.username)
  const [apiProgress, setApiProgress] = useState(false)
  const [errors, setErrors] = useState({})
  const [generalError, setGeneralError] = useState('')
  const dispatch = useAuthDispatch()

  const onChangeUsername = event => {
    setNewUsername(event.target.value)
    setErrors({})
  }

  const onCancelClick = () => {
    setEditMode(false)
    setNewUsername(authState.username)
    setErrors({})
    setGeneralError('')
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setApiProgress(true)
    setErrors({})
    setGeneralError()
    try {
      await updateUser(authState.id, { username: newUsername })
      dispatch({
        type: 'user-update-success',
        data: { username: newUsername },
      })
      setEditMode(false)
    } catch (axiosError) {
      if (axiosError?.response?.data) {
        if (axiosError?.response?.data?.status === 400) {
          setErrors(axiosError?.response?.data?.validationErrors)
        } else {
          setGeneralError(axiosError?.response?.data?.message)
        }
      } else {
        setGeneralError(t('Unexpected error occured. Please try again'))
      }
    } finally {
      setApiProgress(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        onChange={onChangeUsername}
        defaultValue={authState.username}
        label={t('Profile.username')}
        error={errors.username}
      />
      {generalError && <Alert message={generalError} styleType='danger' />}
      <Button
        apiProgress={apiProgress}
        disabled={apiProgress}
        text={t('Profile.save')}
        type={'submit'}
      />
      <div className='d-inline m-2'></div>
      <Button
        disabled={apiProgress}
        onClick={onCancelClick}
        className={'btn btn-outline-secondary'}
        text={t('Profile.cancel')}
        type={'button'}
      />
    </form>
  )
}
