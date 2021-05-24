import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function useTranslator() {
    
    const { t, i18n } = useTranslation();

    useEffect(() => { i18n.changeLanguage(getCurrLang()) }, []);

    function getCurrLang() {
        let lang = localStorage.getItem("lang");
        return lang === null ? "en" : lang;
    }

    function setLang(lang) {
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
    }

    return { t, getCurrLang, setLang }
}