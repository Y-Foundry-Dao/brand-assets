import styled from "styled-components";

import RadialGradientBottom from "components/sections/background/RadialGradientBottom";
import RadialGradientTop from "components/sections/background/RadialGradientTop";
import starsLarge from 'assets/StarsLarge.svg';
import starsSmall from 'assets/StarsSmall.svg';

export default function BackgroundComposition() {
  return(
    <Background>
      <StarsLarge src={starsLarge} alt="" />
      <StarsSmall src={starsSmall} alt="" />
      <RadialGradientTop />
      <RadialGradientBottom />
    </Background>
  );
}

const StarsLarge = styled.img`
  position: absolute;
  width: 100%;
  top: 100px;
  z-index: -1;

  /* hides on small screen sizes */
  @media(max-width: 755px){
    display: none;
  }
`

const StarsSmall = styled.img`
  position: absolute;
  width: 100%;
  top: 100px;
  z-index: -1;

  /* hides on large screen sizes */
  @media(min-width: 755px){
    display: none;
  }
`

const Background = styled.div`
  height: 0px;
  width: 100vw;
  overflow: hidden;
`
