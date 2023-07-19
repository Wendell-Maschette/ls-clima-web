import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import PartnersSVG from '../../assets/partners.svg';
import PartnersMobileSVG from '../../assets/mobile/partners-mobile.svg';
import '../../styles/blocks/partners.scss';

export default function Partners() {
  const [visible, setVisible] = useState(false);
  const [hasScrolledToSection, setHasScrolledToSection] = useState(false);

  const springProps = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(200px)',
    config: { duration: 1000 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.w-third-block');
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

  const onChangeVisibility = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    <div className={`w-third-block ${hasScrolledToSection ? 'animate' : ''}`}>
          <h1 className='w-third-block__title'>Parceiros e clientes</h1>
          <h3 className='w-third-block__subtitle'>Confira as empresas para quem já prestamos nossos serviços</h3>
      <VisibilitySensor onChange={onChangeVisibility} partialVisibility>
        <animated.div style={springProps}>
          <img className='w-third-block__image' src={PartnersSVG} alt="Partners Image" />
          <img className='w-third-block__image-mobile' src={PartnersMobileSVG} alt="Partners Mobile Image" />
        </animated.div>
      </VisibilitySensor>
    </div>
  );
}
