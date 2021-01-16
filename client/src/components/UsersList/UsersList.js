import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_USERS = gql`
  {
   users {
      id
      nombre
      segundoNombre
      apellidoPaterno
      apellidoMaterno
      fechaNacimiento
      email
      telefono
    }
  }
`;
export default function UsersList() {

  const { loading, error, data } = useQuery(GET_USERS);
 
  if (loading) return <div className="container"><h4 className="text-center">Loading Users...</h4></div>;
  if (error) {
    return <div className="container"><h4 className="text-center">Error</h4></div>;
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data.users.map(({ id, nombre, segundoNombre, apellidoPaterno,apellidoMaterno,fechaNacimiento,email,telefono }) => (
          <div key={id} className="card m-2 h-50 border border-success">
            <div className="card-body bg-primary text-white">
              <h4>{nombre} {segundoNombre} {apellidoPaterno} {apellidoMaterno}</h4>
              <p>Fecha de nacimiento: {fechaNacimiento}</p>
              <p>Correo electrónico: {email}</p>
              <p>Teléfono: {telefono}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
