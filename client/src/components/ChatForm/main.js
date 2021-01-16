import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useForm } from "../../hooks/useForm";
import { Nombre } from "./nombre";
import { Fecha } from "./fecha_nacimiento";
import { Datos } from "./datos_contacto";
import "./styles.css";
import imgQuestion from "../../images/question.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const CREATE_USER = gql`
  mutation CreateUser(
    $nombre: String!
    $segundoNombre: String!
    $apellidoPaterno: String!
    $apellidoMaterno: String!
    $fechaNacimiento: String!
    $email: String!
    $telefono: String!
  ) {
    createUser(
      nombre: $nombre
      segundoNombre: $segundoNombre
      apellidoPaterno: $apellidoPaterno
      apellidoMaterno: $apellidoMaterno
      fechaNacimiento: $fechaNacimiento
      email: $email
      telefono: $telefono
    ) {
      nombre
    }
  }
`;

export default function ChatForm() {
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    email: "",
    telefono: "",
  });

  const {
    nombre,
    segundoNombre,
    apellidoPaterno,
    apellidoMaterno,
    fechaNacimiento,
    email,
    telefono,
  } = formValues;
  const [createUser] = useMutation(CREATE_USER);
  const [bandera, setBandera] = useState(false);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    if (
      nombre !== "" &&
      segundoNombre !== "" &&
      apellidoPaterno !== "" &&
      apellidoMaterno !== "" &&
      fechaNacimiento !== "" &&
      email !== "" &&
      telefono !== ""
    ) {
      setBandera(true);
    } else {
      setBandera(false);
    }
  }, [
    nombre,
    segundoNombre,
    apellidoPaterno,
    apellidoMaterno,
    fechaNacimiento,
    email,
    telefono,
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUser({
      variables: {
        nombre,
        segundoNombre,
        apellidoPaterno,
        apellidoMaterno,
        fechaNacimiento,
        email,
        telefono,
      },
    });
    setInfo(true);
    //*Variables de Sesion con local storage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("segundoNombre", segundoNombre);
    localStorage.setItem("apellidoPaterno", apellidoPaterno);
    localStorage.setItem("apellidoMaterno", apellidoMaterno);
    localStorage.setItem("fechaNacimiento", fechaNacimiento);
    localStorage.setItem("email", email);
    localStorage.setItem("telefono", telefono);
  };

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card  ">
            <div className="card-header bg-success text-white">
              <div className="row">
                <div className="col-md-8">Titulo del formulario</div>
                <div className="col-md-4 ">
                  <img
                    src={imgQuestion}
                    className="img-fluid mx-auto"
                    alt="imgQuestion"
                  />
                </div>
              </div>
              <small>
                {" "}
                <FontAwesomeIcon icon={faClock} /> En menos de 5 minutos
              </small>
            </div>
            <div className="card-body bg-gris overflow-auto  ">
              <form onSubmit={onSubmit}>
                <Nombre
                  handleInputChange={handleInputChange}
                  nombre={nombre}
                  segundoNombre={segundoNombre}
                  apellidoPaterno={apellidoPaterno}
                  apellidoMaterno={apellidoMaterno}
                />

                <Fecha
                  handleInputChange={handleInputChange}
                  fechaNacimiento={fechaNacimiento}
                />

                <Datos
                  handleInputChange={handleInputChange}
                  email={email}
                  telefono={telefono}
                />

                {bandera && (
                  <div className="bg-info text-white my-2 p-2 rounded">
                    Si tus datos son correctos por favor continuemos
                  </div>
                )}

                <button className="btn btn-primary btn-block my-2 ">
                  Iniciar
                </button>
              </form>
              {info && (
                <div className="bg-rosado text-white my-2 p-2 rounded">
                  <p>Fecha de Nacimiento: {fechaNacimiento}</p>
                  <p>Correo Electrónico: {email}</p>
                  <p>Teléfono Celular: {telefono}</p>
                  <p>
                    Nombre: {nombre} {segundoNombre} {apellidoPaterno}{" "}
                    {apellidoMaterno}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
