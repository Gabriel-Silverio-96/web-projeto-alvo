import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Esses estudantes apresentavam descomprometimento, insatisfação e falta de perspectiva. Após o projeto, é perceptível motivação, busca de sonhos e objetivos profissionais. Também estão mais empáticos e colaborativos.",
    author: "Professora",
    role: "Colégio participante do Projeto Alvo",
  },
  {
    text: "O Projeto veio suprir uma das lacunas de nossa formação acadêmica trabalhando valores essenciais ao desenvolvimento de nossos jovens como caráter, disciplina e o conceito de cidadania.",
    author: "Diretora",
    role: "Colégio Cívico Militar Manoel Alencar Guimarães",
  },
  {
    text: "O Projeto Alvo foi fundamental para os nossos estudantes porque eles conseguiram se enxergar melhor, ver as suas qualidades, seus potenciais e trabalhar a respeito de mercado de trabalho e profissões.",
    author: "Diretora",
    role: "Colégio Estadual Angelo Trevisan",
  },
];

const Testimonials = () => (
  <section id="depoimentos" className="section testimonials-section">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Depoimentos</span>

        <h2 className="section-title section-title-center">
          O que dizem sobre o projeto
        </h2>

        <p>
          Professores e diretores relatam os resultados significativos do
          Projeto Alvo nas escolas.
        </p>
      </div>

      <div className="cards-grid testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.text}>
            <Quote className="quote-icon" size={42} />

            <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>

            <div className="testimonial-author">
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { Testimonials };
