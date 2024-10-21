import "../../styles/blocks/footer.scss";
import LogoLsSVG from "../../assets/logo-ls.svg";
import EmailSVG from "../../assets/email.svg";
import PhoneSVG from "../../assets/phone.svg";
import InstaSVG from "../../assets/instagram.svg";

export default function Footer() {
  return (
    <div className="w-footer">
      <div className="w-footer__section-title">
        <h1>Contate-nos</h1>
        <h3>
          Entre em contato conosco utilizando as informações abaixo e acompanhe-nos para ficar atualizado com as últimas novidades!
        </h3>
      </div>
      <div className="w-footer__section-contact">
        <img className="w-footer__image" src={LogoLsSVG} alt="Logo LS" />
        <div className="w-footer__contacts">
          <ul>
            <li>
              <a href="https://wa.me/5511987654321?text=Quero%20um%20or%C3%A7amento">
                <div className="w-footer__contact">
                  <img className="w-footer__icon" src={PhoneSVG} alt="Whatsapp" />
                  <div className="w-footer__text-contact">
                    <h3 className="w-footer__label">Whatsapp</h3>
                    <p className="w-footer__contact-value">(11) 94585-5992</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="mailto:lsclimaref@gmail.com?subject=Solicitação%20de%20Orçamento&body=Quero%20um%20orçamento">
                <div className="w-footer__contact">
                  <img className="w-footer__icon" src={EmailSVG} alt="E-mail" />
                  <div className="w-footer__text-contact">
                    <h3 className="w-footer__label">E-mail</h3>
                    <p className="w-footer__contact-value">lsclimaref@gmail.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ls_refrigeracao_climatizacao/?igsh=MTBlYXI0emttczk1dg%3D%3D">
                <div className="w-footer__contact">
                  <img className="w-footer__icon" src={InstaSVG} alt="Instagram" />
                  <div className="w-footer__text-contact">
                    <h3 className="w-footer__label">Instagram</h3>
                    <p className="w-footer__contact-value">@ls_refrigeracao_climatizacao</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
