import styled from '@emotion/styled';

const Navlinks=styled.a`
    border: 2px solid #000;
    font-weight: 700;
    font-size:1;
    border:2px solid #000;
    padding:.8rem 2rem;
    margin-right:1rem;
    cursor:pointer;
    border-radius:3px;
    background-color:${props=>props.bgColor?'#DA552F':'#FFFFFF'};
    color:${props=>props.bgColor?'white': '#000'};
    &:last-of-type{
        margin-right:0;
    }
    &:hover{
      background: #66ccff;
      color: #fff;
    }
`;
 
export default Navlinks;