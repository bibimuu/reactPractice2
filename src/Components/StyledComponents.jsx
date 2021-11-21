import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Stitle>inline style</Stitle>
      <Sbutton>fight</Sbutton>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Stitle = styled.p`
  margin: 0px;
  color: #3d84a8;
`;

const Sbutton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 16px;
  border-radius: 8px;
`;
