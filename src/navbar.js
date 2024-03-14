import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import SpanishFlag from './icons/MX.png';
import EnglishFlag from './icons/US.png';
import KoreanFlag from './icons/KR.png';
import './navbar.css'; // Importar el archivo CSS
import { Navbar, languages } from './NavbarFunctions';

const languageFlags = {
  'Español': SpanishFlag,
  'Inglés': EnglishFlag,
  'Coreano': KoreanFlag,
  // Agrega más banderas según necesites
};

const NavbarComponent = () => {
  const { showLanguages, toggleLanguages } = Navbar();

  return (
    <Box component="nav" aria-label="My site" className="navbar">
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <List role="menubar" orientation="horizontal">
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component={Link} to="/home"
              aria-label="Home"
            >
              <HomeIcon />
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component={Link} to="/about"
              aria-label="About"
            >
              Acerca
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component={Link} to="/services"
              aria-label="Services"
            >
              Servicios
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component={Link} to="/contact"
              aria-label="Contact"
            >
              Contacto
            </ListItemButton>
          </ListItem>
        </List>
        <ListItem role="none" className="language-icon" sx={{ marginRight: '16px' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#language"
            aria-label="Language"
            onClick={toggleLanguages}
          >
            <LanguageIcon />
          </ListItemButton>
          {showLanguages && (
            <div className="languages-dropdown">
              <List>
                {languages.map((language, index) => (
                  <ListItem key={index} role="none">
                    <img src={languageFlags[language.name]} alt={language.name} className="flag-icon" />
                    <span className="language-name">{language.name}</span>
                  </ListItem>
                ))}
              </List>
            </div>
          )}
        </ListItem>
      </Box>
    </Box>
  );
}

export default NavbarComponent;
