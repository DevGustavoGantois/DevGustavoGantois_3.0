'use client'
import { useLanguage } from "@/context/language-context"
import { useState } from "react";
import { pt } from "@/data/languages/pt-br";
import { en } from "@/data/languages/en";
import { fr } from "@/data/languages/fr";

export function Navbar() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navbarData = language === 'pt' ? pt.navbarData 
                    : language === 'en' ? en.navbarData 
                    : fr.navbarData;

    const handleLanguageChange = (selectedLanguage: 'pt' | 'en' | 'fr') => {
        setLanguage(selectedLanguage);
        setIsOpen(false);
    }

    return (
        <nav className="text-white flex justify-around items-center gap-20 mb-20">
            <ul className="flex gap-16">
                {navbarData.map((item, index) => (
                    <li key={index} className="font-secondary hover:text-gray-400 transition-all duration-700 cursor-pointer">
                        {item.name}
                    </li>
                ))}
            </ul>
            <div className="relative">
                <button onClick={() => setIsOpen(!isOpen)} className="bg-black text-white font-primary p-4 rounded-md w-full flex justify-between items-center">
                    <span>{language === 'pt' ? 'PT-BR' : language === 'en' ? 'EN' : 'FR'}</span>
                    <span className="ml-2">&#9660;</span>
                </button>
                {isOpen && (
                    <ul className="absolute bg-[#121316] text-white mt-2 rounded-md w-full z-10 font-primary">
                        <li className="px-4 py-2 transition-all duration-700 hover:bg-black cursor-pointer" onClick={() => handleLanguageChange('pt')}>
                            PT-BR
                        </li>
                        <li className="px-4 py-2 transition-all duration-700 hover:bg-black cursor-pointer" onClick={() => handleLanguageChange('en')}>
                            EN
                        </li>
                        <li className="px-4 py-2 transition-all duration-700 hover:bg-black cursor-pointer" onClick={() => handleLanguageChange('fr')}>
                            FR
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
