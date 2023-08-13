
import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

export const ThousandSparator = (props) => {
    const [lang, setLang] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : 'id')
    const { i18n } = useTranslation()

    useEffect(() => {
        const handleLanguageChange = () => {
            setLang(i18n.language)
        };
        
        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    return (
        <>{
            lang === 'id' ?
                props.number.toString().replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            :
                props.number.toString().replace(',', '.').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }</>
    )
}