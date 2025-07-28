import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const HomeNav =() => {
  return (
<Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark"
>
      <Container>
        <Navbar.Brand href="/">Entrolon Projesi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <NavDropdown title="Diğer" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Hakkımızda">Hakkımızda</NavDropdown.Item>
              <NavDropdown.Item href="/Iletişim">İletişim</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Detaylar">
                Proje Detayları
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;