import styled from "@emotion/styled";

const Linktext = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  position: relative;
  width: 100%;
  height: 100%;

  &::before,
  &::after {
    position: absolute;
    content: "";
    background: #000;
  }

  &::before {
    left: 0;
    top: 0;
    width: 0%;
    height: 2px;
    transition: all 0.1s 0.1s ease;
    
    
  }

  &::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    
  }

  &:hover::before {
    width: 100%;
    background: #66ccff;
  }
  &:hover::after{
    background: #66ccff;
  }
  @media screen and (max-width: 400px) {
      font-size:1rem; 
  }
`;

export default Linktext;
