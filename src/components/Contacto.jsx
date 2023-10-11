import React from "react";

export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      <form className="contact" action="mailto:jsevilla@iberdrola.com">
        <input type="text" name="" id="" placeholder="nombre" />
        <input type="text" name="" id="" placeholder="apellidos" />
        <input type="text" name="" id="" placeholder="email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Motivo del contacto"
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};
