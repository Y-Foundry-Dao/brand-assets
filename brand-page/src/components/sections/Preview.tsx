import styled from "styled-components";
import Middle from 'assets/Middle.svg'
import First from 'assets/First.svg'
import Last from 'assets/Last.svg'



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

        </Section>
    );
}

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
  @media(min-width: 756px){
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media(min-width: 1024px){
    grid-gap: 30px;
  }
`
const FirstPic = styled.img`
`
const MiddlePic = styled.img`
`
const LastPic = styled.img`
`
export default Preview;