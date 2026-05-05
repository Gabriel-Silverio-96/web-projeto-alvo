import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="site-header">
    <div className="container header-container">
      <Link href="/" className="logo-link">
        <Image src="/logo.jpg" alt="Projeto Alvo" width={80} height={80} />
      </Link>
      <nav className="header-nav">
        <a href="#sobre">Nossa Missão</a>
        <a href="#servicos">Atividades</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#contato">Apoie</a>
      </nav>
      <a
        href="https://instagram.com/projeto_alvo_ufpr"
        target="_blank"
        rel="noopener noreferrer"
        className="button button-primary header-button"
      >
        Seja Voluntário
      </a>
    </div>
  </header>
);

export { Header };
