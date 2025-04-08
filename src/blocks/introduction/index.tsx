import LogoLS from "../../assets/logo-ls.svg";
import "../../styles/blocks/introduction.scss";
import PortfolioPDF from "../../assets/portifolio/portfolio-ls-clima-ref.pdf";
import DownloadSVG from "../../assets/download.svg";
import VideoInstallated from "../../assets/videos/video-installated.mp4";

const Introduction = ({ scrollToSection }: any) => {
  const handleClick = () => {
    scrollToSection();
  };

  return (
    <div className="w-first-block">
      <div className="w-first-block__body">
        <img
          className="w-first-block__body__image"
          src={LogoLS}
          alt="logo ls climatização"
        />
        <div className="w-first-block__body__section-text">
          <h2 className="w-first-block__body__section-text__title">
            Seu conforto começa com a{" "}
            <span style={{ fontWeight: 750 }}>
              LS Climatização e Refrigeração
            </span>
          </h2>
          <p className="w-first-block__body__section-text__title">
            Não tenha dor de cabeça! Cuidamos da instalação e manutenção do seu
            ar-condicionado e aquecedor.
          </p>
          <h5 className="w-first-block__body__section-text__title">
            Atendimento especializado para residências, comércios e indústrias
            com qualidade, segurança e agilidade.
          </h5>
        </div>
        <button className="w-first-block__body__button" onClick={handleClick}>
          Solicitar orçamento
        </button>
        <br />
        <a
          className="w-first-block__body__link"
          href={PortfolioPDF}
          download="portfolio-ls-clima-ref.pdf"
        >
          <button className="w-first-block__body__button">
            Baixar portfolio{" "}
            <span className="w-first-block__button__icon">
              <img height="20px" src={DownloadSVG} />
            </span>
          </button>
        </a>
      </div>
      <video
        autoPlay
        muted
        loop
        className="w-first-block__installation-video"
        playsInline
        src={VideoInstallated}
      />
    </div>
  );
};

export default Introduction;
