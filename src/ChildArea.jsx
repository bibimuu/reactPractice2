import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log(9);
  return (
    <>
      {open && (
        <div>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      )}
    </>
  );
});
