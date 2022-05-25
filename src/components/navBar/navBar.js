import { Navbar,Container,Nav } from "react-bootstrap"
import Counter from "../counter/counter";
import ClearPokedex from "../buttons/clearPokedex"
import ShowPokedex from "../buttons/showPokedex"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Nav className="justify-content-start">
        <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" width={128} height={32} alt="logo"/></Link>
      <Nav.Link href="https://www.pokemon.com/fr/">pokemon.com</Nav.Link>
    </Nav>
    <Nav className="justify-content-center">
    <Navbar.Brand>Mon Pokedex</Navbar.Brand>
    </Nav>
    <Nav className="justify-content-end">
        <Counter/>
        <ClearPokedex/>
        <ShowPokedex/>
    </Nav>
    </Container>
  </Navbar>
  )
}
