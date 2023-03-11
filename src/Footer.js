import styled from 'styled-components/macro'
import { Link, Outlet } from 'react-router-dom'
import { ChevronDown, Twitter, Facebook, Youtube, Twitch } from 'react-feather'
const SOCIALS = [
  { name: <Twitter />, url: '#' },
  { name: <Facebook />, url: '#' },
  { name: <Twitch />, url: '#' },
  { name: <Youtube />, url: '#' },
]
const MENU_FOOTER = [
  { name: 'Home', url: '/' },
  { name: 'Rooms & Suites', url: 'rns' },
  { name: 'Reservations', url: 'reservations' },
  { name: 'Contact', url: 'contact' },
]
const Footer = ({ children }) => {
  return (
    <BackgroundFooter>
      <WrapHeader>
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
      </WrapHeader>
    </BackgroundFooter>
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
const Socials = ({ children }) => {
  return (
    <nav aria-label='footer menu'>
      <ul>{children}</ul>
    </nav>
  )
}
const BackgroundFooter = styled.footer`
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
  height: 90px;
`
export default Footer
