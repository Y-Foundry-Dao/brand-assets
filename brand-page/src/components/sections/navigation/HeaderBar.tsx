import yLogo from 'assets/logo_orange.svg';
import styled from 'styled-components';
import NavLinks from 'components/sections/navigation/NavLinks';
import Burger from 'components/sections/navigation/burger/Burger'

function HeaderBar() {
  return (
    <Header id='home'>
      <Logo src={yLogo} alt={"Y logo"} />
      <NavLinks />
      <Burger />
    </Header>
  )
}

const Logo = styled.img`
  margin: 15px 8% 15px;
  width: 21px;

  @media(min-width:1440px){
    margin: 14px 4% 14px;
    width: 28px;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: rgba(4, 3, 7, 0.5);

  @media(min-width: 1440px){
    height: 81px;
  }
`

export default HeaderBar;
