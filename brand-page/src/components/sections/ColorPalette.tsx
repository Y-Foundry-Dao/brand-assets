import styled from "styled-components";
import black from 'assets/color_palette/main_colors/black.svg';
import orange from 'assets/color_palette/main_colors/orange.svg';
import tan from 'assets/color_palette/main_colors/tan.svg';
import cream from 'assets/color_palette/main_colors/cream.svg';
import color202833 from 'assets/color_palette/grey_scale/color202833.svg';
import color6D7989 from 'assets/color_palette/grey_scale/color6D7989.svg';
import colorAEBBCD from 'assets/color_palette/grey_scale/colorAEBBCD.svg';
import colorD5DCE5 from 'assets/color_palette/grey_scale/colorD5DCE5.svg';




function ColorPalette() {
    return (
        <Section>
            <Subtitle>App Assets</Subtitle>
            <Title><Orange>Color</Orange> Palette</Title>
            <Description>The elegant colors and tones of "Y-Foundry" capture a playful aspect in contrast to its spatial concept.</Description>
            <Label><Underline>Main</Underline> Colors</Label>
            <Gallery>
                <Image src={black} alt="black"/>
                <Text>HELLOOOOO</Text>
                
                <Image src={orange} alt="orange"/>
                <Image src={tan} alt="tan"/>
                <Image src={cream} alt="cream"/>
            </Gallery>
            <Label><Underline>Grey</Underline> Scale</Label>
            <Gallery>
                <Image src={color202833} alt="color202833"/>
                <Image src={color6D7989} alt="color6D7989"/>
                <Image src={colorAEBBCD} alt="colorAEBBCD"/>
                <Image src={colorD5DCE5} alt="colorD5DCE5"/>
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
  padding: 5px;

  font-size: 12px;
  font-weight: 100;
  display:inline
  @media(min-width: 768px){
    font-size: 18px;
  }
  @media(min-width: 1024px){
    width: 90%;
    font-size: 24px;
  }
`
const Underline = styled.h3`
    font-weight: 100;
    border-bottom: 4px solid ${props => `${props.theme.colors.orange}`};
    display:inline
`
const Gallery = styled.div`
  // mobile view
  padding: 0px;
  padding-left: 10%;
  flex-direction: row;
  justify-content: center;
  @media(min-width: 756px){
    padding: 20px;
  }
  @media(min-width: 1024px){
    grid-gap: 25px;
  }
`

const Image = styled.img`
  position: relative;
  padding: 20px;
  width: 30%;
  @media(min-width: 756px){
  padding: 25px;  
  width: 70%;
  width: 100px;
  }
  @media(min-width: 1024px){
    width: 190px;
  }
  @media(min-width: 1440px){
    width: 80%;
    width: 290px;
  }
`
const Text = styled.h3`
    position: absolute;
    top: 0px;
    left: 0px;
`

export default ColorPalette;