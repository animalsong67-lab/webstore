import { Suspense, lazy } from "react";
import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const AIChatWidget = lazy(() => import("./AIChatWidget"));

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
      <Header />
      <main
        className="flex-1 animate-fade-in"
        style={{ scrollBehavior: "smooth" }}
      >
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <AIChatWidget />
      </Suspense>
    </div>
  );
}
