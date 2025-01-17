import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';
import HandFrameworkSVG from '../../assets/hand-framework.svg';
import CleanSVG from '../../assets/clean.svg';
import WindSVG from '../../assets/wind.svg';
import ProjectSVG from '../../assets/project.svg';
import '../../styles/blocks/services-provided.scss';

export default function ServicesProvided() {
  const items = [
    { image: HandFrameworkSVG, title: 'Instalação e manutenção' },
    { image: CleanSVG, title: 'Limpeza e Higienização' },
    { image: WindSVG, title: 'Sistemas de Ventilação' },
    { image: ProjectSVG, title: 'Projetos e documentações' },
  ];

  const [hasScrolledToSection, setHasScrolledToSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.w-services-provided');
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

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateX(-200px)' },
    to: { opacity: hasScrolledToSection ? 1 : 0, transform: hasScrolledToSection ? 'translateX(0)' : 'translateX(-200px)' },
    config: { duration: 900, delay: 700 },
  });

  return (
    <div className="w-services-provided">
      <div className="w-services-provided__section-title">
        <h1 className="w-services-provided__section-title__title">Serviços prestados</h1>
        <h3 className="w-services-provided__section-title__subtitle">
          Serviços para ar-condicionado residencial, comercial e industrial para ambientes perfeitamente climatizados.
        </h3>
      </div>
      <div className="w-services-provided__section-services">
        {trail.map((props, index) => (
          <animated.div key={index} className="w-services-provided__section-services__service" style={props}>
            <img className="w-services-provided__section-services__service__image" src={items[index].image} alt="serviços prestados" />
            <h2 className="w-services-provided__section-services__service__title">{items[index].title}</h2>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
