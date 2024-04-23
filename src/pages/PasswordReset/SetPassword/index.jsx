import { Input } from '@/shared/components/Input'
import { Alert } from '@/shared/components/Alert'
import { Button } from '@/shared/components/Button'
import { useSetPassword } from './useSetPassword'
import { useTranslation } from 'react-i18next'

export function SetPassword() {
  const {
    apiProgress,
    errors,
    generalError,
    onChangePassword,
    onChangePasswordRepeat,
    onSubmit,
    success,
    disabled,
  } = useSetPassword()
  const { t } = useTranslation()
  return (
    <div className='container'>
      <div className='col-lg-6 offset-lg-3 col-sm-8 offset-sm-2'>
        <form className='card' onSubmit={onSubmit}>
          <div className='card-header text-center'>
            <span className='fs-3'>{t('Profile.setPassword')}</span>
          </div>
          <div className='card-body'>
            <Input
              id='password'
              label={t('signupPage.password')}
              error={errors.password}
              type='password'
              onChange={onChangePassword}
            />
            <Input
              id='passwordRepeat'
              label={t('signupPage.passwordRepeat')}
              error={errors.passwordRepeat}
              type='password'
              onChange={onChangePasswordRepeat}
            />
            {success && <Alert message={success} />}
            {generalError && (
              <Alert styleType='danger' message={generalError} />
            )}
            <div className='text-center'>
              <Button
                apiProgress={apiProgress}
                text={t('Login.reset')}
                disabled={disabled}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
