import styled from 'styled-components';
import DownloadButton from 'components/DownloadButton';

function Typography () {
    return(
        <Section id='Typography'>
          <Main>
            <Subtitle>Font Assets</Subtitle>
            <Title><Orange>Typography</Orange></Title>
               <DownloadSection>
                 <FontHolder>Kodchasan</FontHolder>
                <DownloadButton name="DOWNLOAD FONT" download_file={require("../../assets/fonts/Kodchasan.zip")} download_title={downloadName} />
            </DownloadSection>
          </Main>
        </Section>
    );
}

const downloadName = 'Kodchasan.zip'
const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

const Section = styled.section`
  justify-content: center; 
  width: 70%;
  border-radius: 27px;  
  display: flex;
  margin: auto;
  border: 1px solid ${props => `${props.theme.colors.orange}`};
  @media(min-width: 756px){
    width: 75%;
    height: 236px; 
  }
  @media(min-width: 1024px){
    width: 912px;
    height: 236px; 
  }
`
const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
`
const Subtitle = styled.h3`
  // mobile view
  margin: 10px;
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
const DownloadSection = styled.section`
  // mobile view
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media(min-width: 768px){
    flex-direction: row;
      gap: 20px;
  }
  @media(min-width: 1024px){
  }
`

const FontHolder = styled.h3`
// mobile view
margin: 0px;
font-size: 26px;
text-align: center;
@media(min-width: 768px){
  font-size: 36px;
}
`
export default Typography;
