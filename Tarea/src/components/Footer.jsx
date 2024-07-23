// src/components/Footer.jsx
function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Tarea Api</p>
          <ul className="footer-links">
            <li><a href="#about">Sobre nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  