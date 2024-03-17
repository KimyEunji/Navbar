import React from 'react';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <h1>{t("translation.Contact us")}</h1>
      <p>{t("translation.We are happy to hear from you! Get in contact with us")}</p>
    </div>
  );
}

export default Contact;
