import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();
  const onClickDetailA = () => history.push("page1/PageDetailA");

  return (
    <>
      <h1>Page1</h1>
      <Link to={{ pathname: "page1/PageDetailA", state: arr }}>
        PageDetailA
      </Link>
      <br />
      <Link to="/page1/PageDetailB">PageDetailB</Link>
      <br />
      <button onClick={onClickDetailA}>PageDetailAへ</button>
    </>
  );
};
