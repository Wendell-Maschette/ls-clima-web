import React from 'react'
import LogoLS from '../../assets/logo-ls.svg'
import Installated from '../../assets/Installated.svg'
import Styles from '../../styles/blocks/introduction.scss'
import PortfolioPDF from '../../assets/portifolio/portfolio.pdf'
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
      <img className='w-first-block__image' src={LogoLS} alt="logo ls climatização" />
      <div className='w-first-block__section-text'>
        <h2 className='w-first-block__section-text__title'>Você está enfrentando problemas para encontrar um instalador <span style={{ fontWeight: 750 }}>confiável</span> de ar-condicionado e aquecedores para o seu projeto? </h2>
        <h3 className='w-first-block__section-text__subtitle'>Não se preocupe mais! Temos a solução perfeita para você.</h3>
      </div>
      <button className='w-first-block__button' onClick={handleClick}>Solicite seu orçamento!</button>
      <br/>
      <a className='w-first-block__link' href={PortfolioPDF} download="portfolio.pdf">
        <button className='w-first-block__button' onClick={handleDownload}>Baixar portfolio <span className='w-first-block__button__icon'><img height='20px' src={DownloadSVG} /></span></button>
      </a>
      <img className='w-first-block__installation-image' src={Installated} alt="ar condicionado instalado" />
    </div>
  );
};

export default Introduction;