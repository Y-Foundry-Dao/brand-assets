import styled from "styled-components";
import wave_background from 'assets/wave_background.svg';

function HeroSection () {
    return(
      <>
        {/* <WaveOverlay> */}
          <Section>
              <Title><Orange>Brand</Orange> Kit</Title>
              <Desc>Discover the resources and correct ways to apply our brand for use in mention or reference.</Desc>
          </Section>
         {/* </WaveOverlay> */}
      </>
    );
}

const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`;

const Section = styled.section`
  background-image: url(${wave_background});
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const WaveOverlay = styled.div`
  background-image: url(${wave_background});
  background-size: cover;
  width: 100%;
  height: 200px;
  @media(min-width: 768px){
    width: 120%;
    height: 350px;
  }
  @media(min-width: 1024px){
    width: 110%;
    height: 400px;  
  }  
  @media(min-width: 1440px){
    width: 150%;
    height: 600px;  
  }
`;

const Title = styled.h2`
  // mobile view
  margin-top: 0px;
  font-size: 22px;
  text-align: center;
  @media(min-width: 768px){
    font-size: 48px;
  }
`;

const Desc = styled.h2`
  // mobile view
  width: 75%;
  margin: 0px;
  font-size: 14px;
  text-align: center;
  @media(min-width: 768px){
    font-size: 24px;
  }
`;

export default HeroSection;