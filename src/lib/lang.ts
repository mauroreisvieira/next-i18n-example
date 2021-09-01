import { languages, defaultLanguage } from '@/theme.config';
export { default as i18next } from 'i18next';

export function getSortedLangsData(): string[] {
    return languages;
}

export function getAllLanguageSlugs(): { params: { lang: string } }[] {
    return languages.map((lang) => {
        return { params: { lang: lang } };
    });
}

export function getLanguage(lang: string): string {
    return languages.includes(lang) ? lang : defaultLanguage;
}
