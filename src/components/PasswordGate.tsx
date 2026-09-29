import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already authenticated in this session
    const authenticated = sessionStorage.getItem('portfolio-authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for correct password
    if (password !== 'froggyfolio') {
      setShowError(true);
      return;
    }
    
    // Store authentication in session storage
    sessionStorage.setItem('portfolio-authenticated', 'true');
    setIsAuthenticated(true);
    setShowError(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-[424px]">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setShowError(false);
              }}
              className="h-11 pl-4 pr-12 text-base md:text-base rounded-none border-[#BDBDBD] placeholder:text-[#333333] focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
            >
              <MoveRight className="!h-6 !w-6" strokeWidth={1.25} />
            </Button>
          </div>
          <div className="absolute left-0 right-0 top-full mt-4 flex items-center justify-center">
            {showError && (
              <p className="text-sm text-destructive text-center">
                The password you entered is incorrect. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;