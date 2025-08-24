import React from 'react' ;
import styled from 'styled-components' ;

const Page = styled.div`
  font-family: Arial, sans-serif ;
  color: #333 ;
  margin: 0 ;
  padding: 0 ;
` ;

const Header = styled.header`
  display: flex ;
  justify-content: space-between ;
  align-items: center ;
  padding: 20px 10% ;
  background-color: #282c34 ;
  color: white ;
` ;

const Logo = styled.div`
  font-size: 24px ;
  font-weight: bold ;
` ;

const Nav = styled.nav`
  ul {
    list-style: none ;
    display: flex ;
    margin: 0 ;
    padding: 0 ;
  }
  li {
    margin: 0 15px ;
  }
  a {
    color: white ;
    text-decoration: none ;
    font-weight: 500 ;
    &:hover {
      color: #61dafb ;
    }
  }
` ;

const Section = styled.section`
  text-align: center ;
  padding: 50px 10% ;
  background-color: #f9f9f9 ;
` ;

const Title = styled.h1`
  font-size: 32px ;
  margin-bottom: 10px ;
` ;

const Subtitle = styled.p`
  font-size: 18px ;
  color: #666 ;
  margin-bottom: 40px ;
` ;

const Cards = styled.div`
  display: flex ;
  flex-wrap: wrap ;
  justify-content: center ;
  gap: 20px ;
  @media (max-width: 768px) {
    flex-direction: column ;
    align-items: center ;
  }
` ;

const Card = styled.div`
  background: white ;
  border: 1px solid #eee ;
  border-radius: 8px ;
  width: 250px ;
  padding: 20px ;
  text-align: center ;
  transition: transform 0.3s, box-shadow 0.3s ;
  &:hover {
    transform: scale(1.05) ;
    box-shadow: 0px 8px 20px rgba(0,0,0,0.15) ;
  }
  @media (max-width: 768px) {
    width: 80% ;
  }
` ;

const Icon = styled.div`
  font-size: 50px ;
  margin-bottom: 15px ;
` ;

const CardTitle = styled.h3`
  font-size: 20px ;
  margin-bottom: 10px ;
` ;

const CardDescription = styled.p`
  font-size: 14px ;
  color: #555 ;
` ;

const App: React.FC = () => {
  return (
    <Page>
      <Header>
        <Logo>DevAgency</Logo>
        <Nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </Nav>
      </Header>
      <Section>
        <Title>Our Services</Title>
        <Subtitle>We provide innovative web solutions to help your business grow.</Subtitle>
        <Cards>
          <Card>
            <Icon>🎨</Icon>
            <CardTitle>Web Design</CardTitle>
            <CardDescription>Beautiful and responsive designs tailored to your brand identity.</CardDescription>
          </Card>
          <Card>
            <Icon>💻</Icon>
            <CardTitle>Web Development</CardTitle>
            <CardDescription>Robust and scalable development with the latest technologies.</CardDescription>
          </Card>
          <Card>
            <Icon>🛒</Icon>
            <CardTitle>E-commerce Solutions</CardTitle>
            <CardDescription>Secure and feature-rich online stores to sell your products worldwide.</CardDescription>
          </Card>
          <Card>
            <Icon>📈</Icon>
            <CardTitle>SEO & Marketing</CardTitle>
            <CardDescription>Strategies to boost your search rankings and increase traffic.</CardDescription>
          </Card>
        </Cards>
      </Section>
    </Page>
  ) ;
} ;

export default App ;
