import styled from 'styled-components';
import HeaderBar from 'components/sections/navigation/HeaderBar';
import IconOnly from 'components/sections/IconOnly';
import Typograpghy from 'components/sections/Typography';
import BackgroundComposition from 'components/sections/background/BackgroundComposition';
import BestPractice from 'components/sections/BestPractice';
import ColorPalette from 'components/sections/ColorPalette';

function App() {
  return (
    <LandingPage>
      <BackgroundComposition />
      <HeaderBar/>
      <IconOnly/>
      <BestPractice/>
      <ColorPalette/>
      <Typograpghy/>
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

export default App;
