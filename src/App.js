import React from 'react';
import "./styles/styles.scss";
import Banner from "./Banner";
import Card from './Card';

const cursos = [
  {
    "titulo": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": 40,
    "link": "http://ed.team"
  },
  {
    "titulo": "Drupal desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
    "price": 30,
    "link": "http://ed.team"
  }, {
    "titulo": "Go desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
    "price": 50,
    "link": "http://ed.team"
  }, {
    "titulo": "HTML desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    "price": 10,
    "link": "http://ed.team"
  }
]



const App = () =>(
  <>
    <Banner/>

    <div className="ed-grid m-grid-4">
      {/* {
          cursos.map( (c) =><Card title={c.titulo} image={c.image} price={c.price} link={c.link}/>)

      } */}

{
      cursos.map( c => <Card title={c.titulo} image={c.image} price={c.price} link={c.link} /> )
    }
    </div>
    

  </>
)

export default App;
