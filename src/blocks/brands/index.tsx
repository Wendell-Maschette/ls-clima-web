import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import BrandsSVG from '../../assets/brands.svg';
import BrandsMobileSVG from '../../assets/mobile/brands-mobile.svg';
import '../../styles/blocks/brands.scss';

export default function Brands() {
  const [hasScrolledToSection, setHasScrolledToSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.w-brands');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !hasScrolledToSection) {
          setHasScrolledToSection(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolledToSection]);

  const springProps = useSpring({
    opacity: hasScrolledToSection ? 1 : 0,
    transform: hasScrolledToSection ? 'translateX(0)' : 'translateX(-200px)',
    config: { duration: 1000 },
  });

  return (
    <div className={`w-brands ${hasScrolledToSection ? 'animate' : ''}`}>
      <div className="w-brands__section-title">
        <h1 className="w-brands__section-title__title">Trabalhamos com todas as marcas</h1>
        <h3 className="w-brands__section-title__subtitle">Conheça as marcas de qualidade que utilizamos para atender às suas necessidades</h3>
      </div>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <animated.div style={springProps}>
            <img src={BrandsSVG} className="w-brands__image" style={{ visibility: isVisible ? 'visible' : 'hidden' }} alt="" />
            <img src={BrandsMobileSVG} className="w-brands__image-mobile" style={{ visibility: isVisible ? 'visible' : 'hidden' }} alt="" />
          </animated.div>
        )}
      </VisibilitySensor>
    </div>
  );
}
