import React from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <h1>{t("translation.About us")}</h1>
      <p>{t("translation.Learn more about our company")}</p>
    </div>
  );
}

export default About;
