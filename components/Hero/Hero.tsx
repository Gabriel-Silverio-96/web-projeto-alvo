import { ArrowRight, Target } from "lucide-react";

const Hero = () => (
  <section className="hero-section">
    <div className="hero-blur hero-blur-green" />
    <div className="hero-blur hero-blur-blue" />

    <div className="container hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Ajudando jovens a <span>descobrirem seu propósito</span>
        </h1>

        <p className="hero-description">
          O Projeto Alvo promove o desenvolvimento de habilidades
          socioemocionais e valores em estudantes do ensino médio de escolas
          públicas de Curitiba, em parceria com a UFPR e a Igreja Dunamis House.
        </p>

        <div className="hero-actions">
          <a
            href="https://instagram.com/projeto_alvo_ufpr"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary button-large"
          >
            Seja Voluntário
            <ArrowRight size={20} />
          </a>

          <a href="#sobre" className="button button-outline button-large">
            Conheça o Projeto
          </a>
        </div>
      </div>

      <div className="hero-target-icon">
        <Target size={34} />
      </div>
    </div>
  </section>
);

export { Hero };
