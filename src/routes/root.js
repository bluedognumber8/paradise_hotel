import styled from 'styled-components/macro'
import { Link, Outlet } from 'react-router-dom'

import logo from './logo.png'
import { ChevronDown, Twitter, Facebook, Youtube, Twitch } from 'react-feather'

const MENU = [
  { name: 'Hotel', url: 'about' },
  { name: 'Rooms & Suites', url: 'rns' },
  { name: 'Reservations', url: 'reservations' },
  { name: 'Activities', url: 'activities' },
  { name: 'Contact', url: 'contact' },
]

const MENU_FOOTER = [
  { name: 'Home', url: '/' },
  { name: 'Rooms & Suites', url: 'rns' },
  { name: 'Reservations', url: 'reservations' },
  { name: 'Contact', url: 'contact' },
]

const SOCIALS = [
  { name: <Twitter />, url: '#' },
  { name: <Facebook />, url: '#' },
  { name: <Twitch />, url: '#' },
  { name: <Youtube />, url: '#' },
]

function Root() {
  return (
    <Roots>
      <Header>
        <Logo />
        <Menu>
          {MENU.map((element, index) => (
            <MenuElement header={'true'} key={index} url={element.url}>
              {element.name}
            </MenuElement>
          ))}
        </Menu>
        <Lang to='#'>
          EN
          <ChevronDown />
        </Lang>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <div>&#169; 2012 Paradise Hotel. All Rights Reserved.</div>
        <Socials>
          {SOCIALS.map((element, index) => (
            <MenuElement key={index} footer={'true'} url={element.url}>
              {element.name}
            </MenuElement>
          ))}
        </Socials>
        <Menu>
          {MENU_FOOTER.map((element, index) => (
            <MenuElement footer={'true'} key={index} url={element.url}>
              {element.name}
            </MenuElement>
          ))}
        </Menu>
      </Footer>
    </Roots>
  )
}

const Socials = ({ children }) => {
  return (
    <nav aria-label='footer menu'>
      <ul>{children}</ul>
    </nav>
  )
}

const SocialElement = styled.li`
  display: inline;
  margin-right: 10px;
`

const Roots = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`
const Header = ({ children }) => {
  return (
    <BackgroundHeader>
      <WrapHeader>{children}</WrapHeader>
    </BackgroundHeader>
  )
}

const BackgroundHeader = styled.header`
  color: #e0e0e0;
  background-color: #191919;
`

const Logo = () => {
  return (
    <Link to='/'>
      <img src={logo} alt='Paradise hotel'></img>
    </Link>
  )
}

const Menu = ({ children }) => {
  return (
    <nav aria-label='menu'>
      <ul>{children}</ul>
    </nav>
  )
}

const MenuElement = ({ url, children, header, footer }) => {
  return (
    <ElementWrapper header={header} footer={footer}>
      <ElementLink to={url}>{children}</ElementLink>
    </ElementWrapper>
  )
}

const ElementWrapper = styled.li`
  transform: scale(2);
  display: inline;
  ${(props) =>
    props.header &&
    `&:not(:first-of-type) {
    &:before {
      font-weight: 100;
      content: '|';
      margin-right: 1em;
      margin-left: 1em;
    }
  }`}
  ${(props) => props.footer && `margin-right: 15px;`}
`
const ElementLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const Lang = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  & > svg {
    display: block;
  }
`

const Hero = styled.div`
  background-color: #c8c8c8;
`

const Main = styled.div`
  background-color: #ebebeb;
`

const Footer = ({ children }) => {
  return (
    <BackgroundFooter>
      <WrapHeader>{children}</WrapHeader>
    </BackgroundFooter>
  )
}

const BackgroundFooter = styled.footer`
  margin-top: auto;
  color: #9b9a9a;
  background-color: #ffffff;
  font-size: 0.75em;
`
const WrapHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 980px;
  ${BackgroundFooter} & {
    height: 68px;
  }
  ${BackgroundHeader} & {
    height: 90px;
  }
`

export default Root
