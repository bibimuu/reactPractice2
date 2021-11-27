import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();
  const back = () => history.goBack();
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={back}>戻る</button>
    </div>
  );
};
