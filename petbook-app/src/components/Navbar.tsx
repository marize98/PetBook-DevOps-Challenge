import React from 'react';

interface NavbarProps {
  logo: string;
  onUpload: () => void;
  isUploading: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ logo, onUpload, isUploading }) => {
  return (
    <nav className="nav fade-in">
      <div className="logo-container">
        <img src={logo} alt="PetBook Logo" className="logo-img" />
        <h1 className="logo-text">PetBook</h1>
      </div>
      <button 
        className="btn-primary" 
        onClick={onUpload}
        disabled={isUploading}
      >
        {isUploading ? 'Subiendo...' : 'Publicar Foto'}
      </button>
    </nav>
  );
};

export default Navbar;
