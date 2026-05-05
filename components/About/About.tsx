import { CheckCircle } from "lucide-react";

const values = [
  "Caráter",
  "Disciplina",
  "Liderança",
  "Cidadania",
  "Honestidade",
  "Empatia",
];

const About = () => (
  <section id="sobre" className="section about-section">
    <div className="container">
      <div className="about-grid">
        <div className="about-content">
          <span className="section-label">Nossa Missão</span>

          <h2 className="section-title">
            Construindo propósito de vida nos jovens
          </h2>

          <p>
            O Projeto Alvo surgiu da percepção de que muitos adolescentes e
            jovens tinham sonhos superficiais e poucos demonstravam clareza
            sobre seu propósito de vida. Diante disso, nasceu o Alvo: ampliar a
            visão de futuro dos estudantes.
          </p>

          <p>
            Nossa missão é promover valores como caráter, disciplina, liderança
            e cidadania entre estudantes do ensino médio de escolas públicas,
            transformando a escola em um espaço de construção de propósito.
          </p>

          <p>
            Mais do que ajudar os estudantes a descobrirem o que querem fazer,
            buscamos que descubram <strong>quem desejam se tornar</strong>.
          </p>

          <h3 className="values-title">Nossos Valores</h3>

          <ul className="values-list">
            {values.map((value) => (
              <li key={value}>
                <CheckCircle size={22} />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="target-visual">
          <div className="target-circle target-circle-one" />
          <div className="target-circle target-circle-two" />
          <div className="target-circle target-circle-three" />
          <div className="target-center">A</div>
        </div>
      </div>

      <div className="vision-content">
        <span className="section-label">Nossa Visão</span>

        <h2 className="section-title section-title-center">
          Uma vida com propósito para cada jovem
        </h2>

        <p>
          Mais do que números, buscamos uma transformação real nos jovens.
          Incentivamos que cada aluno construa uma vida com propósito, baseada
          em escolhas diárias e valores sólidos.
        </p>
      </div>
    </div>
  </section>
);

export { About };
