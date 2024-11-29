'use client';

import { usePathname } from "next/navigation";
import { TRPCReactProvider } from "~/trpc/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/register";

  return (
    <TRPCReactProvider>
      {!isAuthPage && <Header />}
      <div className="flex flex-grow">
        {!isAuthPage && <Sidebar />}
        <main className="flex-grow">{children}</main>
      </div>
      {!isAuthPage && <Footer />}
    </TRPCReactProvider>
  );
}