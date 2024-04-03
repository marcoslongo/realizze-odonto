import type { Metadata } from "next";
import { Hind_Madurai } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hindi = Hind_Madurai({ weight: ['400', '500', '600', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realizze odonto",
  description: "Nossa especialidade é cuidar de gente. Acreditamos que cuidar dos dentes de alguém é um ofício sensível e muito significativo. É por isso que o nosso atendimento prioriza o seu bem estar como premissa para uma vida mais saudável e feliz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth overflow-x-hidden">
      <body className={hindi.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
