import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Avatar } from "./avatar";

export const Fecha = ({ handleInputChange, fechaNacimiento }) => {
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    if (fechaNacimiento !== "") {
      setBandera(true);
    } else {
      setBandera(false);
    }
  }, [fechaNacimiento]);
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-md-4 col-sm-4">
          <Avatar />
        </div>
        <div className="col-md-8 col-sm-8 bg-secondary text-white">
          <p className="my-2">¿Cuál es tu fecha de nacimiento?</p>
          <div className="form-group">
            <input
              type="date"
              name="fechaNacimiento"
              value={fechaNacimiento}
              min="1900-01-01"
              max="2020-01-31"
              onChange={handleInputChange}
              className="form-control"
              required
            ></input>
          </div>
        </div>
      </div>
      {bandera && (
        <div className="bg-rosado text-white my-2 p-2 rounded text-center">
          {fechaNacimiento}
        </div>
      )}
    </div>
  );
};

Fecha.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};
