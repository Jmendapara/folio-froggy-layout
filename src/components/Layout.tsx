import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin } from "react-icons/fi";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main content area with left margin for sidebar */}
      <main className="ml-64 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
        
        {/* Footer */}
        <div className="p-8 pt-16">
          <div className="flex items-center justify-end space-x-4 text-xs text-black">
            <HiOutlineMail className="w-6 h-6 text-black" />
            <FiLinkedin className="w-6 h-6 text-black" />
            <span>Designed & illustrated by me in NYC.</span>
          </div>
        </div>
      </main>
    </div>
  );
}