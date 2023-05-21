import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en_translation from './locales/en/translation.json';
import fr_translation from './locales/fr/translation.json';

// The translations resources
const resources = {
  en: {
    translation: en_translation
  },
  fr: {
    translation: fr_translation
  }
};

i18n
	.use(LanguageDetector) // Detect user language
	.use(initReactI18next) // Use react-i18next
	.init({ // Initialize i18n with options
		resources: resources, // Translations resources
		//lng: 'fr', // Language to use (overrides language detection)
		fallbackLng: 'fr', // Language to use if translations in user language are not available.		
		keySeparator: true, // Enable '.' key speprator  (messages.welcome)
	    interpolation: {
	      escapeValue: false // React already safes from xss
	    },
	    
	    //debug: true 
	}
);

export default i18n;