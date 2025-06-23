import { Button } from "../../components/Button/Button";
import imageProfile from "/image-profile.png";

import "./Home.css";

export const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__tile-container">
          <h1 className="hero__title">
            Hola, soy Jose Luis. Creo aplicaciones web, combinando frontend y
            backend.
          </h1>
        </div>
        <div className="hero__image-container">
          <img src={imageProfile} alt="" className="hero__image" />
        </div>
        <div className="hero__paragraph">
          <p className="hero-text">
            Tengo experiencia en <strong>desarrollo de software</strong> tanto
            en frontend como en backend, adquirida en proyectos profesionales y
            personales.
          </p>
          <p className="hero-text">
            He complementado mi formación académica con un
            <strong> aprendizaje autodidacta constante</strong>, impulsado por
            mi pasión por la programación y el interés por mantenerme
            actualizado en nuevas herramientas y metodologías. Me adapto
            fácilmente a diferentes entornos de trabajo.
          </p>
        </div>
      </section>
      <section className="home-section studies" id="studies">
        <div className="home-section__info">
          <header className="home-section__header">
            <h2 className="home-section__title">estudios</h2>
            <h3 className="home-section__subtitle home-section__subtitle--gray">
              electronico
            </h3>
          </header>
          <p className="home-section__paragraph">
            <strong>Ingeniero en Electrónica</strong> con interés y experiencia
            en el <strong>desarrollo de software web</strong>. He participado en
            proyectos donde he aplicado tanto habilidades técnicas como de
            colaboración en equipo. Complementé mi formación académica con
            cursos en áreas clave como Git, CSS, Tailwind, fundamentos de redes
            e introducción a ciencia de datos, lo que me ha permitido ampliar mi
            visión del desarrollo.
          </p>
          <Button
            text="cursos"
            color="#fff"
            backgroundColor="#dd0e42"
            link="https://drive.google.com/drive/u/0/folders/1IfqFZatyxLDPpC1SBhemRHQTT9IJAGQ5"
          ></Button>
        </div>
      </section>
      <section className="home-section" id="experience">
        <div className="home-section__info">
          <header className="home-section__header">
            <h2 className="home-section__title home-section__title--blue">
              experiencia
            </h2>
            <h3 className="home-section__subtitle home-section__subtitle--gray">
              MW Consultoria Digital
            </h3>
          </header>
          <p className="home-section__paragraph">
            <strong>Colaboré en el desarrollo de sitios web</strong> responsivos
            para empresas locales, aplicando HTML, CSS y JavaScript. Mejoré la
            experiencia del usuario con componentes interactivos y desarrollé un
            microservicio de notificaciones por correo para la plataforma
            Molinillos, usando Nodemailer y Redis para gestionar envíos
            automáticos de forma eficiente y escalable.
          </p>
          <Button
            text="linkedin"
            color="#fff"
            backgroundColor="#255b98"
            link="https://www.linkedin.com/in/jose-luis-h-g/"
          ></Button>
        </div>
      </section>
      <section className="home-section courses" id="portfolio">
        <div className="home-section__info">
          <header className="home-section__header">
            <h2 className="home-section__title">portafolio</h2>
            <h3 className="home-section__subtitle">proyectos personales</h3>
          </header>
          <p className="home-section__paragraph">
            He desarrollado diversos proyectos personales que fortalecen mi
            perfil fullstack. Entre ellos destaca{" "}
            <strong>
              <a
                href="https://drive.google.com/file/d/1BpLYPb-OylAbZ5BrkiljE2npwxj0xqB2/view"
                target="_blank"
                className="home-section__link"
              >
                FitMe App
              </a>
            </strong>
            , una aplicación colaborativa para gestionar rutinas de ejercicio,
            construida con React Native, NestJS, MongoDB, Redis y Docker.
            También creé{" "}
            <strong>
              <a
                href="https://gmail-git-main-joseluis-projects-796920dc.vercel.app/"
                target="_blank"
                className="home-section__link"
              >
                Meta Mails
              </a>
            </strong>
            , una página de correos electrónicos basada en React e integrada con
            modelos de OpenAI, y un CRUD para la gestión de estacionamientos con
            soporte para distintos tipos de vehículos, utilizando React, NestJS
            y PostgreSQL.
          </p>
          <Button
            text="github"
            color="#1a7f78"
            backgroundColor="#fff"
            link="https://github.com/banana-guards?tab=repositories"
          ></Button>
        </div>
      </section>
      <section className="home-section" id="stack">
        <div className="home-section__info">
          <header className="home-section__header">
            <h2 className="home-section__title home-section__title--orange">
              stack
            </h2>
            <h3 className="home-section__subtitle home-section__subtitle--gray">
              habilidades tecnicas
            </h3>
          </header>
          <ul className="home-section__paragraph">
            <li>
              <strong>Frontend:</strong> HTML, CSS, JavaScript (DOM), React,
              Tailwind, Expo, Zustand, Vite, MUI
            </li>
            <li>
              <strong>Backend:</strong> NestJS, Express.js, API Rest,
              PostgreSQL, MySQL, MongoDB, Redis, ORM, Docker, OAuth 2.0, JWT,
              Swagger, Unit Testing, python
            </li>
            <li>
              <strong>Herramientas y Otros:</strong> GitHub, Jira, AWS, C/C++,
              Metodologías ágiles, Control de versiones, scikit-learn
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
