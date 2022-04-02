import styled from 'styled-components';

function RadialGradientTop() {
  return (
    <Radial>
    </Radial>
  );
}

const Radial = styled.div`
  position: absolute;
  width: 354px;
  height: 354px;
  left: -211px;
  top: 600px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(65, 97, 223, 0.2) 0%, rgba(62, 94, 255, 0) 100%);

  @media(min-width: 395px){
    top: 500px;
  }
  @media(min-width: 425px){
    width: 340px;
    height: 340px;
    left: -210px;
    top: 625px;
  }
  @media(min-width: 756px){
    background: radial-gradient(50% 50% at 50% 50%, rgba(65, 97, 223, 0.2) 0%, rgba(66, 92, 222, 0) 100%);
    width: 400px;
    height: 400px;
    left: -220px;
    top: 710px;
  }
  @media(min-width: 875px){
    width: 420px;
    height: 420px;
    left: -220px;
  }
  @media(min-width: 950px){
    left: -240px;
    top: 800px;
  }
  @media(min-width: 1024px){
    width: 480px;
    height: 480px;
    left: -250px;
    top: 940px;
  }
  @media(min-width: 1150px){
    top: 1050px;
  }
  @media(min-width: 1300px){
    width: 510px;
    height: 510px;
    left: -260px;
    top: 1100px;
  }
@media(min-width: 1440px){
    width: 560px;
    height: 560px;
    left: -290px;
    top: 1200px;
  }
`

export default RadialGradientTop;