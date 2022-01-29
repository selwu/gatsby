import * as React from 'react';
import './hero-product.scss';
import { StaticImage } from 'gatsby-plugin-image';

const HeroProduct = () => {
  return (
    <div className="hero-product">
      <div className="hero-product__container">
        <div className="hero-product__description">
          <h2 className="hero-product__title">
            Worldwide B2B provider of really new and the fastest “What will happen next?” sports
            betting product.
          </h2>
          <p className="hero-product__text">
            Transform each moment into betting. And multiple your live betting turnover.
          </p>
          <button>Demo version</button>
        </div>
        <StaticImage
          src="../../images/gatsby-astronaut.png"
          width={515}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="A Gatsby astronaut"
          // style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="scroll" />
    </div>
  );
};

export default HeroProduct;
