import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'


i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug:true,
    fallbackLng: 'en',
    react: {
        defaultTransParent: 'div',
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      },
      interpolation: {
        escapeValue: false,
        formatSeparator: ',',
        format(value, format) {
          if (format === 'uppercase') return value.toUpperCase();
          return value;
        },
      },
});
export default i18n
