import { Container, Nav, Navbar } from 'react-bootstrap'
import Image from 'next/image'
import Button from '../Button'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const requestADemo = () => {
    router.push('request-a-demo')
  }
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <span className="d-flex align-items-center">
            <Image src="/icons/logo.svg" alt="" width={50} height={50} />
            <span className="text-smcyber-primary ms-n2">PLATFORMCYBER</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#about-us">About Us</Nav.Link>
            <Nav.Link href="/#services">Services</Nav.Link>
            <Nav.Link href="/contact-us">Contact</Nav.Link>
          </Nav>
          <Button onClick={() => requestADemo()}>Request a Demo</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
