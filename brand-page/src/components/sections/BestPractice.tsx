import styled from "styled-components";
import VersionA from "assets/VersionA.svg";
import VersionB from "assets/VersionB.svg";
import VersionC from "assets/VersionC.svg";
import VersionD from "assets/VersionD.svg";


function BestPractice () {
    return (
        <Section id='BestPractice'>
            <Subtitle>App Assets</Subtitle>
            <Title><Orange>Y-Foundry</Orange> Best Practices</Title>
            <Description>Below are the correct uses of additional versions of our brand</Description>
            <Gallery>
                <Brand src={VersionA} alt="version_a" />
                <Brand src={VersionB} alt="version_b" />
                <Brand src={VersionC} alt="version_c" />
                <Brand src={VersionD} alt="version_d" />
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
const Description = styled.h3`
  // mobile view
  width: 80%;
  margin: 10px;
  text-align: center;
  font-size: 14px;
  @media(min-width: 768px){
    font-size: 18px;
  }
  @media(min-width: 1024px){
    font-size: 24px;
  }
`
const Gallery = styled.div`
  // mobile view
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  @media(min-width: 756px){
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media(min-width: 1024px){
    grid-gap: 25px;
  }
`
const Brand = styled.img`
    padding: 20px;  
    width: 240px;
    
  @media(min-width: 756px){
    padding: 25px;  
    width: 70%;
    width: 300px;
    hieght: 200px;
  }
  @media(min-width: 1024px){
    width: 100%;
    width: 330px;
    hieght: 219px;
  }
`

export default BestPractice;