import React from 'react'
import HandFrameworkSVG from '../../assets/hand-framework.svg'
import CleanSVG from '../../assets/clean.svg'
import WindSVG from '../../assets/wind.svg'
import ProjectSVG from '../../assets/project.svg'
import Styles from '../../styles/blocks/services-provided.scss'

export default function ServicesProvided() {
  return (
    <div className='w-services-provided'>
      <div className='w-services-provided__section-title'>
        <h1 className='w-services-provided__section-title__title'>Serviços prestados</h1>
        <h3 className='w-services-provided__section-title__subtitle'>Serviços para ar-condicionado residencial, comercial e industrial para ambientes perfeitamente climatizados</h3>
      </div>
      <div className='w-services-provided__section-services'>
        <div className='w-services-provided__section-services__service'>
          <img className='w-services-provided__section-services__service__image' src={HandFrameworkSVG}/>
          <h2 className='w-services-provided__section-services__service__title'>Instalação e manutenção</h2>
        </div>
        <div className='w-services-provided__section-services__service'>
          <img className='w-services-provided__section-services__service__image' src={CleanSVG}/>
          <h2 className='w-services-provided__section-services__service__title'>Limpeza e Higienização</h2>
        </div>
        <div className='w-services-provided__section-services__service'>
          <img className='w-services-provided__section-services__service__image' src={WindSVG}/>
          <h2 className='w-services-provided__section-services__service__title'>Sistemas de Ventilação</h2>
        </div>
        <div className='w-services-provided__section-services__service'>
          <img className='w-services-provided__section-services__service__image' src={ProjectSVG}/>
          <h2 className='w-services-provided__section-services__service__title'>Projetos e documentações</h2>
        </div>
      </div>
    </div>
  )
}
