import Spinner from "./Spinner";

export const Button = ({text, apiProgress, disabled}) => {
  return (
    <button className="btn btn-primary" disabled={apiProgress || disabled}>
      {apiProgress && <Spinner size={true} styleType={"secondary"} />}{" "}
      {text}
    </button>
  );
};
