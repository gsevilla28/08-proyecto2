import React from "react";
import { Link } from "react-router-dom";
import { ListadoTrabajos } from "./ListadoTrabajos";

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola mi nombre es Gerardo Sevilla y{" "}
        <strong>soy desarrollador web</strong> en México
      </h1>
      <h2 className="title">
        Tengo experencia en proyectos y desarrollo web.{" "}
        <Link to="/contacto">Contacto</Link>
      </h2>
      <section className="last-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <ListadoTrabajos limite={2} />
      </section>
    </div>
  );
};
