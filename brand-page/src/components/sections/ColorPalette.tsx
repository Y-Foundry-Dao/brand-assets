import styled from "styled-components";
import Color from 'components/Color'


function ColorPalette() {
    return (
        <Section>
            <Subtitle>App Assets</Subtitle>
            <Title><Orange>Color</Orange> Palette</Title>
            <Description>The elegant colors and tones of "Y-Foundry" capture a playful aspect in contrast to its spatial concept.</Description>
            <Label><Underline>Main</Underline> Colors</Label>
            <Gallery>
              <Color color={'#040307'} desc1="C:43" desc2="M:57" desc3="Y:0" desc4="K:97" desc5="R:4" desc6="G:3" desc7="B:7"/>
              <Color color={'#D8552A'} desc1="C:0" desc2="M:61" desc3="Y:81" desc4="K:15" desc5="R:216" desc6="G:85" desc7="B:42"/>
              <Color color={'#D7B9A3'} textColor='#040307' desc1="C:0" desc2="M:14" desc3="Y:24" desc4="K:16" desc5="R:215" desc6="G:185" desc7="B:183"/>
              <Color color={'#FCFEFF'} textColor='#040307' desc1="C:1" desc2="M:0" desc3="Y:0" desc4="K:0" desc5="R:252" desc6="G:254" desc7="B:255"/>
            </Gallery>
            <Label><Underline>Grey</Underline> Scale</Label>
            <Gallery>
              <Color color={'#202833'} desc1="C:37" desc2="M:22" desc3="Y:0" desc4="K:80" desc5="R:32" desc6="G:40" desc7="B:51"/>
              <Color color={'#6D7989'} desc1="C:20" desc2="M:12" desc3="Y:0" desc4="K:46" desc5="R:109" desc6="G:121" desc7="B:137"/>
              <Color color={'#AEBBCD'} textColor='#040307' desc1="C:0" desc2="M:9" desc3="Y:0" desc4="K:20" desc5="R:174" desc6="G:185" desc7="B:183"/>
              <Color color={'#D5DCE5'} textColor='#040307' desc1="C:1" desc2="M:0" desc3="Y:0" desc4="K:0" desc5="R:252" desc6="G:254" desc7="B:255"/>
            </Gallery>
        </Section>
    );
}
const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`
const Section = styled.section`
  padding: 10%;
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
const Description = styled.h3`
  // mobile view
  width: 75%;
  margin: 10px;
  text-align: center;
  font-size: 14px;
  @media(min-width: 768px){
    font-size: 18px;
  }
  @media(min-width: 1024px){
    width: 90%;
    font-size: 24px;
  }
`
const Label = styled.h3`
  // mobile view
  width: 80%;
  font-size: 14px;
  font-weight: 100;
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
    padding-left: 0px;
    font-size: 16px;
  }
  @media(min-width: 1024px){
    width: 90%;
    padding-left: 25px;
    font-size: 24px;
  }
  @media(min-width: 1440px){
    padding-left: 50px;
  }
  @media(min-width: 2560px){
    padding-left: 680px;
  }
`
const Underline = styled.h3`
    font-weight: 100;
    border-bottom: 4px solid ${props => `${props.theme.colors.orange}`};
    display:inline
`
const Gallery = styled.div`
  // mobile view
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(min-width: 756px){
    flex-direction: row;
  }
  @media(min-width: 1024px){
    grid-gap: 25px;
  }
  @media(min-width: 1440px){
    grid-gap: 60px;
  }
`

export default ColorPalette;