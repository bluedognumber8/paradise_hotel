import styled from 'styled-components/macro'
import { Link, Outlet } from 'react-router-dom'
import { ChevronDown, Twitter, Facebook, Youtube, Twitch } from 'react-feather'

import logo from './routes/logo.png'
const MENU = [
  { name: 'Hotel', url: 'about' },
  { name: 'Rooms & Suites', url: 'rns' },
  { name: 'Reservations', url: 'reservations' },
  { name: 'Activities', url: 'activities' },
  { name: 'Contact', url: 'contact' },
]

const Header = ({ children }) => {
  return (
    <BackgroundHeader>
      <WrapHeader>
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
      </WrapHeader>
    </BackgroundHeader>
  )
}
const Lang = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  & > svg {
    display: block;
  }
`

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

const WrapHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 980px;
  height: 90px;
`
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

export default Header
