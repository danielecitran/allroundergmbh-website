import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

<<<<<<< HEAD
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umbau-Allrounder GmbH - Ihr Bau- und Umbaupartner in der Schweiz",
  description: "Professionelle Bau- und Umbauleistungen in der Schweiz. Bauleitung, Beratung, Maurerarbeiten, Gipserarbeiten, Renovationen und Bodenverlegung.",
=======
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Allrounder GmbH",
  description: "Ihr Partner für alle Aufgaben",
>>>>>>> 42bf86f70deeabb1794c0a877cca0b89aba4f10b
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
<<<<<<< HEAD
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="text-xl font-bold text-gray-900">
                Umbau-Allrounder GmbH
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Leistungen
                </a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Über uns
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Umbau-Allrounder GmbH</h3>
                <p className="text-gray-400">
                  Ihr zuverlässiger Partner für Bau- und Umbauprojekte in der Schweiz
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Kontakt</h3>
                <p className="text-gray-400">Musterstrasse 123</p>
                <p className="text-gray-400">8000 Zürich</p>
                <p className="text-gray-400">Schweiz</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
                <a href="#" className="text-gray-400 hover:text-white block mb-2">
                  Impressum
                </a>
                <a href="#" className="text-gray-400 hover:text-white block">
                  Datenschutz
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Umbau-Allrounder GmbH. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
=======
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
>>>>>>> 42bf86f70deeabb1794c0a877cca0b89aba4f10b
      </body>
    </html>
  );
}
