// Remove unnecessary import
// import { children } from "react";

import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-red-500 h-full">
      {children}
    </div>
  );
}

export default AuthLayout;
