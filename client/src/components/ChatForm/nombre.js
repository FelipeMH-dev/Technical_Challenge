import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Avatar } from "./avatar";

export const Nombre = ({
  handleInputChange,
  nombre,
  segundoNombre,
  apellidoPaterno,
  apellidoMaterno,
}) => {
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    if (
      nombre !== "" &&
      segundoNombre !== "" &&
      apellidoPaterno !== "" &&
      apellidoMaterno !== ""
    ) {
      setBandera(true);
    } else {
      setBandera(false);
    }
  }, [nombre, segundoNombre, apellidoPaterno, apellidoMaterno]);

  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-md-4 col-sm-4 ">
          <Avatar />
        </div>
        <div className="col-md-8 col-sm-8 bg-secondary text-white">
          <p className="my-2">¿Cuál es tu Nombre?</p>

          <div className="form-group">
            <input
              name="nombre"
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={handleInputChange}
              className="form-control mt-1"
              required
            />
            <input
              name="segundoNombre"
              type="text"
              placeholder="Seguno Nombre"
              value={segundoNombre}
              onChange={handleInputChange}
              className="form-control mt-1"
              required
            />
            <input
              name="apellidoPaterno"
              type="text"
              placeholder="Apellido Paterno"
              value={apellidoPaterno}
              onChange={handleInputChange}
              className="form-control mt-1"
              required
            />
            <input
              name="apellidoMaterno"
              type="text"
              placeholder="Apellido Materno"
              value={apellidoMaterno}
              onChange={handleInputChange}
              className="form-control mt-1"
              required
            />
          </div>
        </div>
      </div>
      {bandera && (
        <div className="bg-rosado text-white my-2 p-2 rounded text-center">
          {nombre} {segundoNombre} {apellidoPaterno} {apellidoMaterno}
        </div>
      )}
    </div>
  );
};

Nombre.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};
