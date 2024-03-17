import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next"; // Asegúrate de importar i18next
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import SpanishFlag from './icons/MX.png';
import EnglishFlag from './icons/US.png';
import KoreanFlag from './icons/KR.png';
import './navbar.css';
import { Navbar, languages } from './NavbarFunctions';

const languageFlags = {
  'Español': SpanishFlag,
  'Inglés': EnglishFlag,
  'Coreano': KoreanFlag,
  // Agrega más banderas según necesites
};

const NavbarComponent = () => {
  const { showLanguages, toggleLanguages } = Navbar();
  const { t, i18n } = useTranslation("global");
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language.code);
    toggleLanguages();
  };

  return (
    <Box component="nav" aria-label="My site" className="navbar">
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <List role="menubar" orientation="horizontal">
          <ListItem role="none">
            <ListItemButton
              component={Link} to="/home"
              aria-label= "Home"
            >
              <HomeIcon />
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton
              component={Link} to="/about"
              aria-label={t("translation.About")}
            >
              {t("translation.About")}
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton
              component={Link} to="/services"
              aria-label={t("translation.Services")}
            >
              {t("translation.Services")}
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton
              component={Link} to="/contact"
              aria-label={t("translation.Contact")}
            >
              {t("translation.Contact")}
            </ListItemButton>
          </ListItem>
        </List>
        <ListItem role="none" className="language-icon" sx={{ marginRight: '16px' }}>
          <ListItemButton
            component="a"
            href="#"
            aria-label={t("translation.Language")}
            onClick={toggleLanguages}
          >
            <LanguageIcon />
          </ListItemButton>
          {showLanguages && (
            <div className="languages-dropdown">
              {languages.map((language) => (
                <ListItem key={language.name} role="none" onClick={() => changeLanguage(language)}>
                  <img src={languageFlags[language.name]} alt={language.name} className="flag-icon" />
                  <span className="language-name">{language.name}</span>
                </ListItem>
              ))}
            </div>
          )}
        </ListItem>
      </Box>
    </Box>
  );
}

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <NavbarComponent />
    </I18nextProvider>
  );
}

export default App;
