import styled, {keyframes} from 'styled-components'

import {ReactComponent as Twitter} from 'assets/twitter.svg';
import {ReactComponent as Discord} from 'assets/discord.svg';
import {ReactComponent as Telegram} from 'assets/Telegram.svg';

const colorChangeBlue = keyframes`
  100%{
    fill: #1F43BF;
  }
`
const StyledDiscordVision = styled(Discord)`
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`
const StyledDiscordFooter = styled(Discord)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`

const StyledTwitterVision = styled(Twitter)`
  height: 50px;
  margin: 0;
  padding: 0;
  z-index: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`
const StyledTwitterFooter = styled(Twitter)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  z-index: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`

const StyledTelegramVision = styled(Telegram)`
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`
const StyledTelegramFooter = styled(Telegram)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`

const socialInfo = {
  discord: {
    link: "https://discord.gg/yfd", 
    iconVision: <StyledDiscordVision />,
    iconFooter: <StyledDiscordFooter />,
    text: "discord"
  },
  telegram: {
    link: "https://t.me/yfoundrydao", 
    iconVision: <StyledTelegramVision />,
    iconFooter: <StyledTelegramFooter />,
    text: "telegram"
  },
  twitter: {
    link: "https://twitter.com/yieldfoundrydao", 
    iconVision: <StyledTwitterVision />,
    iconFooter: <StyledTwitterFooter />,
    text: "twitter"
  }
}

export const medium = "https://medium.com/@yfoundry/"

export default socialInfo