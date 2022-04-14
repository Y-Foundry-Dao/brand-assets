import styled from 'styled-components';
import React from 'react';

interface StyledProps {
    color: string;
    textColor: string;
}

function Color(props: any) {
  return (
    <Section color={props.color} textColor={props.textColor}>
      <ColorDiv >
        <ColorNum>{props.color}</ColorNum>
        <ColorDescDiv>
          <Line>{props.desc1}</Line>
          <Line>{props.desc2}</Line>
          <Line>{props.desc3}</Line>
          <Line>{props.desc4}</Line>
          <Line>{props.desc5}</Line>
          <Line>{props.desc6}</Line>
          <Line>{props.desc7}</Line>
        </ColorDescDiv>
      </ColorDiv>
    </Section>
  );
}

const Section: React.FC <StyledProps> = styled.div<StyledProps>`
  position: relative;
  border-radius: 24.12px;
  background-color: ${props => props.color};
  width: 160.36px;
  height: 160.36px;  
  margin: 10px;
  mix-blend-mode: pass-through;
  color: ${props => props.textColor };
  @media(min-width: 756px){
    width: 160.36px;
    height: 160.36px;  
    margin: 5px;
  }
  @media(min-width: 1024px){
    width: 200.36px;
    height: 200.36px;  
  }
  @media(min-width: 1440px){
    width: 260.36px;
    height: 260.36px;    }
  @media(min-width: 2560px){
    width: 360.36px;
    height: 360.36px;    
  }
`
const ColorDiv = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 85px 106.48px 3.36px 17px; 
`
const ColorNum = styled.h3`
  margin: 0px;
  font-weight: bold;
  margin-bottom: 3.26px;
  font-size: 14px;
  @media(min-width: 756px){
    font-size: 15px;
  }
  @media(min-width: 1440px){
    font-size: 18px;
  }
  @media(min-width: 2560px){
    font-size: 24px;  
  }
`
const ColorDescDiv = styled.div`
  margin: 0px;
  display: flex;
  height: 100px;
  flex-flow: column wrap;
  grid-column-start: 1;
  grid-column-end: 3;
  gap: 5px;
  font-size: 13px;
  @media(min-width: 756px){
    font-size: 13.55px;
}
  @media(min-width: 1440px){
    font-size: 15px;
  }
  @media(min-width: 2560px){
    font-size: 20px;  
  }
`
const Line = styled.div`
`



export default Color;