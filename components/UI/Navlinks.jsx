import styled from "@emotion/styled";

const Navlinks = styled.a`
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  text-align: center;

  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 0%;
    width: 2px;
    background: #000;
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
  /* &:hover {
    background: #66ccff;
    color: #fff;
  } */
`;

export default Navlinks;
