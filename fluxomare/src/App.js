
import { useEffect, useRef, useState } from "react";
import * as images from "./assets/img";
import Paralax from "./paralax.jsx";
import './App.css';

function App() {
  const collectionTrackRef = useRef(null);
  const historyContentRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHistoryContentVisible, setIsHistoryContentVisible] = useState(false);

  useEffect(() => {
    const historyContent = historyContentRef.current;

    if (!historyContent) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHistoryContentVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(historyContent);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollCollection = (direction) => {
    const track = collectionTrackRef.current;

    if (!track) {
      return;
    }

    const card = track.querySelector(".product-card");
    const gap = 28;
    const cardWidth = card ? card.offsetWidth + gap : track.clientWidth;

    track.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  const products = [
    {
      name: "Maré",
      price: "R$ 149,00",
      image:
        `${images.foto31}`,
    },
    {
      name: "Brisa",
      price: "R$ 129,00",
      image:
        `${images.foto32}`,
    },
    {
      name: "Onda",
      price: "R$ 169,00",
      image:
        `${images.foto35}`,
    },
    {
      name: "Corrente",
      price: "R$ 139,00",
      image:
        `${images.foto33}`,
    }, {
      name: "Maré",
      price: "R$ 149,00",
      image:
        `${images.foto34}`,
    },
    {
      name: "Brisa",
      price: "R$ 129,00",
      image:
        `${images.foto36}`,
    },
    {
      name: "Onda",
      price: "R$ 169,00",
      image:
        `${images.foto37}`,
    },
    {
      name: "Corrente",
      price: "R$ 139,00",
      image:
        `${images.foto38}`,
    },
  ];

  const catalogItems = [
    {
      name: "Acessórios",
      description: "Proteção para celular com estampas inspiradas no mar.",
      image:
        `${images.foto37}`,
    },
    {
      name: "Bolsas",
      description: "Bolsas leves para praia, rotina e movimento.",
      image:
        `${images.foto34}`,
    },
    {
      name: "Camisetas",
      description: "Básicos confortáveis com identidade Fluxo Maré.",
      image:
        `${images.foto32}`,
    },
    {
      name: "Shorts",
      description: "Modelagens práticas para dias solares.",
      image:
        `${images.foto33}`,
    },
    {
      name: "Calças",
      description: "Peças fluidas para acompanhar todos os fluxos.",
      image:
        `${images.foto38}`,
    },
  ];

  const features = [
    {
      title: "Sustentável",
      description: "Materiais ecológicos e produção consciente.",
      icon: "♻️",
    },
    {
      title: "Feito no Brasil",
      description: "Valorizamos o que é nosso e quem faz com propósito.",
      icon: "🌎",
    },
    {
      title: "Design Autoral",
      description: "Peças únicas que unem estética e funcionalidade.",
      icon: "♡",
    },
    {
      title: "Conexão com a Natureza",
      description: "Inspiradas na leveza, força e beleza do oceano.",
      icon: "☀",
    },
  ];

  return (
    <div className="bg-[#f6f1eb] text-[#5f5a56] min-h-screen font-serif">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f6f1eb]/80 backdrop-blur-md border-b border-[#e6ddd3]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <div className="header-logo">
            <img src={images.logoazul} alt="Fluxo Mare logo" />
          </div>

          <div className="text-center">
            <h1 className="text-2xl tracking-[0.4em] uppercase text-[#67605c]">
              Fluxo Maré
            </h1>
            <p className="text-xs tracking-[0.3em] mt-1 text-[#90857d] uppercase">
              tudo que flui encontra o oceano
            </p>
          </div>

          <nav className="desktop-nav hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
            <a href="#collection" className="hover:text-black transition">
              coleção
            </a>
            <a href="#catalogo" className="hover:text-black transition">
              catálogo
            </a>
            <a href="#about" className="hover:text-black transition">
              sobre
            </a>
            <a href="#history" className="hover:text-black transition">
              nossa história
            </a>
            <a href="#sustainability" className="hover:text-black transition">
              sustentabilidade
            </a>
            <a href="#contact" className="hover:text-black transition">
              contato
            </a>
          </nav>

          <button
            type="button"
            className={`mobile-menu-button ${isMenuOpen ? "is-open" : ""}`}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          id="mobile-menu"
          className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        >
          <a href="#collection" onClick={() => setIsMenuOpen(false)}>
            cole&ccedil;&atilde;o
          </a>
          <a href="#catalogo" onClick={() => setIsMenuOpen(false)}>
            cat&aacute;logo
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            sobre
          </a>
          <a href="#piaui" onClick={() => setIsMenuOpen(false)}>
            Piau&iacute;
          </a>
          <a href="#history" onClick={() => setIsMenuOpen(false)}>
            nossa hist&oacute;ria
          </a>
          <a href="#sustainability" onClick={() => setIsMenuOpen(false)}>
            sustentabilidade
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            contato
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="hero-section"
        style={{
          backgroundImage:
            `url(${images.foto1})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-text">
            <div>
              <p>
                coleção consciente
              </p>

              <h2>
                Leveza em Movimento
              </h2>
            </div>

            <p>
              Ecobags que acompanham o seu fluxo e respeitam a maré.
            </p>

            <a href="#collection" className="hero-button">
              Conheça a Coleção
            </a>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
      >
        <div>
          <p>
            Sobre a Fluxo Maré
          </p>

          <h3>
            O movimento que nos conecta
          </h3>

          <p className="about-description">
            A Fluxo Maré nasceu do encontro entre design, consciência e
            natureza. Nossas peças são criadas para gerar impacto positivo,
            utilizando materiais sustentáveis e produção responsável.
          </p>

          <a href="#history" className="about-button">
            Saiba Mais
          </a>
        </div>

        <div className="about-image">
          <img
            src={images.foto5}
            alt="Woman with eco bag"
          />
        </div>
      </section>

      {/* Collection */}
      <section id="collection">
        <div>
          <div className="collection-header">
            <div>
              <p>
                coleção
              </p>

              <h3>
                Para Todos os Fluxos
              </h3>
            </div>

          </div>

          <div className="collection-carousel">
            <div className="carousel-controls">
              <button
                type="button"
                aria-label="Produto anterior"
                onClick={() => scrollCollection(-1)}
              >
                ‹
              </button>

              <button
                type="button"
                aria-label="Próximo produto"
                onClick={() => scrollCollection(1)}
              >
                ›
              </button>
            </div>

            <div className="products-grid" ref={collectionTrackRef}>
              {products.map((product, index) => (
                <div
                  key={`${product.name}-${index}`}
                  className="product-card"
                >
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  <div className="product-info">
                    <h4>
                      {product.name}
                    </h4>

                    <p>{product.price}</p>
                  </div>

                </div>

              ))}
            </div>
          </div>
        </div>
      </section>

      
      <Paralax />

      {/* Catalogo */}
      <section id="catalogo">
        <div className="catalogo-header">
          <p>
            catálogo
          </p>

          <h3>
            Produtos Para o Seu Fluxo
          </h3>

          <p className="catalogo-description">
            Explore as categorias da Fluxo Maré: capinhas, bolsas, camisetas,
            shorts e calças pensadas para movimento, conforto e estilo.
          </p>
        </div>

        <div className="catalogo-grid">
          {catalogItems.map((item) => (
            <a
              key={item.name}
              href="#collection"
              className="catalogo-card"
            >
              <div className="catalogo-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="catalogo-info">
                <h4>
                  {item.name}
                </h4>

                <p>
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Piaui */}
      <section id="piaui" className="piaui-section">
        <div className="piaui-overlay"></div>

        <div className="piaui-content">
          <p>
            criada no litoral do Piau&iacute;
          </p>

          <h3>
            Onde o vento encontra a mar&eacute;
          </h3>

          <p>
            A Fluxo Mar&eacute; carrega a leveza do Piau&iacute;: dunas, sol,
            rio, oceano e o ritmo calmo de quem cria perto da natureza.
          </p>

          <a href="#about">
            conhecer a origem
          </a>
        </div>
      </section>

      {/* History */}
      <section id="history">
        <div
          ref={historyContentRef}
          className={`history-content scroll-fade-in ${isHistoryContentVisible ? "is-visible" : ""
            }`}
        >
          <p>
            nossa história
          </p>

          <h3>
            Feita no Ritmo da Maré
          </h3>

          <p className="history-description">
            A Fluxo Maré começou como um desejo simples: criar peças bonitas,
            úteis e mais conscientes para acompanhar a rotina de quem vive em
            movimento. Entre praias, feiras e conversas com artesãs brasileiras,
            transformamos retalhos, fibras naturais e ideias leves em ecobags
            pensadas para durar.
          </p>

          <div className="history-details">
            <div>
              <strong>2026</strong>
              <span>primeiras peças autorais</span>
            </div>

            <div>
              <strong>Brasil</strong>
              <span>produção local e cuidadosa</span>
            </div>

            <div>
              <strong>Oceano</strong>
              <span>inspiração para cada coleção</span>
            </div>
          </div>
        </div>

        <div className="history-image">
          <img
            src={images.nossaHistoria}
            alt="Mesa de criação com tecidos naturais"
          />
        </div>
      </section>

      {/* Features */}
      <section
        id="sustainability"
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="feature-card"
          >
            <div>{feature.icon}</div>

            <h4>
              {feature.title}
            </h4>

            <p>
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      <a
        href="#catalogo"
        className="floating-bag"
        aria-label="Abrir catálogo"
      >
        <span className="floating-bag-handle"></span>
        <span className="floating-bag-body"></span>
      </a>

      {/* Footer */}
      <footer id="contact">
        <div>
          <div>
            <h2>
              Fluxo Maré
            </h2>
            <p>
              Design em movimento inspirado pela natureza e pelo oceano.
            </p>
          </div>

          <div>
            <h4>
              Institucional
            </h4>

            <ul>
              <li>Sobre</li>
              <li>Sustentabilidade</li>
              <li>Produções</li>
              <li>Contato</li>
            </ul>
          </div>

          <div>
            <h4>
              Ajuda
            </h4>

            <ul>
              <li>Trocas e devoluções</li>
              <li>Envio e prazos</li>
              <li>Perguntas frequentes</li>
              <li>Política de privacidade</li>
            </ul>
          </div>

          <div>
            <h4>
              Receba Novidades
            </h4>

            <div className="newsletter">
              <input
                type="email"
                placeholder="Seu e-mail"
              />
              <button>→</button>
            </div>

            <div className="socials">
              <a
                href="https://www.instagram.com/claudio_henri00/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>

              <a
                href="https://twitter.com/"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4l11.2 16H20L8.8 4H4z" />
                  <path d="M4.5 20L20 4" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/"
                aria-label="TikTok"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 4v10.2a4.3 4.3 0 1 1-3.6-4.2" />
                  <path d="M14 4c.4 3.2 2.2 5 5 5.4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Fluxo Maré. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}


export default App;
