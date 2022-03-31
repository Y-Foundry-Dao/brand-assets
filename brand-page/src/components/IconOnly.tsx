import styled from 'styled-components';
import DownloadButton from './DownloadButton';
import logo_orange from '../assets/logo_orange.svg'
import logo_download from '../assets/logo_download.png'
import BackgroundComposition from './sections/background/BackgroundComposition';
import Ellipse_12 from '../assets/Ellipse_12.svg'

function IconOnly() {
  return (
      <Icon id='icon_download_section'>
        <BackgroundComposition />
        <Header>
            <Subtitle>App Assets</Subtitle>
            <Title><Orange>Icon</Orange> Only</Title>
            <DownloadSection>
                <ImageHolder>
                  <Logo src={logo_orange} alt="logo_orange" />
                </ImageHolder>
                <DownloadButton name="DOWNLOAD ICON" download_file={logo_download} download_title={downloadName} />
            </DownloadSection>
        </Header>
      </Icon>
  );
}

const downloadName = 'logo_orange.png'
const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

const Icon = styled.section`
  padding-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
`

const Header = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
`

const DownloadSection = styled.section`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Subtitle = styled.h3`
  text-align: center;
  font-size: 18px;
`

const Title = styled.h2`
  margin: 2px;
  font-size: 48px;
  text-align: center;
`

const ImageHolder = styled.div`
  margin-left: 15%;
  background: url(${Ellipse_12}) no-repeat center;
  background-color: ${props => `${props.theme.colors.black}`};
  border-radius: 25px;
  border: 1px solid ${props => `${props.theme.colors.orange}`};
  display: flex;
  justify-content: center;
  width: 52%;
  padding: 20px;
  width: 150px;
  height: 150px;

`
const Logo = styled.img`
  @media(min-width: 600px){
    width: 40%;
  }
  @media(min-width: 756px){
    width: 35%;
  }
  @media(min-width: 875px){
    width: 25%;
  }
  @media(min-width: 1024px){
    width: 20%;
  }
  @media(min-width: 1440px){
    width: 20%;
  }
`

export default IconOnly;
