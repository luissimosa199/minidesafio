const Cover = () => {
  return (
    <main className="cover">
      <h1>Mini-challenge</h1>
      <p>
        Esta pequeña web-app podrán encontrar un componente Header y un Main
      </p>
      <p>
        En el Header tenemos dos links, uno que renderiza el componente Data que
        muestra los datos del JSON provisto y otro que renderiza el componente
        Form, para esto utilicé react-router.
      </p>
      <p>
        En el componente Data se renderiza la tabla con los datos del JSON, para
        el estilo utilicé Bootstrap como indicaba la premisa. En el componente
        Form también se utilizó Bootstrap para estilizar, allí podemos encontrar
        un formulario simple que pide tres datos, los inputs estan controlados
        con useState localmente y una vez enviado se renderizan estos datos en
        el main.
      </p>
    </main>
  );
};

export default Cover;
