import React from 'react'
import BrandsSVG from '../../assets/brands.svg'
import BrandsMobileSVG from '../../assets/mobile/brands-mobile.svg'
import Styles from '../../styles/blocks/brands.scss'

export default function Brands() {
    return (
        <div className='w-brands'>
            <div className='w-brands__section-title'>
                <h1 className='w-brands__section-title__title'>Trabalhamos com todas as marcas</h1>
                <h3 className='w-brands__section-title__subtitle'>Conheça as marcas de qualidade que utilizamos para atender às suas necessidades</h3>
            </div>
            <img src={BrandsSVG} className='w-brands__image'/>
            <img src={BrandsMobileSVG} className='w-brands__image-mobile'/>
        </div>
    )
}
