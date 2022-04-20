import styled from "styled-components";
import wave_background from "assets/wave_background.svg";

function HeroSection() {
  return (
    <>
      {/* <WaveOverlay> */}
      <Section>
        <Img src={wave_background} alt="" />
        <Title>
          <Orange>Brand</Orange> Kit
        </Title>
        <Desc>
          Discover the resources and correct ways to apply our brand for use in
          mention or reference.
        </Desc>
      </Section>
      {/* </WaveOverlay> */}
    </>
  );
}

const Img = styled.img`
  width: 100%;
  margin-bottom: -34%;
  z-index: -1;
  @media (min-width: 360px) {
    margin-bottom: -34%;
  }
  @media (min-width: 540px) {
    margin-bottom: -28%;
  }
  @media (min-width: 1000px) {
    margin-bottom: -26%;
  }
  @media (min-width: 1600px) {
    margin-bottom: -22%;
  }
`;

const Orange = styled.span`
  color: ${(props) => `${props.theme.colors.orange}`};
`;

const Section = styled.section`
  /* background-image: url(${wave_background}); */
  /* background-size: cover; */
  /* margin-top: -2%; */
  margin-bottom: 5%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 360px) {
    margin-bottom: 10%;
  }
  @media (min-width: 560px) {
    margin-bottom: 11%;
  }
  @media (min-width: 1000px) {
    margin-bottom: 12%;
  }
  @media (min-width: 1200px) {
    margin-bottom: 4%;
  }
  @media (min-width: 1440px) {
    margin-bottom: 10%;
  }
`;

// const WaveOverlay = styled.div`
//   border: 1px solid white;
//   background-image: url(${wave_background});
//   background-size: cover;
//   width: 100%;
//   height: 200px;
//   @media (min-width: 768px) {
//     width: 120%;
//     height: 350px;
//   }
//   @media (min-width: 1024px) {
//     width: 110%;
//     height: 400px;
//   }
//   @media (min-width: 1440px) {
//     width: 150%;
//     height: 600px;
//   }
// `;

const Title = styled.h2`
  // mobile view
  margin-top: 0px;
  font-size: 22px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const Desc = styled.h2`
  // mobile view
  width: 75%;
  margin: 0px;
  font-size: 14px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export default HeroSection;
