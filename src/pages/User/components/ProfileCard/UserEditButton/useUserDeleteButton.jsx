import { useAuthDispatch, useAuthState } from '@/shared/state/context'
import { deleteUser } from './api'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function useUserDeleteButton() {
  const { id } = useAuthState()
  const dispatch = useAuthDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [apiProgress, setApiProgress] = useState(false)

  const onClick = useCallback(async () => {
    const result = confirm(t('Profile.deleteConfirm'))
    if (result) {
      setApiProgress(true)
      try {
        await deleteUser(id)
        dispatch({ type: 'logout-success' })
        navigate('/')
      } catch {
      } finally {
        setApiProgress(false)
      }
    }
  }, [id])

  return { apiProgress, onClick }
}
