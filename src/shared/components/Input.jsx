//eslint-disable-next-line
export const Input = ({ id, label, error, onChange, type, defaultValue }) => {
  return (
    <>
      <div className='mb-3'>
        <label htmlFor={id} className='form-label'>
          {label}
        </label>
        <input
          className={error ? 'form-control is-invalid' : 'form-control'}
          id={id}
          type={type}
          onChange={onChange}
          defaultValue={defaultValue}
        />
        <div className={'invalid-feedback'}>{error}</div>
      </div>
    </>
  )
}
