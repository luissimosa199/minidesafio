import { useState } from "react";

const Form = () => {
  const [cards, setCards] = useState([]);

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [hobbie, setHobbie] = useState("");

  const handleClick = () => {
    setCards([...cards, { nombre, edad, hobbie }]);

    setNombre("");
    setEdad("");
    setHobbie("");
  };

  return (
    <main className="form">
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />

        <label htmlFor="edad">Edad</label>
        <input
          type="text"
          id="edad"
          value={edad}
          onChange={(e) => {
            setEdad(e.target.value);
          }}
        />

        <label htmlFor="hobbie">Hobbie</label>
        <input
          type="text"
          id="hobbie"
          value={hobbie}
          onChange={(e) => {
            setHobbie(e.target.value);
          }}
        />

        <button type="button" onClick={handleClick}>
          Enviar
        </button>
      </form>

      <div className="cards">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Hobbie</th>
          </tr>
        </thead>
        <tbody>
        {cards.length < 1 ? (
          <tr>Llene y envíe el formulario para mostrar los datos</tr>
        ) : (
          cards.map((e, idx) => {
            return (
              <tr key={idx}>
                <td>{e.nombre}</td>
                <td>{e.edad}</td>
                <td>{e.hobbie}</td>
              </tr>
            );
          })
        )}
        </tbody>
      </table>
      </div>
    </main>
  );
};

export default Form;
