import { ArrowRight, Target } from "lucide-react";

const CTA = () => (
  <section id="contato" className="cta-section">
    <div className="cta-blur cta-blur-one" />
    <div className="cta-blur cta-blur-two" />

    <div className="container">
      <div className="cta-content">
        <div className="cta-icon">
          <Target size={44} />
        </div>

        <h2>Faça parte dessa transformação</h2>

        <p className="cta-main-text">
          O Projeto Alvo aceita voluntários! Fique atento aos processos
          seletivos divulgados pelo nosso Instagram oficial.
        </p>

        <p className="cta-secondary-text">
          Em parceria com a UFPR, Igreja Dunamis House, Agrociência Cooperativa
          e Casa da Baba, juntos construímos um futuro com propósito para os
          jovens de Curitiba.
        </p>

        <a
          href="https://instagram.com/projeto_alvo_ufpr"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-white button-large"
        >
          Siga @projeto_alvo_ufpr
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </section>
);

export { CTA };
