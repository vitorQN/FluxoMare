
function App() {

  const products = [
    {
      name: "Maré",
      price: "R$ 149,00",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Brisa",
      price: "R$ 129,00",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Onda",
      price: "R$ 169,00",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Corrente",
      price: "R$ 139,00",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const features = [
    {
      title: "Sustentável",
      description: "Materiais ecológicos e produção consciente.",
      icon: "🍃",
    },
    {
      title: "Feito no Brasil",
      description: "Valorizamos o que é nosso e quem faz com propósito.",
      icon: "🇧🇷",
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
          

          <div className="text-center">
            <h1 className="text-2xl tracking-[0.4em] uppercase text-[#67605c]">
              Fluxo Maré
            </h1>
            <p className="text-xs tracking-[0.3em] mt-1 text-[#90857d] uppercase">
              design em movimento
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
            <a href="#collection" className="hover:text-black transition">
              coleção
            </a>
            <a href="#about" className="hover:text-black transition">
              sobre
            </a>
            <a href="#sustainability" className="hover:text-black transition">
              sustentabilidade
            </a>
            <a href="#contact" className="hover:text-black transition">
              contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="hero-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop')",
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

            <button>
              Conheça a Coleção
            </button>
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

          <button className="about-button">
            Saiba Mais
          </button>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
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

            <button>
              Ver Todos
            </button>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div
                key={product.name}
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
              <span>◎</span>
              <span>◉</span>
              <span>✉</span>
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
