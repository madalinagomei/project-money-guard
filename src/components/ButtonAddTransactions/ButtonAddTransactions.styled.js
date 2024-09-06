import styled from 'styled-components';

export const AddBtnCircle = styled.button`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.backgrounds.btnGradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  bottom: 3vh;
  right: 5vw;
  z-index: 1000;

 &:hover {
    background: ${({ theme }) => theme.colors.incomeColor};
    box-shadow: 0px 6px 15px 0px rgba(255, 199, 39, 0.5);
  }
  @media only screen and (min-width: 768px) {
    bottom: 4vh;
    right: 4vw;
  }
  @media only screen and (min-width: 1280px) {
    bottom: 3vh;
    right: 3vw;
  }
`;
