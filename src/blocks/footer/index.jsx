import React from 'react'
import Styles from '../../styles/blocks/footer.scss'
import LogoLsSVG from '../../assets/logo-ls.svg'
import EmailSVG from '../../assets/email.svg'
import PhoneSVG from '../../assets/phone.svg'
import InstaSVG from '../../assets/instagram.svg'

export default function Footer() {
  return (
    <div className='w-footer'>
      <div className='w-footer__section-title'>
        <h1>Contate-nos</h1>
        <h3>Entre em contato conosco utilizando as informações abaixo e acompanhe-nos para ficar atualizado com as últimas novidades!</h3>
      </div>
      <div className='w-footer__section-contact'>
        <img className='w-footer__image' src={LogoLsSVG} />
        <div className='w-footer__contacts'>
          <div className='w-footer__contact'>
            <img className='w-footer__icon' src={EmailSVG} />
            <div className='w-footer__text-contact'>
              <h3 className='w-footer__label'>Telefone</h3>
              <p className='w-footer__contact-value'>(11) 94585-5992</p>
            </div>
          </div>
          <div className='w-footer__contact'>
            <img className='w-footer__icon' src={PhoneSVG} />
            <div className='w-footer__text-contact'>
              <h3 className='w-footer__label'>E-mail</h3>
              <p className='w-footer__contact-value'> lsrefrigeracao@outlook.com</p>
            </div>
          </div>
          <div className='w-footer__contact'>
            <img className='w-footer__icon' src={InstaSVG} />
            <div className='w-footer__text-contact'>
              <h3 className='w-footer__label'>Instagram</h3>
              <p className='w-footer__contact-value'>@ls_refrigeracao_climatizacao</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
