import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer__title">
        Encuéntrame también en otros lugares de la web:
      </h1>
      <ul className="footer__list">
        <li>
          <a
            href="https://github.com/banana-guards"
            target="_blank"
            className="footer__link"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jose-luis-h-g/"
            target="_blank"
            className="footer__link"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/526181467962"
            target="_blank"
            className="footer__link"
          >
            Whatsapp
          </a>
        </li>
      </ul>
    </footer>
  );
};
