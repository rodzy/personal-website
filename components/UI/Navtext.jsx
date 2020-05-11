import styled from "@emotion/styled";

const Navtext = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  
  &::before,&::after{
    position: absolute;
  content: "";
  background: #000;
  }

  &::before{
    left: 0;
  top: 0;
  width: 0%;
  height: 2px;
  transition: all 0.1s 0.1s ease;
  }

  &::after{
    left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  }

  &:hover::before{
      width:100%;
  }
`;

export default Navtext;
