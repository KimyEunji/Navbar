import React from 'react';
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <h1>{t("translation.Our services")}</h1>
      <p>{t("translation.Discover the services we offer")}</p>
    </div>
  );
}

export default Services;
