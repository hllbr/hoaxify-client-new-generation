import { Button } from '@/shared/components/Button'
import { useTranslation } from 'react-i18next'
import { useUserDeleteButton } from './useUserDeleteButton'

export function UserDeleteButton() {
  const { apiProgress, onClick } = useUserDeleteButton()
  const { t } = useTranslation()
  return (
    <Button
      className={'btn btn-danger'}
      text={t('Profile.delete')}
      apiProgress={apiProgress}
      onClick={onClick}
    />
  )
}
