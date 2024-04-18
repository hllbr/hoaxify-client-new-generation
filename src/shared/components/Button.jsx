import Spinner from './Spinner'
//eslint-disable-next-line
export const Button = ({ text, apiProgress, disabled, onClick, className,type }) => {
  return (
    <button
      className={className ? className : 'btn btn-primary'}
      disabled={apiProgress || disabled}
      onClick={onClick}
      type={type}
    >
      {apiProgress && <Spinner size={true} styleType={'secondary'} />} {text}
    </button>
  )
}
