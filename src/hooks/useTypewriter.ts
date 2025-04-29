import { useState, useEffect } from 'react';

const useTypewriter = (words: string[], typingSpeed = 100, pauseTime = 1500) => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayedText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

  return displayedText;
};

export default useTypewriter;
