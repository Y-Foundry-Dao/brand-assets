import styled from "styled-components";
import black_logo from 'assets/black_logo.svg'
import white_logo from 'assets/white_logo.svg'
import DownloadButton from "components/DownloadButton";

function LogoSection () {
    return(
        <Section>
            <Subtitle>App Assets</Subtitle>
            <Title>The <Orange>Y-Foundry</Orange> Logo</Title>
            <Gallery>
                <Frame>
                    <Logo src={black_logo} alt="Black Logo" />
                    <Desc>This is our original brand, displayed as intended, bold color on a dark background.</Desc>
                </Frame>
                <Frame>
                    <Logo src={white_logo} alt="White Logo" />
                    <Desc>On white backgrounds, our brand should be presented with dark colors to contrast.</Desc>
                </Frame>
            </Gallery>
            <DownloadButton name="DOWNLOAD LOGO" download_file={require("../../assets/Logos.zip")} download_title={downloadName}  />
         </Section>
    );
}
const downloadName = 'YFDLogo.zip'

const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`
const Section = styled.section`
  padding-top: 10%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Subtitle = styled.h3`
  // mobile view
  text-align: center;
  font-size: 14px;
  @media(min-width: 768px){
    font-size: 18px;
  }
`
const Title = styled.h2`
  // mobile view
  margin-top: 0px;
  font-size: 22px;
  text-align: center;
  @media(min-width: 768px){
    font-size: 48px;
  }
`
const Gallery = styled.div`
  // mobile view
  padding: 0% 0% 5% 0%;
  gap: 20px;
  flex-direction: row;
  display: grid;
  @media(min-width: 756px){
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 1024px){
    gap: 0px;
  }
`
const Frame = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  width: 240px;
  border: none;
  @media(min-width: 425px){
    width: 250px;
  }
  @media(min-width: 756px){
    width: 70%;
    width: 300px;
  }
  @media(min-width: 1024px){
    width: 100%;
    width: 330px;  
  }  
  @media(min-width: 1440px){
    width: 100%;
    width: 450px;  
  }
`
const Desc = styled.h4`
  // mobile view
  width: 75%;
  margin: 0px;
  font-size: 10px;
  text-align: center;
  @media(min-width: 375px){
    width: 65%;
  }
  @media(min-width: 425px){
    width: 60%;
  }
  @media(min-width: 768px){
    font-size: 14px;
    width: 80%;
  }
  @media(min-width: 1024px){
    font-size: 14px;
    width: 65%;
    text-align: left;
  }
  @media(min-width: 1440px){
    font-size: 16px;
    width: 67%;
    text-align: left;
  }
`

export default LogoSection;