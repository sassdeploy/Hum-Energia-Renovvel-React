import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Hum Energia Renovável</title>
        <meta
          name="description"
          content="Entregamos soluções que transformam a forma como condomínios e negócios consomem energia, com impacto real."
        />
        <meta property="og:title" content="Hum Energia Renovável" />
        <meta
          property="og:description"
          content="Entregamos soluções que transformam a forma como condomínios e negócios consomem energia, com impacto real. Fale conosco e conheça nossos produtos."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/102a453b-fe21-4317-b1db-74b106ebf8a5/d2f87c70-4c86-4b7d-887e-d80d841bb71c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="navlilas">
        <div className="home-container2">
          <div className="home-logo">
            <img
              alt="Hum Energia Renovável"
              src="/external/logo-hum-energia.svg"
              className="home-logohumalt"
            />
          </div>
          <div className="home-column1">
            <div className="home-navlinks">
              <a href="#quem-somos" className="home-text10 TextRegularNormal">
                Quem somos
              </a>
              <a href="#solucoes" className="home-text11 TextRegularNormal">
                Nossas soluções
              </a>
            </div>
            <div className="home-actions1">
              <a href="#contato" className="home-button1">
                <span className="home-text12 TextRegularNormal">
                  Entrar em contato
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-row1">
          <div className="home-imagem">
            <img
              alt="humheroimage8242"
              sizes="(min-width: 768px) 800px, 480px"
              src="/external/humheroimage8242-tfa2h-700h.webp"
              srcSet="/external//humheroimage8242-tfa2h-700h.webp 800w, /external/humheroimage8242-tfa2h-mobile.webp 480w"
              className="home-humheroimage"
            />
          </div>
          <div className="home-conteudo">
            <div className="home-texto">
              <span className="home-text13">
                <span className="home-text14">Energizamos</span>
                <br className="home-text15"></br>
                <span className="home-text16">
                  o presente com energia solar.
                </span>
              </span>
              <span className="home-text17 TextLargeNormal">
                Entregamos soluções que transformam a forma como condomínios e
                negócios consomem energia, com impacto real.
              </span>
            </div>
            <div className="home-actions2">
              <a href="#contato" className="home-button2">
                <span className="home-text18 TextMediumNormal">
                  Entrar em contato
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="quem-somos" className="home-intro">
        <div className="home-container3">
          <div className="home-column2">
            <div className="home-content1">
              <span className="home-text19 HeadingDesktopH2">
                Energia solar, descomplicada.
              </span>
              <span className="home-text20 TextMediumNormal">
                A Hum nasceu para simplificar sua transição para a energia
                renovável. Somos uma empresa que viabiliza soluções sustentáveis
                para pessoas, negócios e comunidades. Acreditamos que economia e
                impacto ambiental andam juntos e trabalhamos para tornar essa
                escolha mais fácil.
              </span>
            </div>
            <div className="home-actions3">
              <a href="#solucoes" className="home-button3">
                <span className="home-text21 TextMediumNormal">
                  Quero saber mais
                </span>
                <img
                  alt="IconrightarrowaltI8242"
                  src="/external/iconrightarrowalti8242-3trr.svg"
                  className="home-iconrightarrowalt"
                />
              </a>
            </div>
          </div>
          <div className="home-introimage2">
            <img
              alt="introimage18242"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/introimage18242-dgue-1500w.webp"
              srcSet="/external//introimage18242-dgue-1500w.webp 1200w, /external/introimage18242-dgue-tablet.webp 800w, /external/introimage18242-dgue-mobile.webp 480w"
              className="home-introimage1"
            />
          </div>
        </div>
      </div>
      <div id="solucoes" className="home-solues">
        <div className="home-section-title">
          <div className="home-column3">
            <span className="home-text22">Nossas Soluções</span>
          </div>
        </div>
        <div className="home-row2">
          <div className="home-column4">
            <img
              alt="fazendasolar8243"
              src="/external/fazendasolar8243-5nn-400w.webp"
              className="home-fazendasolar"
            />
            <div className="home-content2">
              <span className="home-text23 HeadingDesktopH4">
                Fazendas Solares
              </span>
              <span className="home-text24 TextLargeMedium">
                Ao se conectar a uma das nossas usinas solares, você reduz sua
                conta de luz e contribui para um futuro mais sustentável, de
                forma simples, acessível e com conexão imediata.
              </span>
            </div>
          </div>
          <div className="home-column5">
            <img
              alt="geracaolocal8243"
              src="/external/geracaolocal8243-sfti-400w.webp"
              className="home-geracaolocal"
            />
            <div className="home-content3">
              <span className="home-text25 HeadingDesktopH4">
                Geração Local
              </span>
              <span className="home-text26 TextLargeMedium">
                Criamos soluções personalizadas para instalação de painéis
                solares no seu telhado ou terreno, garantindo autonomia e
                previsibilidade nos custos energéticos.
              </span>
            </div>
          </div>
          <div className="home-column6">
            <img
              alt="energiaintegrada8243"
              src="/external/energiaintegrada8243-0zah-400w.webp"
              className="home-energiaintegrada"
            />
            <div className="home-content4">
              <span className="home-text27 HeadingDesktopH4">
                Energia Integrada
              </span>
              <span className="home-text28 TextLargeMedium">
                Combina o melhor das soluções Fazenda Solar e Geração Local,
                oferecendo uma abordagem flexível e completa para quem busca
                eficiência e autonomia.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="contato" className="home-cta-hum">
        <div className="home-container4">
          <div className="home-column7">
            <span className="home-text29 HeadingDesktopH2">
              Energia para o presente.
            </span>
          </div>
          <div className="home-column8">
            <span className="home-text30 TextLargeNormal">
              Entre em contato e descubra como podemos trazer economia,
              sustentabilidade e autonomia para o seu dia a dia.
            </span>
            <div className="home-actions4">
              <a
                href="https://wa.me/+5521967317344"
                target="_blank"
                rel="noreferrer noopener"
                className="home-button4"
              >
                <span className="home-text31 TextMediumNormal">
                  Falar pelo WhatsApp
                </span>
                <img
                  alt="IconWhatsappI8243"
                  src="/external/iconwhatsappi8243-5wrr.svg"
                  className="home-icon-whatsapp"
                />
              </a>
              <a
                href="mailto:comercial@somoshum.com.br?subject=Olá, gostaria de mais informações sobre o produto."
                className="home-button5"
              >
                <span className="home-text32 TextMediumNormal">
                  Falar por e-mail
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-introimage3">
          <img alt="image" src="/image-cta.svg" className="home-image" />
        </div>
      </div>
      <div className="home-rodape">
        <div className="home-container5">
          <div className="home-links">
            <div className="home-column9">
              <img
                alt="Hum Energia Renovável"
                src="/external/logo-hum.svg"
                className="home-logo-hum1"
              />
            </div>
          </div>
          <div className="home-credits1">
            <div className="home-container6">
              <div className="home-container7">
                <Script html={`<hr>`}></Script>
              </div>
            </div>
            <div className="home-row3">
              <div className="home-credits2">
                <span className="home-text33 TextSmallNormal">
                  © 2025 Hum Energias Renováveis
                </span>
                <div className="home-footer-links">
                  <span className="home-text34 TextSmallNormal">
                    CNPJ: 24.737.823/0001-62
                  </span>
                </div>
              </div>
              <div className="home-social-links">
                <a
                  href="https://wa.me/+5521967317344"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <img
                    alt="Whatsapp8247"
                    src="/external/whatsapp.svg"
                    className="home-whatsapp"
                  />
                </a>
                <a
                  href="https://www.instagram.com/humenergia/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <img
                    alt="Instagram8247"
                    src="/external/icone-instagram.svg"
                    className="home-instagram"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/hum-neg%C3%B3cios-virtuosos/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <img
                    alt="LinkedIn8247"
                    src="/external/linkedin.svg"
                    className="home-linked-in"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
