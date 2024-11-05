import words from '@config/words.ts';


export const generateRandomText = (language: string, textLength: number): string => {
   const shuffledWords = words[language].sort(() => 0.5 - Math.random());
   const sentence = shuffledWords.slice(0, textLength).join(' ');
   return sentence;
}