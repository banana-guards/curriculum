import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <a href="#studies" className="nav__anchor nav__anchor--red">
            estudios
          </a>
        </li>
        <li>
          <a href="#experience" className="nav__anchor nav__anchor--blue">
            experiencia
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav__anchor nav__anchor--red">
            portafolio
          </a>
        </li>
        <li>
          <a href="#stack" className="nav__anchor nav__anchor--green">
            stack
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/526181467962"
            target="_blank"
            className="nav__anchor nav__anchor--red"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
