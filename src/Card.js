import React from 'react';

const Card = () =>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://drupal.ed.team/sites/default/files/2018-06/design-especialidad.jpg" alt="gfh"/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
          </h3>
          <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
              <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                  <img src="https://drupal.ed.team/sites/default/files/2018-06/design-especialidad.jpg" alt="fgh" />
                </div>
              </div>
              <span className="small">Alexys Lozada</span>
            </div>
          </div>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="http://ed.team">$ 20USD</a>
          </div>
        </div>
      </article>
)

export default Card;