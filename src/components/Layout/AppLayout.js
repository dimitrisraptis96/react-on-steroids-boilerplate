import styled from "styled-components";

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  box-sizing: content-box;
  background-color: ${props => props.theme.background.bg};
  color: ${props => props.theme.background.color};
`;

export default AppLayout;
