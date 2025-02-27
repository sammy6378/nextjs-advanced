'use client'
import { useState } from 'react';
import Link from 'next/link';
import Modal from './lib/modalProps'; 
import Login from '@/app/auth-user/login/page';
import Register from '@/app/auth-user/signup/page';
import ThemeToggle from '@/app/themes/toggleButton';
import Button  from '@mui/material/Button';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLoginOpen = () => setIsLoginOpen(true);
  const handleLoginClose = () => setIsLoginOpen(false);

  const handleRegisterOpen = () => setIsRegisterOpen(true);
  const handleRegisterClose = () => setIsRegisterOpen(false);

  return (
    <nav className="flex justify-between items-center h-16 border-b border-gray-500 sticky top-0 z-50" role="navigation">
      <div>
        <Link href="/" className="pl-8">Logo</Link>
      </div>
      <div className="flex justify-between items-center space-x-4 pr-8">
        <Button variant="text"  onClick={handleLoginOpen}>Login</Button>
        <Button variant="outlined" onClick={handleRegisterOpen}>Register</Button>
        <ThemeToggle />
      </div>

      {/* Modals */}
      <Modal isOpen={isLoginOpen} onClose={handleLoginClose}>
        <Login />
      </Modal>

      <Modal isOpen={isRegisterOpen} onClose={handleRegisterClose}>
        <Register />
      </Modal>
    </nav>
  );
}

export default Navbar;
