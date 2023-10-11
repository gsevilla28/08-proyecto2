import React from "react";

export const Servicios = () => {
  return (
    <div className="page">
      <h1 className="heading">Servicios</h1>
      <section className="services">
        <article className="service">
          <h2>Diseño Web</h2>
          <p>Maquetacion de paginas web</p>
        </article>
        <article className="service">
          <h2>Desarrollo Web</h2>
          <p>Creacion de paginas web desde cero</p>
        </article>
        <article className="service">
          <h2>Posicionamiento web</h2>
          <p>
            Desarrollo de aplicaciones hechas a la medida de tus necesidades
          </p>
        </article>
      </section>
    </div>
  );
};
