import styled from "styled-components";
import Middle from 'assets/Middle.svg';
import First from 'assets/First.svg';
import Last from 'assets/Last.svg';
import DownloadButton from "components/DownloadButton";

function Preview () {
    return (
        <Section id='Preview'>
            <Subtitle>App Assets</Subtitle>
            <Title><Orange>App </Orange>Preview</Title>
            <Gallery>
                <FirstPic src={First} alt="version_a" />
                <MiddlePic src={Middle} alt="version_b" />
                <LastPic src={Last} alt="version_c" />
            </Gallery>
            <DownloadButton name="FREE DOWNLOAD" download_file={require("../../assets/PreviewApp.zip")} download_title={downloadName} />
        </Section>
    );
}
const downloadName = 'PreviewYFD.zip'
const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

const Section = styled.section`
  padding-top: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
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
  margin: 0px;
  font-size: 22px;
  text-align: center;
  @media(min-width: 768px){
    font-size: 48px;
  }
`
const Gallery = styled.div`
  // mobile view
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5% 0px 5%;
  @media(min-width: 756px){
  }
  @media(min-width: 1024px){
  }
`
const FirstPic = styled.img`
  position: relative;
  padding: 0px 0px 50px 0%;
  z-layer: -1;
  width: 80px;
  @media(min-width: 768px){
    width: 250px;
    padding: 30px 0px 73.48px 0%;
  }
  @media(min-width: 1024px){
    width: 355px;
    padding: 61px 0px 73.48px 0px;
  }
  @media(min-width: 2560px){
    width: 800px;
    padding: 60px 0px 73.48px 0px;
  }
`
const MiddlePic = styled.img`
z-layer: 1;
display: flex;
position: absolute;
width: 180px;
  @media(min-width: 768px){
    width: 400px;
  }
  @media(min-width: 1024px){
    width: 611px;
  }
  @media(min-width: 2560px){
    width: 900px;
  }
`
const LastPic = styled.img`
  position: relative;
  padding: 0px 0px 50px 40%;
  z-layer: 0;
  width: 80px;
  @media(min-width: 768px){
    width: 250px;
    padding: 30px 0px 73.48px 30%;
  }
  @media(min-width: 1024px){
    width: 355px;
    padding: 61px 0px 73.48px 40%;
  }
  @media(min-width: 2560px){
    width: 800px;
    padding: 60px 0px 73.48px 25%;
  }
`
export default Preview;