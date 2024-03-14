import React, { useState } from 'react';

export const Navbar = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  return { showLanguages, toggleLanguages };
};

export const languages = [
  { name: 'Español', emoji: '🇪🇸' },
  { name: 'Inglés', emoji: '🇬🇧' },
  { name: 'Coreano', emoji: 'KR' },
  // Agrega más idiomas si lo deseas
];
