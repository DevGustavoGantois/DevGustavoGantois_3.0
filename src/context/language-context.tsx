'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";
import { pt } from '@/data/languages/pt-br';
import { en } from '@/data/languages/en';
import { fr } from '@/data/languages/fr';


type Language = 'pt' | 'en' | 'fr';


export const translations = {
  pt,
  en,
  fr,
};


const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({
  language: 'pt',
  setLanguage: () => {},  
});


export const useLanguage = () => useContext(LanguageContext);


interface LanguageProviderProps {
  children: ReactNode;  
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('pt');  

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children} 
    </LanguageContext.Provider>
  );
};
