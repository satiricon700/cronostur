import { useState } from 'react';
import './App.css';

function App() {
  const [mensaje] = useState("¡Bienvenido a CronosTur!");

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>{mensaje}</h1>
      <p>Bienvenidos a mi proyecto de software cronostur</p>
    </div>
  );
}

export default App;