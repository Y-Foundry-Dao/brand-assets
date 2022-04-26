import styled from 'styled-components';
import HeaderBar from 'components/sections/navigation/HeaderBar';
import IconOnly from 'components/sections/IconOnly';
import Typograpghy from 'components/sections/Typography';
import BackgroundComposition from 'components/sections/background/BackgroundComposition';
import BestPractice from 'components/sections/BestPractice';
import ColorPalette from 'components/sections/ColorPalette';
import HeroSection from 'components/sections/HeroSection';
import LogoSection from 'components/sections/LogoSection';
import Preview from 'components/sections/Preview';
import Footer from 'components/sections/Footer';
function App() {
  return (
    <LandingPage>
      <BackgroundComposition />
      <HeaderBar/>
      <HeroSection/>
      <LogoSection/>
      <IconOnly/>
      <BestPractice/>
      <ColorPalette/>
      <Typograpghy/>
      <Preview/>
      <Line />
      <Footer/>
    </LandingPage>


  );
}

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100% !important;
  overflow-x: hidden !important;
`

// Line above footer
const Line = styled.div`
  width: 78%;
  height: 1px;
  margin-top: 10%;
  margin-bottom: 1%;
  background: linear-gradient(0deg, #1f43bf 60%, #A9BCFF 30%);
  
  @media(min-width: 425px){
    width: 80%;
  }
  @media(min-width: 550px){
    width: 82%;
  }
  @media(min-width: 756px){
    width: 84%;
  }
  @media(min-width: 1024px){
    width: 88%;
  }
`

export default App;
