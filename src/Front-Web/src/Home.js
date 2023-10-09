import React from 'react';
import Sidebar from './Sidebar';
import './Style.css';

function Home() {
  return (
    <div className= "home">
      <Sidebar />
      <h1>Home Page</h1>
      {/* Adicione o conteúdo da página Home aqui */}
    </div>
  );
}

export default Home;
