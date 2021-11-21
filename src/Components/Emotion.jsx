/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const title = css({
    margin: "0px",
    color: "#3d84a8"
  });

  return (
    <div css={containerStyle}>
      <p css={title}>inline style</p>
      <Sbutton>fight</Sbutton>
    </div>
  );
};

const Sbutton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 16px;
  border-radius: 8px;
`;
