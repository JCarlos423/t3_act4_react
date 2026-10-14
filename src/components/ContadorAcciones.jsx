import { useState } from 'react';

function ContadorAcciones() {
  const [clics, setClics] = useState(0);

  return (
    <div className="tarjeta-info">
      <span>Contador de clics: <strong>{clics}</strong></span>
      <button className="btn" onClick={() => setClics(clics + 1)}>
        +1 Clic
      </button>
    </div>
  );
}

export default ContadorAcciones;