import React from 'react';
import propTypes from 'prop-types';

const Card = ({title, image, price, link}) =>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            {title}
          </h3>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href={link}>{`$ ${price}USD`}</a>
          </div>
        </div>
    </article>
)

Card.propTypes = {
  title : propTypes.string,
  price : propTypes.number,
  image : propTypes.string,
  link : propTypes.string,
};

Card.defaultProps = {
  title : "Sin Titulo",
  price : 0,
  image : "https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  link : "https://www.google.com"
};

export default Card;