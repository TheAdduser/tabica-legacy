import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Tabica",
  description: "Tabica Kanban App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <Header />
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
