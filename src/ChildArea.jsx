import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log(9);
  return (
    <>
      {open && (
        <div>
          <p>子コンポーネント</p>
        </div>
      )}
    </>
  );
});
