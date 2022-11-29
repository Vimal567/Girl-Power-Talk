import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-scroll';
import "./Header.css"
import logo from "./images/logo.png"


export default function Header(){
  const reload = () => {
    window.location.reload();//On clicking the logo page reloads
  }

  return(
    <div>
      <Navbar className='fixed-top header-container' collapseOnSelect expand="md" id="navbg"  variant="dark">
        <Container>
            <Navbar.Brand onClick={reload}>
              <img alt="brand" src={logo} id="brand" />
            </Navbar.Brand>
          <div className='justify-content-end'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link className='navheading space' ><Link to="Home" >Home</Link></Nav.Link>
              <Nav.Link className='navheading space' ><Link to="About" >About</Link></Nav.Link>
              <Nav.Link className='navheading space' ><Link to="Featured" >Featured & Awards</Link></Nav.Link>
              <Nav.Link className='navheading space' ><Link to="Contact" >Contact</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}