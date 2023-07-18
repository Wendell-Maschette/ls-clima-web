import React from 'react'
import PartnersSVG from '../../assets/partners.svg'
import PartnersMobileSVG from '../../assets/mobile/partners-mobile.svg'
import Styles from '../../styles/blocks/partners.scss'

export default function Partners() {
  return (
    <div className='w-third-block'>
      <h1 className='w-third-block__title'>Parceiros e clientes</h1>
      <h3 className='w-third-block__subtitle'>Confira as empresas para quem já prestamos nossos serviços</h3>
      <img className='w-third-block__image' src={PartnersSVG} />
      <img className='w-third-block__image-mobile' src={PartnersMobileSVG} />
    </div>
  )
}
