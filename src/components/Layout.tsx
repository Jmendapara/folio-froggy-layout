import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main content area with left margin for sidebar */}
      <main className="ml-64">
        <div className="h-screen overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}