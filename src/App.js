import { useState, useCallback, useMemo, useEffect } from "react";
import "./styles.css";

import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const changeText = (event) => {
    return setText(event.target.value);
  };
  const openToggle = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  console.log(0);
  const temp = useMemo(() => console.log(1), [setOpen]);
  console.log(2);
  const a = useEffect(() => console.log(3), []);
  console.log(4);
  const b = useCallback(() => console.log(5), []);
  console.log(6);

  return (
    <>
      <input value={text} onChange={changeText} />
      <button onClick={openToggle}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </>
  );
}
