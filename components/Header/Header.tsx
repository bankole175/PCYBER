import { Container, Nav, Navbar } from 'react-bootstrap'
import Image from 'next/image'

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <span className="d-flex align-items-center">
            <Image src="/icons/logo.svg" alt="" width={50} height={50} />
            <span className="text-smcyber-primary ms-n2">SMCYBER</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="/">Partners</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
          <button className="btn-smcyber-primary">Demo Now</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
