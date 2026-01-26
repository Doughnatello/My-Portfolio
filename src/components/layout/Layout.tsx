import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Effects */}
      <div className="fixed inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 circuit-pattern pointer-events-none" />
      
      <Navigation />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
};
