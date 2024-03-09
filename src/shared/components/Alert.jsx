export const Alert = ({ message, styleType }) => {
  return (
    <div className={`alert alert-${styleType || "primary"}`}>{message} </div>
  );
};
