import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SpanishFlag from './icons/MX.png';
import EnglishFlag from './icons/US.png';
import KoreanFlag from './icons/KR.png';
import './navbar.css';
import { languages } from './NavbarFunctions';

// Importa los recursos de idioma global
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import global_kr from './translations/kr/global.json';

// Inicializa i18next con los recursos de idioma
i18next.init({
  interpolation: { escapeValue: false },
  lng: "kr",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    kr: {
      global: global_kr
    }
  }
});

const languageFlags = {
  'Español': SpanishFlag,
  'Inglés': EnglishFlag,
  'Coreano': KoreanFlag,
  // Agrega más banderas según necesites
};

const NavbarComponent = () => {
  const [showLanguages, setShowLanguages] = useState(false); // Estado para controlar la visibilidad del menú de idiomas
  const [darkMode, setDarkMode] = useState(false); // Estado para controlar el modo oscuro
  const { t, i18n } = useTranslation("global");
  
  const changeLanguage = (language) => {
    if (language.code === 'es') {
      i18n.changeLanguage('es');
    } else if (language.code === 'en') {
      i18n.changeLanguage('en');
    } else if (language.code === 'kr') {
      i18n.changeLanguage('kr');
    }
    setShowLanguages(false); // Oculta el menú de idiomas después de seleccionar un idioma
  };

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages); // Cambia el estado de showLanguages para mostrar u ocultar el menú de idiomas
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Cambia el estado de darkMode para alternar entre modos claro y oscuro
  };

  return (
    <Box component="nav" aria-label="My site" className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <List role="menubar" orientation="horizontal">
          <ListItem role="none">
            <ListItemButton
              component={Link} to="/home"
              aria-label= {t("translation.Home")}
            >
              <HomeIcon sx={{ color: darkMode ? '#99ccff' : '' }} />
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton
              component={Link} to="/about"
              aria-label={t("translation.About")}
            >
              <span style={{ color: darkMode ? '#99ccff' : '' }}>{t("translation.About")}</span>
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton
              component={Link} to="/services"
              aria-label={t("translation.Services")}
            >
              <span style={{ color: darkMode ? '#99ccff' : '' }}>{t("translation.Services")}</span>
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton
              component={Link} to="/contact"
              aria-label={t("translation.Contact")}
            >
              <span style={{ color: darkMode ? '#99ccff' : '' }}>{t("translation.Contact")}</span>
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
            <LanguageIcon sx={{ color: darkMode ? '#99ccff' : '' }} />
          </ListItemButton>
          {showLanguages && (
            <div className={`languages-dropdown ${darkMode ? 'dark-mode' : ''}`}>
              {languages.map((language) => (
                <ListItem key={language.name} role="none" onClick={() => changeLanguage(language)}>
                  <img src={languageFlags[language.name]} alt={language.name} className="flag-icon" />
                  <span className="language-name" style={{ color: darkMode ? '#99ccff' : '' }}>{language.name}</span>
                </ListItem>
              ))}
            </div>
          )}
        </ListItem>
        <ListItem role="none" className="dark-mode-icon">
          <ListItemButton
            aria-label={darkMode ? t("translation.LightMode") : t("translation.DarkMode")}
            onClick={toggleDarkMode}
          >
            {darkMode ? <Brightness7Icon sx={{ color: '#99ccff' }} /> : <Brightness4Icon sx={{ color: '#99ccff' }} />}
          </ListItemButton>
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
