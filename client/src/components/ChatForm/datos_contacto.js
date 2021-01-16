import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Avatar } from "./avatar";

export const Datos = ({ handleInputChange, email, telefono }) => {
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    if (email !== "" && telefono !== "") {
      setBandera(true);
    } else {
      setBandera(false);
    }
  }, [email, telefono]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <Avatar />
        </div>
        <div className="col-md-8 col-sm-8 bg-secondary text-white">
          <p className="my-2">Datos de contacto</p>
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={handleInputChange}
              className="form-control mt-1"
              required
            />

            <input
              name="telefono"
              type="tel"
              pattern="[0-9]{9}"
              placeholder="Teléfono celular"
              value={telefono}
              onChange={handleInputChange}
              className="form-control mt-1"
              required
            />
          </div>
        </div>
      </div>
      {bandera && (
        <div className="bg-rosado text-white my-2 p-2 rounded text-center">
          <p>Correo electrónico: {email}</p>
          <p>Teléfono celular: {telefono}</p>
        </div>
      )}
    </div>
  );
};

Datos.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};
