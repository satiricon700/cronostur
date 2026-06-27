import { useState } from 'react';
import './App.css';

function App() {
  const [mensaje] = useState("¡Bienvenido a CronosTur!");

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>{mensaje}</h1>
      <p>El sistema está operativo.</p>
    </div>
  );
}

export default App;