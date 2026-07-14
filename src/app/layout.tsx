import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Los 200 Remedios Naturales",
  description:
    "Catálogo de remedios naturales: infusiones, tónicos, elixires y más, organizados por sistema del cuerpo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col">
        <header className="border-b border-brand-light bg-white sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-brand-dark">
              <span aria-hidden>🌿</span>
              <span>Los 200 Remedios Naturales</span>
            </Link>
            <nav className="text-sm text-foreground/70">
              <Link href="/" className="hover:text-brand-dark">
                Inicio
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-brand-light py-6 text-center text-xs text-foreground/50">
          Remedios naturales con fines informativos. No sustituyen el consejo
          de un profesional de la salud.
        </footer>
      </body>
    </html>
  );
}
