import { Input } from '@/shared/components/Input'
import { usePasswordResetRequest } from './usePasswordResetRequest'
import { Alert } from '@/shared/components/Alert'
import { Button } from '@/shared/components/Button'
import { useTranslation } from 'react-i18next'

export function PasswordResetRequest() {
  const { onSubmit, onChangeEmail, apiProgress, success, error, generalError } =
    usePasswordResetRequest()
  const { t } = useTranslation()
  return (
    <div className='container'>
      <div className='col-lg-6 offset-lg-3 col-sm-8 offset-sm-2'>
        <form className='card' onSubmit={onSubmit}>
          <div className='card-header text-center'>
            <span className='fs-3'>{t('Login.resetPassword')}</span>
          </div>
          <div className='card-body'>
            <Input
              id='email'
              label={t('Login.email')}
              error={error}
              onChange={onChangeEmail}
            />
            {success && <Alert message={success} />}
            {generalError && (
              <Alert styleType='danger' message={generalError} />
            )}
            <div className='text-center'>
              <Button apiProgress={apiProgress} text={t('Login.reset')} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
