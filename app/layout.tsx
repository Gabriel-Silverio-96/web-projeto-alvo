import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projeto Alvo",
  description:
    "Projeto Alvo promove propósito de vida, valores e habilidades socioemocionais em estudantes do ensino médio de escolas públicas de Curitiba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
