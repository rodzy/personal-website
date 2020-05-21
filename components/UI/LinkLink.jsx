import styled from "@emotion/styled";

const LinkLink = styled.a`
  font-weight: 100;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  width: 75px;
  height: 40px;
  line-height: 20px;

  border: none;
  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 0%;
    width: 2px;
    background: #66ccff;
  }
  &::before {
    right: 0;
    top: 0;
    transition: all 0.1s ease;
  }
  &::after {
    left: 0;
    bottom: 0;
    transition: all 0.1s 0.2s ease;
  }
  &:hover::before {
    transition: all 0.1s 0.2s ease;
    height: 100%;
  }
  &:hover::after {
    transition: all 0.1s ease;
    height: 100%;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export default LinkLink;
