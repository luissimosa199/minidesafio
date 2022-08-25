import data from "../data.json";

import { useState, useEffect } from "react";

const Data = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    setPersonas(data);
  }, []);

  return (
    <main className="data">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
            <th>Hobbie</th>
          </tr>
        </thead>
        <tbody>
        {personas.length < 1 ? (
          <tr>Cargando...</tr>
        ) : (
          personas.map((e, idx) => {
            return (
              <tr key={idx}>
                <td>{e.nombre}</td>
                <td>{e.edad}</td>
                <td>{e.carrera}</td>
                <td>{e.hobbie}</td>
              </tr>
            );
          })
        )}
        </tbody>
      </table>
    </main>
  );
};

export default Data;
