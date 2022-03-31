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
`

const Button = styled.button`
  width: 242px;
  height: 48px;
  border-radius: 10px;
  border:none;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.theme.colors.blue}`};
  color: ${props => `${props.theme.colors.white}`};
  padding:10px, 32px;
 `

const ImgLogo = styled.img`
  height: 24px;
`

const ImgWords = styled.p`
  font: 18px Inter, sans-serif;
  font-weight: bold;
  color: ${props => `${props.theme.colors.white}`};
  display: flex;
  white-space: nowrap;
  
`

export default DownloadButton;