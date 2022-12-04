import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Contenedor = styled.div`
  font-weight: bold;
  font-family: Verdana;
  color: white;
`;

const Img = styled.img`
  height: 10rem;
  width: 7rem;
  border-radius: 10px;
  border: solid 2px black;
`;

const Personaje = ({ personaje }) => {
  const { nickname, img } = personaje;
  return (
    <Contenedor>
      <Img src={img} alt="" />
      <p>-{nickname}</p>
    </Contenedor>
  );
};

Personaje.propTypes = {
  personaje: PropTypes.object.isRequired,
};

export default Personaje;
