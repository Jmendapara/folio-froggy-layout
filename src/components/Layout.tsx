import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import { PiEnvelopeSimpleBold, PiLinkedinLogoBold } from "react-icons/pi";
import { useIsMobile } from "@/hooks/use-mobile";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      {isMobile && (
        <header className={`fixed top-0 left-0 right-0 h-16 bg-background flex items-center justify-between px-4 z-50 ${!isMobileMenuOpen ? 'border-b border-gray-200' : ''}`} style={{borderBottomWidth: isMobileMenuOpen ? '0px' : '1px'}}>
          <img style={{height: "80%"}} src="/profile/froggy.png"></img>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </header>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && <Sidebar />}
      
      {/* Mobile Sidebar Overlay */}
      {isMobile && isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 h-full w-full bg-sidebar z-50">
            <Sidebar onItemClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </>
      )}
      
      {/* Main content area */}
      <main className={`flex flex-col ${isMobile ? 'pt-16' : 'ml-[337px] pt-[60px] pr-[43px] pb-[60px]'}`}>
        <div className="flex-1 overflow-y-auto w-full md:max-w-[900px]">
          {children}
        </div>
        
        {/* Footer */}
        <div className="p-8 pt-20 md:p-0 md:pt-12 w-full md:max-w-[900px]">
          <div className="flex items-center justify-end space-x-2 text-xs text-black">
            <a 
              href="mailto:gupta.raina.99@gmail.com?subject=Let's chat!"
              className="text-black hover:opacity-70"
              aria-label="Email"
            >
              <PiEnvelopeSimpleBold className="w-[25px] h-[25px]" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rainagupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70"
              aria-label="LinkedIn"
            >
              <PiLinkedinLogoBold className="w-[27px] h-[27px]" />
            </a>
            <span>Designed & illustrated by me in NYC.</span>
          </div>
        </div>
      </main>
    </div>
  );
}