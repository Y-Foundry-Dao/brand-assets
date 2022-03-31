import styled from 'styled-components';

function RadialGradientBottom() {
  return (
    <Radial>
    </Radial>
  );
}

const Radial = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  left: -190px;
  top: 1400px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(65, 97, 223, 0.2) 0%, rgba(62, 94, 255, 0) 100%);
  
  @media(min-width: 425px){
    width: 340px;
    height: 340px;
    left: -210px;
    top: 1500px;
  }
  @media(min-width: 756px){
    background: radial-gradient(50% 50% at 50% 50%, rgba(65, 97, 223, 0.2) 0%, rgba(66, 92, 222, 0) 100%);
    width: 400px;
    height: 400px;
    left: -200px;
    top: 1675px;
  }
  @media(min-width: 875px){
    width: 420px;
    height: 420px;
    left: -220px;
    top: 1750px;
  }
  @media(min-width: 950px){
    width: 440px;
    height: 440px;
    left: -230px;
    top: 1800px;
  }
  @media(min-width: 1024px){
    width: 500px;
    height: 500px;
    left: -250px;
    top: 2000px;
  }
  @media(min-width: 1170px){
    top: 3100px;
    left:-290px;
  }
  @media(min-width: 1300px){
    width: 520px;
    height: 520px;
    left: -310px;
    top: 3200px;
  }
  @media(min-width: 1440px){
    width: 560px;
    height: 560px;
    left: -340px;
    top: 3450px;
  }
`

export default RadialGradientBottom;
