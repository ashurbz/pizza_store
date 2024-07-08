import { useNavigate, useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const navigate = useNavigate();
  const errMsg = useRouteError();
  console.log(errMsg);
  return (
    <>
      <h1>Something Went Wrong</h1>
      <h3>{errMsg.data}</h3>
      <span>{errMsg.status}</span>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default ErrorComponent;
