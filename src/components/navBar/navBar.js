import { Navbar,Container,Nav,Button } from "react-bootstrap"
import style from './navBar.css';
import Counter from "../counter/Counter";
import { IoClose } from "react-icons/io5"
import ClearPokedex from "../buttons/clearPokedex"
import ShowPokedex from "../buttons/showPokedex"

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Nav className="justify-content-start">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"/>
      <Nav.Link href="https://www.pokemon.com/fr/">Home</Nav.Link>
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
