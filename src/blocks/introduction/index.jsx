import React from 'react'
import LogoLS from '../../assets/logo-ls.svg'
import Installated from '../../assets/Installated.svg'
import '../../styles/blocks/introduction.scss'
import PortfolioPDF from '../../assets/portifolio/portfolio-ls-clima-ref.pdf'
import DownloadSVG from '../../assets/download.svg'


const Introduction = ({ scrollToSection }) => {

  const handleClick = () => {
    scrollToSection();
  };

  const handleDownload = () => {
    // Lógica para baixar o arquivo PDF
  };

  return (
    <div className='w-first-block'>
      <div className='w-first-block__body'>
        <img className='w-first-block__body__image' src={LogoLS} alt="logo ls climatização" />
        <div className='w-first-block__body__section-text'>
          <h2 className='w-first-block__body__section-text__title'>Você está enfrentando problemas para encontrar um instalador <span style={{ fontWeight: 750 }}>confiável</span> de ar-condicionado e aquecedores para o seu projeto? </h2>
          <h3 className='w-first-block__body__section-text__subtitle'>Não se preocupe mais! Temos a solução perfeita para você.</h3>
        </div>
        <button className='w-first-block__body__button' onClick={handleClick}>Solicite seu orçamento!</button>
        <br />
        <a className='w-first-block__body__link' href={PortfolioPDF} download="portfolio-ls-clima-ref.pdf">
          <button className='w-first-block__body__button' onClick={handleDownload}>Baixar portfolio <span className='w-first-block__button__icon'><img height='20px' src={DownloadSVG} /></span></button>
        </a>
      </div>
      <img className='w-first-block__installation-image' src={Installated} alt="ar condicionado instalado" />
    </div>
  );
};

export default Introduction;