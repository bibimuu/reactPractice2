import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/10">URLLL</Link>
      <Link to="/page2/10?name=hogehoge">queryURLLL</Link>
    </div>
  );
};
