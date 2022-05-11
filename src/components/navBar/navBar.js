import { Navbar,Container,Nav,Button } from "react-bootstrap"
import style from './navBar.css';
import Counter from "../counter/Counter";
import { BsArrowsFullscreen } from "react-icons/bs"
import { IoClose } from "react-icons/io5"

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
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
        <Button variant="danger"><IoClose/>&nbsp;&nbsp;&nbsp;Clear</Button>
        <Button className="mx-4" variant="primary"><BsArrowsFullscreen/>&nbsp;&nbsp;&nbsp;Show</Button>
    </Nav>
    </Container>
  </Navbar>
  )
}
