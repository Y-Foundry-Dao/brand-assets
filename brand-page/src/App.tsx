import styled from 'styled-components';
import HeaderBar from "./components/sections/navigation/HeaderBar";
import IconOnly from "./components/IconOnly";
import Typograpghy from "./components/Typography";
import BackgroundComposition from './components/sections/background/BackgroundComposition';
import BestPractice from './components/BestPractice';

function App() {
  return (
    <LandingPage>
      <BackgroundComposition />
      <HeaderBar/>
      <IconOnly/>
      <BestPractice/>
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
