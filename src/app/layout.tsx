import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MB Law – Marković, Bogdanović i partneri | Advokatska kancelarija Beograd",
  description:
    "MB Law – Marković, Bogdanović i partneri je advokatska kancelarija iz Beograda specijalizovana za privredno pravo, nekretnine, radno i krivično pravo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr" className="h-full antialiased">
      <body className="flex min-h-dvh flex-col items-center justify-center bg-[#1B1916]">
        {children}
      </body>
    </html>
  );
}
