import styled from 'styled-components';
import DownloadButton from 'components/DownloadButton';
import logo_orange from 'assets/logo_orange.svg'
import logo_download from 'assets/logo_download.png'
import Ellipse_12 from 'assets/Ellipse_12.svg'

function IconOnly() {
  return (
      <Icon id='icon_download_section'>
        <Main>
            <Subtitle>App Assets</Subtitle>
            <Title><Orange>Icon</Orange> Only</Title>
            <DownloadSection>
                <ImageHolder>
                  <Logo src={logo_orange} alt="logo_orange" />
                </ImageHolder>
                <DownloadButton name="DOWNLOAD ICON" download_file={logo_download} download_title={downloadName} />
            </DownloadSection>
        </Main>
      </Icon>
  );
}

const downloadName = 'logo_orange.png'
const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

const Icon = styled.section`
  padding-top: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
`

const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
`

const DownloadSection = styled.section`
  // mobile view
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media(min-width: 768px){
    flex-direction: row;
    align-items: center;
    gap: 0px;
  }
`

const Subtitle = styled.h3`
  // mobile view
  margin: 0px;
  text-align: center;
  font-size: 14px;
  @media(min-width: 768px){
  font-size: 18px;
}
`

const Title = styled.h2`
  // mobile view
  margin: 0px;
  font-size: 28px;
  text-align: center;
  @media(min-width: 768px){
    font-size: 48px;
  }
`

const ImageHolder = styled.div`
// mobile view
  background: url(${Ellipse_12}) no-repeat center;
  background-color: ${props => `${props.theme.colors.black}`};
  border-radius: 25px;
  border: 1px solid ${props => `${props.theme.colors.orange}`};
  display: flex;
  justify-content: center;
  width: 52%;
  padding: 20px;
  width: 110px;
  height: 110px;
  @media(min-width: 768px){
    margin-left: 5%;
    width: 150px;
    height: 150px;
  }
  @media(min-width: 1024px){
    margin-left: 10%;
    width: 150px;
    height: 150px;
  }
`
const Logo = styled.img`
  width: 40%;
  @media(min-width: 756px){
    width: 30%;
  }
  @media(min-width: 875px){
    width: 25%;
  }
`

export default IconOnly;
