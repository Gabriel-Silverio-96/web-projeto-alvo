import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="footer">
    <div className="container footer-container">
      <Link href="/" className="logo-link">
        <Image src="/logo.jpg" alt="Projeto Alvo" width={150} height={150} />
      </Link>

      <nav className="footer-nav">
        <a href="#sobre">Nossa Missão</a>
        <a href="#servicos">Atividades</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#contato">Apoie</a>
      </nav>

      <p>© 2026 Projeto Alvo · Curitiba/PR</p>
    </div>
  </footer>
);

export { Footer };
