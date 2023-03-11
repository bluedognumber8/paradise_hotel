import styled from 'styled-components/macro'

function HomePage() {
  return (
    <>
      <Hero>
        <WrapHero>
          <BigHeadline>
            <Headline>Ipsum est do officia exercitation afgjs</Headline>
          </BigHeadline>
          <SmallHeadline>
            <HeadlineSmall>Ipsum est do officia</HeadlineSmall>
          </SmallHeadline>
        </WrapHero>
      </Hero>
      <Main>
        <WrapHero>
          <Book />
          <WrapBanners>
            <Banner />
            <Banner />
            <Banner />
          </WrapBanners>
        </WrapHero>
      </Main>
    </>
  )
}

const Book = () => {
  return (
    <WrapAll>
      <Left>
        <div>
          <h2>Book a room online</h2>
          <p>Ex sunt tempor incididunt ipsum.</p>
        </div>
      </Left>
      <Right>
        <div>
          <Div>Type of room:</Div>
          <div>
            <select name='adults' id='adults'>
              <option value='volvo'>Select a type of room</option>
              <option value='saab'>2</option>
              <option value='opel'>3</option>
              <option value='audi'>4</option>
            </select>
          </div>
        </div>
        <div>
          <Div>Check-in date:</Div>
          <div>
            <input type={'date'}></input>
          </div>
        </div>
        <div>
          <Div>Check-out date:</Div>
          <div>
            <input type={'date'}></input>
          </div>
        </div>
        <div>
          <Div>Adults:</Div>
          <div>
            <select name='adults' id='adults'>
              <option value='volvo'>1</option>
              <option value='saab'>2</option>
              <option value='opel'>3</option>
              <option value='audi'>4</option>
            </select>
          </div>
        </div>
        <div>
          <Div>Children:</Div>
          <div>
            <select name='children' id='children'>
              <option value='volvo'>1</option>
              <option value='saab'>2</option>
              <option value='opel'>3</option>
              <option value='audi'>4</option>
            </select>
          </div>
        </div>
        <Button>Book now</Button>
      </Right>
    </WrapAll>
  )
}

const WrapBanners = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const Banner = () => {
  return (
    <div>
      <WrapImage></WrapImage>
      <h1>Sint officia ex adi</h1>
      <p>Sint officia ex adipisicing ullamco deserunt elit eu veniam.</p>
    </div>
  )
}

const WrapImage = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
  margin-bottom: 15px;
`

const Button = styled.div`
  color: white;
  padding: 10px;
  background-color: #52abdf;
  width: max-content;
`

const Div = styled.div`
  margin-bottom: 10px;
`

const WrapAll = styled.div`
  display: flex;
  position: relative;
  top: calc(-152px / 2);
`

const Left = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f3f3;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

const Right = styled.div`
  gap: 20px;

  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

const BigHeadline = styled.div`
  font-size: 30px;
  font-weight: bold;
  background-color: transparent;
  text-transform: uppercase;
  color: white;
  width: max-content;
  border-top: 50px solid black;
  border-right: 25px solid transparent;
  padding-left: 20px;
  padding-right: 20px;
`

const SmallHeadline = styled.div`
  margin-top: -43.5px;
  font-size: 20px;
  background-color: transparent;
  text-transform: uppercase;
  color: white;
  width: max-content;
  border-top: 30px solid #52abdf;
  border-right: 25px solid transparent;
  padding-left: 20px;
  padding-right: 20px;
`

const Headline = styled.div`
  position: relative;
  bottom: 1.5em;
`
const HeadlineSmall = styled.div`
  position: relative;
  bottom: 1.5em;
`

const WrapHero = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 980px;
`

const Hero = styled.div`
  display: flex;
  align-items: center;
  background-color: #c8c8c8;
  height: 590px;
`

const Main = styled.div`
  background-color: #ebebeb;
  padding-bottom: 100px;
`

export default HomePage
