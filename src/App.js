import React from 'react';
import './App.css';

function App() {
  // state untuk menyimpan jumlah klik
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>Selamat Datang di Website React Pertamaku!</h1>
      <p>Kamu sudah menekan tombol ini {count} kali.</p>
      <button onClick={() => setCount(count + 1)}>
        Klik Aku
      </button>
    </div>
  );
}

export default App;
