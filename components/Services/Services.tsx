import { Gamepad2, MessageCircle, Users } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Rodas de Conversa",
    description:
      "Espaços de diálogo e reflexão onde os estudantes podem expressar suas ideias e construir pensamento crítico.",
  },
  {
    icon: Users,
    title: "Dinâmicas de Grupo",
    description:
      "Atividades interativas que desenvolvem habilidades socioemocionais, trabalho em equipe e empatia entre os jovens.",
  },
  {
    icon: Gamepad2,
    title: "Jogos Educativos",
    description:
      "Recursos lúdicos que tornam o aprendizado envolvente e ajudam os jovens a refletirem sobre valores e propósito de vida.",
  },
];

const Services = () => (
  <section id="servicos" className="section services-section">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Nossas Atividades</span>

        <h2 className="section-title section-title-center">
          Como transformamos vidas
        </h2>

        <p>
          Utilizamos metodologias interativas para criar espaços de diálogo e
          reflexão com estudantes de 14 a 18 anos nas escolas públicas de
          Curitiba.
        </p>
      </div>

      <div className="cards-grid services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className="info-card service-card" key={service.title}>
              <div className="card-icon">
                <Icon size={32} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export { Services };
