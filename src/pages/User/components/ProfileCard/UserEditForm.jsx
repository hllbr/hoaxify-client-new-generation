import { Alert } from '@/shared/components/Alert'
import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import { useAuthDispatch, useAuthState } from '@/shared/state/context'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { updateUser } from './api'

export function UserEditForm({ setEditMode, setTempImage }) {
  const { t } = useTranslation()
  const authState = useAuthState()
  const [newUsername, setNewUsername] = useState(authState.username)
  const [apiProgress, setApiProgress] = useState(false)
  const [errors, setErrors] = useState({})
  const [generalError, setGeneralError] = useState('')
  const dispatch = useAuthDispatch()
  const [newImage, setNewImage] = useState()

  const onChangeUsername = event => {
    setNewUsername(event.target.value)
    setErrors(lastErrors => {
      return { ...lastErrors, username: undefined }
    })
  }

  const onCancelClick = () => {
    setEditMode(false)
    setNewUsername(authState.username)
    setErrors({})
    setGeneralError('')
    setNewImage()
    setTempImage()
  }

  const onSelectImage = event => {
    setErrors(lastErrors => {
      return { ...lastErrors, image: undefined }
    })
    if (event.target.files.length < 1) return
    const file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      const data = fileReader.result
      setNewImage(data)
      setTempImage(data)
    }
    fileReader.readAsDataURL(file)
  }

  const onSubmit = async event => {
    event.preventDefault()
    setApiProgress(true)
    setErrors({})
    setGeneralError()
    try {
      const { data } = await updateUser(authState.id, {
        username: newUsername,
        image: newImage,
      })
      dispatch({
        type: 'user-update-success',
        data: { username: data.username, image: data.image },
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
      <Input
        label={t('Profile.image')}
        type='file'
        onChange={onSelectImage}
        error={errors.image}
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
