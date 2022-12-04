import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Personaje from "./components/Personaje";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20rem;
  flex-direction: column;
  gap: 2rem;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 50%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Verdana;
  font-size: 1.5rem;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 10px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

function App() {
  const [personaje, setPersonaje] = useState({});

  const consultarAPI = async () => {
    const resultado = await fetch(
      "https://www.breakingbadapi.com/api/character/random"
    );
    const personaje = await resultado.json();
    setPersonaje(personaje[0]);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Personaje personaje={personaje} />
      <Button onClick={consultarAPI}>Obtener Personaje</Button>
    </Contenedor>
  );
}

export default App;
