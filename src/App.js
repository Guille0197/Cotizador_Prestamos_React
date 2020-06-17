import React, { useState, Fragment } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Mensaje from './components/Mensaje'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import Footer from './components/Footer'


function App() {
  // Definir un State
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;

  if (cargando) {
    componente = <Spinner />;
  }
  else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />
  }

  return (
    <Fragment >
      <Header
        titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
