import React from 'react';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <h1>{t("translation.Homepage")}</h1>
      <p>{t("translation.Welcome to our main page")}</p>
    </div>
  );
}

export default Home;
