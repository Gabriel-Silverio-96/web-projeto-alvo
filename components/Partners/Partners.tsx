import { Users } from "lucide-react";

const partners = [
  { name: "Universidade Federal do Paraná (UFPR)" },
  { name: "Igreja Dunamis House" },
  { name: "Agrociência Cooperativa" },
  { name: "Casa da Baba" },
];

const Partners = () => (
  <section id="parcerias" className="section partners-section">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Parcerias</span>

        <h2 className="section-title section-title-center">
          Quem caminha com o Alvo
        </h2>

        <p>
          O Alvo é um projeto de extensão vinculado à Universidade Federal do
          Paraná (UFPR), em parceria com instituições comprometidas com a
          transformação dos jovens.
        </p>
      </div>

      <div className="partners-grid">
        {partners.map((partner) => (
          <div className="partner-card" key={partner.name}>
            <div className="partner-icon">
              <Users size={32} />
            </div>

            <h3>{partner.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { Partners };
