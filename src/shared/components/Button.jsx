import Spinner from './Spinner'
//eslint-disable-next-line
export const Button = ({ text, apiProgress, disabled, onClick, className }) => {
  return (
    <button
      className={className ? className : 'btn btn-primary'}
      disabled={apiProgress || disabled}
      onClick={onClick}
    >
      {apiProgress && <Spinner size={true} styleType={'secondary'} />} {text}
    </button>
  )
}
