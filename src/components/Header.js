import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-50   shadow-md z-10">
      <div className="container mx-auto px-2 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-800"
          onClick={() => navigate('/')}>
           🔙
          </div>
          </div>
          
      </div>
    </header>
  );
};

export default Header;
