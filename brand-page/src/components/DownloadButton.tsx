import styled from 'styled-components';
import download_icon from '../assets/download_icon.svg';



function DownloadButton(props: any) {
  return (
    <Link href={props.download_file} download={props.download_title}>
      <Button>
        <ImgLogo src={download_icon} alt="" />
        <ImgWords>{props.name}</ImgWords> 
      </Button>
    </Link>
  );
}

const Link = styled.a`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

const Button = styled.button`
// mobile view
  width: 160px;
  height: 30px;
  border-radius: 10px;
  border:none;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.theme.colors.blue}`};
  color: ${props => `${props.theme.colors.white}`};
  padding:10px, 32px;
  @media(min-width: 768px){
    width: 200px;
    height: 44px;
  }
  @media(min-width: 1024px){
    width: 242px;
    height: 48px;
  }
 `

const ImgLogo = styled.img`
// mobile view
  height: 14px;
  @media(min-width: 768px){
    height: 20px;
  }
  @media(min-width: 1024px){
    height: 24px;
  }
`

const ImgWords = styled.p`
  // mobile view
  font: 10px Inter, sans-serif;
  font-weight: bold;
  color: ${props => `${props.theme.colors.white}`};
  display: flex;
  white-space: nowrap;
  @media(min-width: 768px){
    font: 14px Inter, sans-serif;
    font-weight: bold;
  }
  @media(min-width: 1024px){
    font: 18px Inter, sans-serif;
    font-weight: bold;
  }
`

export default DownloadButton;