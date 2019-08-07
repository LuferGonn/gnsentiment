import React from 'react';
import "./styles/styles.scss";

import Card from './Card';

const App = () =>(
  <>
    <div className="main-banner img-container" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="Hola" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3m8DwULIGMeGZbm-lpKfPsn2C640LYoZV4MTlC4WSq1Nw262"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Sabrina Lynn</p>
            <p> Sexo en el mundo</p>
            <a href="http://ed.team" className="button">Pagina Oficial</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>


  </>
)

export default App;
