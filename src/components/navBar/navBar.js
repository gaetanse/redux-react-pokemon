import { Navbar,Container,Nav } from "react-bootstrap"

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>POKEDEX</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="https://www.pokemon.com/fr/">Home</Nav.Link>
      <Nav.Link to="/">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
