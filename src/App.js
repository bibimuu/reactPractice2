import { useState } from "react";
import "./styles.css";

import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const changeText = (event) => {
    return setText(event.target.value);
  };
  const openToggle = () => setOpen(!open);

  return (
    <>
      <input value={text} onChange={changeText} />
      <button onClick={openToggle}>表示</button>
      <ChildArea open={open} />
    </>
  );
}
