import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Anasayfa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Hakkımızda">Hakkımızda</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Iletişim">İletişim</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
      </Nav>
    
    </>
  );
}

export default Footer;