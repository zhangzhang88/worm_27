'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { Global, css, Theme, keyframes } from '@emotion/react';
import Link from 'next/link';
import { sentences as defaultSentences, SentenceData } from './wordDataLesson3';
import { congratulationsMessages } from '../congratulationsData';
import { ChevronLeft, ChevronRight, Volume2, Headphones, X } from 'lucide-react';

const fonts = [
  { name: 'Tahoma', value: 'Tahoma, sans-serif' },
  { name: 'Verdana', value: 'Verdana, sans-serif' },
  { name: 'Arial', value: 'Arial, sans-serif' },
];

const Container = styled.div<{ themeColor: string; fontFamily: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.themeColor};
  color: #ffffff;
  font-family: ${props => props.fontFamily};
  transition: background-color 0.3s, color 0.3s;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 20px;
    padding-bottom: 100px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  padding: 0 20px;
`;

const ProgressText = styled.p<{ themeColor: string; position: 'left' | 'right' }>`
  position: absolute;
  top: 1rem;
  ${props => props.position}: 7.5%;
  font-size: 1.1rem;
  color: #bdc3c1;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LessonText = styled.p<{ themeColor: string }>`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: #bdc3c1;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProgressBarContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  background-color: #05051d;
  border-radius: 15px;
  overflow: hidden;
  height: 20px;
  cursor: pointer;
  border: 1px solid #bdc3c7;

  @media (max-width: 768px) {
    background-color: #ffffff;
    height: 10px;
    border: none;
    margin-top: 0;
  }
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  background-color: #00ff66;
  width: ${props => props.progress}%;
  transition: width 0.3s;
`;

interface CustomTheme extends Theme {
  backgroundColor?: string;
}

interface ButtonGroupProps {
  theme?: CustomTheme;
}

const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme?.backgroundColor || '#05051d'};
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

const Button = styled.button<{ themeColor: string; disabled?: boolean; isLink?: boolean }>`
  background-color: transparent;
  color: white;
  border: none;
  padding: 0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.3s;
  font-size: 0.9rem;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    background-color: #ffffff;
    color: ${props => props.themeColor};
    border-radius: 5px;
    padding: 5px;
    font-size: 0.7rem;
    flex: 1;
    justify-content: center;
    max-width: 50px;
  }
`;

const ButtonFrame = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: #1e1e2e;
  min-width: 1.5rem;
  height: 1.5rem;
  border: 1px solid white;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonText = styled.span`
  font-size: 0.8rem;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-left: 0;
  }
`;

const ChineseMeaning = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const AnswerDisplay = styled.div<{ showAnswer: boolean }>`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #FFD100;
  opacity: ${props => (props.showAnswer ? 1 : 0)};
  transition: opacity 0.3s ease;
  margin-top: -1rem;
`;

const WordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const WordInputWrapper = styled.div<{ width: string; isLongWord: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 6px 15px 6px;
  width: ${props => props.isLongWord ? `calc(${props.width} + 3em)` : `calc(${props.width} + 0.5em)`};
  min-width: 2em;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    margin: 0 3px 10px 3px;
    width: ${props => props.isLongWord ? `calc(${props.width} + 1.5em)` : `calc(${props.width} + 0.25em)`};
    min-width: 1em;
  }
`;

const WordInput = styled.input<{ isCorrect: boolean; isWrong: boolean; isCurrent: boolean; isLocked: boolean; isSubmitted: boolean }>`
  width: 100%;
  min-width: 1.5em;
  padding: 1px 0;
  font-size: 2.7rem;
  border: none;
  background-color: transparent;
  color: ${props => (props.isSubmitted && props.isWrong) ? '#de1db6' : 'white'};
  text-align: center;
  outline: none;
  position: absolute;
  z-index: 1;
  pointer-events: ${props => (props.isLocked ? 'none' : 'auto')};
  transition: width 0.3s ease;
  caret-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    min-width: 1em;
  }
`;

const WordUnderline = styled.div<{ isCorrect: boolean; isWrong: boolean; isCurrent: boolean; isPunctuation: boolean; isSubmitted: boolean; isLongWord: boolean }>`
  position: relative;
  width: ${props => props.isLongWord ? 'calc(100% + 3em)' : 'calc(100% + 0.5em)'};
  min-width: 2em;
  height: 2px;
  background-color: ${props =>
    props.isPunctuation ? 'transparent' :
    props.isCurrent ? '#de1db6' :
    props.isSubmitted && props.isWrong ? '#de1db6' :
    'white'
  };
  margin-top: 60px;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${props => props.isLongWord ? 'calc(100% + 1.5em)' : 'calc(100% + 0.25em)'};
    min-width: 1em;
    height: 1px;
    margin-top: 25px;
  }
`;

const Punctuation = styled.span`
  font-size: 2rem;
  display: inline-block;
  margin-left: -2px;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    right: -0.5em;
  }
`;

const CongratulationsContainer = styled.div<{ backgroundColor: string; fontColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 2rem 1rem;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  box-sizing: border-box;
`;

const CongratulationsTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CongratulationsMessage = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TotalTime = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CongratulationsButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CongratulationsButton = styled(Button)`
  flex: 0 1 auto;
  min-width: 120px;
  padding: 0.75rem 0.5rem;
  font-size: 0.9rem;
  white-space: nowrap;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 1rem;
  }
`;

const IntermediatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #05051d;
  color: white;
  outline: none;
`;

const SentenceDisplay = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const IntermediateButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #05051d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ListeningModeContainer = styled(IntermediatePageContainer)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: rgba(5, 5, 29, 0.95);
  padding: 20px;
  box-sizing: border-box;
`;

const ListeningModeButton = styled(Button)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const ListeningModeControlsContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListeningModeControlButton = styled(Button)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%`;

// 新增动画相关的样式组件
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const AnimationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AnimatedLogo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: ${bounce} 0.5s ease-in-out infinite;
  margin-bottom: 20px;
`;

const LogoUnderline = styled.div`
  width: 50px;
  height: 2px;
  background-color: #ffffff;
`;

const AnimationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #05051d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

interface ProcessedWord {
  word: string;
  punctuation: string;
  input: string;
  isLocked: boolean;
  width: string;
  originalWidth: string;
  isLongWord: boolean;
  isShortWord: boolean;
  isMediumWord: boolean;
  isEightLetterWord: boolean;
  isSevenLetterWord: boolean;
  isSixLetterWord: boolean;
  isFiveLetterWord: boolean;
  isFourLetterWord: boolean;
}

const processSentence = (sentence: string): ProcessedWord[] => {
  const words = sentence.split(/\s+/);
  return words.map(word => {
    const match = word.match(/^(.*?)([.,!?:;]*)$/);
    if (match) {
      const baseWord = match[1];
      const isLongWord = baseWord.length > 9;
      const isMediumWord = baseWord.length === 9;
      const isEightLetterWord = baseWord.length === 8;
      const isSevenLetterWord = baseWord.length === 7;
      const isSixLetterWord = baseWord.length === 6;
      const isFiveLetterWord = baseWord.length === 5;
      const isFourLetterWord = baseWord.length === 4;
      const isShortWord = baseWord.length <= 2;
      const baseWidth = `${baseWord.length + (
        isLongWord ? 5 : 
        isMediumWord ? 4.6 : 
        isEightLetterWord ? 4.5 : 
        isSevenLetterWord ? 4.7 : 
        isSixLetterWord ? 3 : 
        isFiveLetterWord ? 3 : 
        isFourLetterWord ? 2.5 : 
        isShortWord ? 1 : 2
      )}em`;
      return { 
        word: baseWord, 
        punctuation: match[2], 
        input: '', 
        isLocked: false, 
        width: baseWidth,
        originalWidth: baseWidth,
        isLongWord,
        isShortWord,
        isMediumWord,
        isEightLetterWord,
        isSevenLetterWord,
        isSixLetterWord,
        isFiveLetterWord,
        isFourLetterWord
      };
    }
    const isLongWord = word.length > 9;
    const isMediumWord = word.length === 9;
    const isEightLetterWord = word.length === 8;
    const isSevenLetterWord = word.length === 7;
    const isSixLetterWord = word.length === 6;
    const isFiveLetterWord = word.length === 5;
    const isFourLetterWord = word.length === 4;
    const isShortWord = word.length <= 2;
    const baseWidth = `${word.length + (
      isLongWord ? 3.5 : 
      isMediumWord ? 2.6 : 
      isEightLetterWord ? 3.5 : 
      isSevenLetterWord ? 2.5 : 
      isSixLetterWord ? 2 : 
      isFiveLetterWord ? 1.7 : 
      isFourLetterWord ? 1.5 : 
      isShortWord ? 0.5 : 1
    )}em`;
    return { 
      word, 
      punctuation: '', 
      input: '', 
      isLocked: false, 
      width: baseWidth,
      originalWidth: baseWidth,
      isLongWord,
      isShortWord,
      isMediumWord,
      isEightLetterWord,
      isSevenLetterWord,
      isSixLetterWord,
      isFiveLetterWord,
      isFourLetterWord
    };
  });
};

const normalizeText = (text: string) => 
  text.toLowerCase().replace(/[''']/g, "").replace(/[^a-z0-9]/g, "").trim();

const isWordCorrect = (word: ProcessedWord) => {
  const normalizedInput = normalizeText(word.input);
  const normalizedWord = normalizeText(word.word);
  return normalizedInput === normalizedWord;
};

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #05051d;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    body {
      overflow: auto;
    }
  }
  * {
    box-sizing: inherit;
  }
`;

export default function TypingGameLesson3() {
  const [sentences, setSentences] = useState<SentenceData[]>(defaultSentences);
  const [themeColor, setThemeColor] = useState('#05051d');
  const [selectedFont, setSelectedFont] = useState(fonts[0].value);
  const [time, setTime] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [processedWords, setProcessedWords] = useState<ProcessedWord[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [congratulationMessage, setCongratulationMessage] = useState<React.ReactNode | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isLastSentence, setIsLastSentence] = useState(false);
  const [showIntermediatePage, setShowIntermediatePage] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [buttonClass, setButtonClass] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const typingAudioRef = useRef<HTMLAudioElement | null>(null);
  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const errorAudioRef = useRef<HTMLAudioElement | null>(null);
  const sentenceAudioRef = useRef<HTMLAudioElement | null>(null);
  const completedSentencesCount = useRef<number>(0);
  const intermediatePageRef = useRef<HTMLDivElement>(null);
  const textWidthRef = useRef<HTMLSpanElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [totalTime, setTotalTime] = useState(0);

  // Listening mode states
  const [isListeningMode, setIsListeningMode] = useState(false);
  const [listeningModeIndex, setListeningModeIndex] = useState(0);
  const [isPlayingListeningMode, setIsPlayingListeningMode] = useState(false);

  // 新增动画相关的状态
  const [showAnimation, setShowAnimation] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const CONGRATULATIONS_BACKGROUND_COLOR = '#05051d';
  const CONGRATULATIONS_FONT_COLOR = '#ffffff';

  const PronunciationText = styled.div`
    font-size: 1.5rem;
    color: #FFD700;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  `;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setIsAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAnimationComplete) return;

    const userSentences = localStorage.getItem('userSentencesLesson3');
    if (userSentences) {
      try {
        const parsedSentences = JSON.parse(userSentences);
        setSentences(parsedSentences);
      } catch (error) {
        console.error('Failed to parse user sentences:', error);
      }
    }

    const savedIndex = localStorage.getItem('currentSentenceIndexLesson3');
    if (savedIndex) {
      setCurrentSentenceIndex(parseInt(savedIndex, 10));
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    focusFirstInput();

    setIsLoading(false);

    return () => window.removeEventListener('resize', handleResize);
  }, [isAnimationComplete]);

  useEffect(() => {
    if (!isAnimationComplete) return;

    if (sentences.length > 0 && currentSentenceIndex < sentences.length) {
      const currentSentence = sentences[currentSentenceIndex];
      setProcessedWords(processSentence(currentSentence.sentence));
      setCurrentWordIndex(0);
      setShowAnswer(false);
      setIsLastSentence(currentSentenceIndex === sentences.length - 1);
      setIsSubmitted(false);
      playSentenceAudio();

      focusFirstInput();

      localStorage.setItem('currentSentenceIndexLesson3', currentSentenceIndex.toString());
    }
  }, [currentSentenceIndex, sentences, isAnimationComplete]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && isAnimationComplete) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        setTotalTime((prevTotalTime) => prevTotalTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, isAnimationComplete]);

  useEffect(() => {
    typingAudioRef.current = new Audio('/typing.mp3');
    correctAudioRef.current = new Audio('/correct.mp3');
    errorAudioRef.current = new Audio('/error.mp3');
  }, []);

  useEffect(() => {
    if (isGameCompleted) {
      showCongratulationsScreen();
    }
  }, [isGameCompleted]);

  useEffect(() => {
    if (showCongratulations) {
      setIsTimerRunning(false);
      const randomIndex = Math.floor(Math.random() * congratulationsMessages.length);
      const congratulationMessage = congratulationsMessages[randomIndex].message;
      setCongratulationMessage(congratulationMessage);
    }
  }, [showCongratulations]);

  useEffect(() => {
    if (showIntermediatePage && intermediatePageRef.current) {
      intermediatePageRef.current.focus();
    }
  }, [showIntermediatePage]);

  useEffect(() => {
    setButtonClass('your-button-class');
  }, []);

  // Listening mode effect
  useEffect(() => {
    if (isListeningMode && isPlayingListeningMode) {
      const playNextSentence = async () => {
        if (listeningModeIndex < sentences.length) {
          try {
            await playAudioTwice(sentences[listeningModeIndex].sentence, listeningModeIndex + 1);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setListeningModeIndex(prevIndex => prevIndex + 1);
          } catch (error) {
            console.error('Error in listening mode:', error);
            setIsPlayingListeningMode(false);
          }
        } else {
          setIsPlayingListeningMode(false);
        }
      };
      playNextSentence();
    }
  }, [isListeningMode, isPlayingListeningMode, listeningModeIndex, sentences]);

  const focusFirstInput = () => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  };

  const calculateTextWidth = (text: string) => {
    if (textWidthRef.current) {
      textWidthRef.current.textContent = text;
      return `${textWidthRef.current.offsetWidth / 16 + 1}em`;
    }
    return `${text.length + 2}em`;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds} sec`;
  };

  const playTypingSound = () => {
    if (typingAudioRef.current) {
      typingAudioRef.current.currentTime = 0;
      typingAudioRef.current.play().catch(e => console.error("Error playing typing audio:", e));
    }
  };

  const playCorrectSound = () => {
    if (correctAudioRef.current) {
      correctAudioRef.current.play().catch(e => console.error("Error playing correct audio:", e));
    }
  };

  const playErrorSound = () => {
    if (errorAudioRef.current) {
      errorAudioRef.current.play().catch(e => console.error("Error playing error audio:", e));
    }
  };

  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const playSentenceAudio = (text?: string, sequenceNumber?: number): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      if (!text || !sequenceNumber) {
        if (sentences.length > 0 && currentSentenceIndex < sentences.length) {
          const audioSrc = `/audio_1/lesson_3/${sentences[currentSentenceIndex].id}.mp3`;
          const audio = new Audio(audioSrc);
          setCurrentAudio(audio);
          audio.play().catch(e => {
            console.error("Error playing sentence audio:", e);
            reject(e);
          });
          audio.onended = () => resolve();
        } else {resolve();
        }
      } else {
        const audioPath = `/audio_1/lesson_3/${sequenceNumber}.mp3`;
        const audio = new Audio(audioPath);
        setCurrentAudio(audio);
        
        audio.onended = () => resolve();
        audio.onerror = (error) => {
          console.error('Error playing audio:', error);
          reject(error);
        };
        
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
          reject(error);
        });
      }
    });
  };

  const playAudioTwice = async (text: string, sequenceNumber: number) => {
    await playSentenceAudio(text, sequenceNumber);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await playSentenceAudio(text, sequenceNumber);
  };

  const handleInputChange = (index: number, value: string) => {
    const cleanedValue = value.replace(/[^a-zA-Z0-9''']/g, "");
    setProcessedWords(prev => {
      const newWords = [...prev];
      const originalWord = newWords[index].word;
      let newWidth = newWords[index].originalWidth;
      if (cleanedValue.length > originalWord.length) {
        newWidth = calculateTextWidth(cleanedValue);
      }
      newWords[index] = { 
        ...newWords[index], 
        input: cleanedValue,
        width: newWidth
      };
      return newWords;
    });
    playTypingSound();
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.ctrlKey) {
      if (e.key === ';') {
        e.preventDefault();
        toggleAnswer();
      } else if (e.key === 'b') {
        e.preventDefault();
        playSentenceAudio();
      }
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      await checkAnswer();
      return;
    }

    if (e.key === 'Backspace' && inputRefs.current[index]?.value === '') {
      e.preventDefault();
      let prevIndex = index - 1;
      while (prevIndex >= 0 && processedWords[prevIndex].word === '') {
        prevIndex--;
      }
      if (prevIndex >= 0) {
        setCurrentWordIndex(prevIndex);
        inputRefs.current[prevIndex]?.focus();
      }
      return;
    }

    playTypingSound();

    if (e.key === 'ArrowRight' || (e.key === ' ' && index < processedWords.length - 1 && !isSubmitted)) {
      e.preventDefault();
      let nextIndex = index + 1;
      while (nextIndex < processedWords.length && processedWords[nextIndex].word === '') {
        nextIndex++;
      }
      setCurrentWordIndex(nextIndex);
      inputRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowLeft' || (e.key === ' ' && index > 0 && !isSubmitted)) {
      e.preventDefault();
      let prevIndex = index - 1;
      while (prevIndex >= 0 && processedWords[prevIndex].word === '') {
        prevIndex--;
      }
      setCurrentWordIndex(prevIndex);
      inputRefs.current[prevIndex]?.focus();
    } else if (e.key === ' ' && isSubmitted) {
      e.preventDefault();
      handleFixFirstIncorrectWord();
    }
  };

  const handleFixFirstIncorrectWord = () => {
    const firstIncorrectIndex = processedWords.findIndex(word => !isWordCorrect(word));
    if (firstIncorrectIndex !== -1) {
      setCurrentWordIndex(firstIncorrectIndex);
      setProcessedWords(prev => {
        const newWords = [...prev];
        newWords[firstIncorrectIndex] = {
          ...newWords[firstIncorrectIndex],
          input: '',
          width: newWords[firstIncorrectIndex].originalWidth
        };
        return newWords;
      });
      setTimeout(() => {
        if (inputRefs.current[firstIncorrectIndex]) {
          inputRefs.current[firstIncorrectIndex].focus();
        }
      }, 0);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const checkAnswer = async () => {
    setIsSubmitted(true);
    const isCorrect = processedWords.every(word => {
      const normalizedInput = normalizeText(word.input);
      const normalizedWord = normalizeText(word.word);
      return normalizedInput === normalizedWord;
    });

    if (isCorrect) {
      playCorrectSound();
      completedSentencesCount.current += 1;
      setShowIntermediatePage(true);
    } else {
      playErrorSound();
      setProcessedWords(prev => prev.map(word => ({
        ...word,
        isLocked: isWordCorrect(word)
      })));
    }
  };

  const handleNextSentence = () => {
    if (sentenceAudioRef.current) {
      sentenceAudioRef.current.pause();
      sentenceAudioRef.current.currentTime = 0;
    }

    if (isLastSentence) {
      setIsGameCompleted(true);
    } else {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }
    setShowIntermediatePage(false);
    setIsSubmitted(false);
  };

  const resetCurrentSentence = () => {
    setShowIntermediatePage(false);
    if (sentences.length > 0 && currentSentenceIndex < sentences.length) {
      setProcessedWords(processSentence(sentences[currentSentenceIndex].sentence));
      setCurrentWordIndex(0);
      setShowAnswer(false);
      setIsSubmitted(false);
      focusFirstInput();
    }
  };

  const previousSentence = () => {
    setCurrentSentenceIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : sentences.length - 1));
    setIsSubmitted(false);
  };

  const calculateProgress = () => {
    const totalSentences = sentences.length;
    const completedSentences = currentSentenceIndex + 1;
    return (completedSentences / totalSentences) * 100;
  };

  const showCongratulationsScreen = () => {
    setShowCongratulations(true);
  };

  const resetGame = () => {
    setShowCongratulations(false);
    setIsGameCompleted(false);
    setCurrentSentenceIndex(0);
    setTime(0);
    setTotalTime(0);
    setIsTimerRunning(true);
    completedSentencesCount.current = 0;
    setIsSubmitted(false);
  };

  const handleIntermediatePageKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.key === 'j') {
      e.preventDefault();
      resetCurrentSentence();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleNextSentence();
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const progressPercent = (clickX / progressBar.offsetWidth);
    const targetSentenceIndex = Math.floor(progressPercent * sentences.length);
    setCurrentSentenceIndex(targetSentenceIndex);
    setIsSubmitted(false);
  };

  // Listening mode functions
  const enterListeningMode = () => {
    if (sentenceAudioRef.current) {
      sentenceAudioRef.current.pause();
      sentenceAudioRef.current.currentTime = 0;
    }
    setIsListeningMode(true);
    setListeningModeIndex(0);
    setIsPlayingListeningMode(true);
  };

  const exitListeningMode = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    setIsListeningMode(false);
    setIsPlayingListeningMode(false);
  };

  if (showAnimation) {
    return (
      <AnimationOverlay>
        <AnimationWrapper>
          <AnimatedLogo />
          <LogoUnderline />
        </AnimationWrapper>
      </AnimationOverlay>
    );
  }

  if (isLoading || !isAnimationComplete) {
    return <LoadingOverlay>加载中...</LoadingOverlay>;
  }

  if (sentences.length === 0) {
    return <div>没有可用的句子</div>;
  }

  if (showCongratulations) {
    if (sentenceAudioRef.current) {
      sentenceAudioRef.current.pause();
      sentenceAudioRef.current.currentTime = 0;
    }
    return (
      <CongratulationsContainer backgroundColor={CONGRATULATIONS_BACKGROUND_COLOR} fontColor={CONGRATULATIONS_FONT_COLOR}>
        <CongratulationsTitle>恭喜！</CongratulationsTitle>
        <CongratulationsMessage>{congratulationMessage}</CongratulationsMessage>
        <TotalTime>总练习时间：{formatTime(totalTime)}</TotalTime>
        <CongratulationsButtonGroup>
          <CongratulationsButton 
            onClick={resetGame} 
            themeColor={themeColor}
          >
            重新开始
          </CongratulationsButton>
          <Link href="/courses/courseId_1" passHref>
            <CongratulationsButton as="a" themeColor={themeColor} isLink={true}>
              返回课程
            </CongratulationsButton>
          </Link>
        </CongratulationsButtonGroup>
      </CongratulationsContainer>
    );
  }

  if (showIntermediatePage) {
    return (
      <IntermediatePageContainer 
        onKeyDown={handleIntermediatePageKeyDown} 
        tabIndex={0}
        ref={intermediatePageRef}
      >
        {sentences.length > 0 && currentSentenceIndex < sentences.length && (
          <SentenceDisplay>
            {sentences[currentSentenceIndex].chinese}
            <PronunciationText>{sentences[currentSentenceIndex].pronunciation}</PronunciationText>
            {sentences[currentSentenceIndex].sentence}
          </SentenceDisplay>
        )}
        <IntermediateButtonGroup>
          <Button onClick={resetCurrentSentence} themeColor={themeColor}>
            {isMobile ? '再来一次' : (
              <>
                <ButtonFrame>Ctrl+j</ButtonFrame>
                <ButtonText>再来一次</ButtonText>
              </>
            )}
          </Button>
          <Button onClick={handleNextSentence} themeColor={themeColor}>
            {isMobile ? '下一个' : (
              <>
                <ButtonFrame>Enter</ButtonFrame>
                <ButtonText>下一个</ButtonText>
              </>
            )}
          </Button>
        </IntermediateButtonGroup>
      </IntermediatePageContainer>
    );
  }

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Container themeColor={themeColor} fontFamily={selectedFont}>
        {!isMobile && <Logo src="/favicon.ico" alt="Logo" />}
        {!isMobile && (
          <>
            <ProgressText themeColor={themeColor} position="left">
              进度：{currentSentenceIndex + 1} / {sentences.length}
            </ProgressText>
            <LessonText themeColor={themeColor}>
              第三首
            </LessonText>
            <ProgressText themeColor={themeColor} position="right" style={{ right: '7.5%' }}>
              {formatTime(time)}
            </ProgressText>
          </>
        )}
        <ProgressBarContainer onClick={handleProgressBarClick} style={{ marginTop: isMobile ? '20px' : '50px' }}>
          <ProgressBar progress={calculateProgress()} />
        </ProgressBarContainer>
        <ContentWrapper>
          {sentences.length > 0 && currentSentenceIndex < sentences.length && (
            <>
              <AnswerDisplay showAnswer={showAnswer}>
                {sentences[currentSentenceIndex].sentence}
              </AnswerDisplay>
              <ChineseMeaning>{sentences[currentSentenceIndex].chinese}</ChineseMeaning>
              <WordContainer>
              {processedWords.map(({ word, punctuation, input, isLocked, width, isLongWord, isShortWord, isMediumWord, isEightLetterWord, isSevenLetterWord, isSixLetterWord, isFiveLetterWord, isFourLetterWord }, index: number) => (
                  <WordInputWrapper key={index} width={width} isLongWord={isLongWord}>
                    <WordInput
                      ref={(el: HTMLInputElement | null) => {
                        if (inputRefs.current) {
                          inputRefs.current[index] = el;
                        }
                      }}
                      value={input}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      isCorrect={isWordCorrect({ word, input, punctuation, isLocked, width, originalWidth: width, isLongWord, isShortWord, isMediumWord, isEightLetterWord, isSevenLetterWord, isSixLetterWord, isFiveLetterWord, isFourLetterWord })}
                      isWrong={input.trim() !== '' && !isWordCorrect({ word, input, punctuation, isLocked, width, originalWidth: width, isLongWord, isShortWord, isMediumWord, isEightLetterWord, isSevenLetterWord, isSixLetterWord, isFiveLetterWord, isFourLetterWord })}
                      isCurrent={index === currentWordIndex}
                      isLocked={isLocked}
                      isSubmitted={isSubmitted}
                    />
                    <WordUnderline
                      isCorrect={isWordCorrect({ word, input, punctuation, isLocked, width, originalWidth: width, isLongWord, isShortWord, isMediumWord, isEightLetterWord, isSevenLetterWord, isSixLetterWord, isFiveLetterWord, isFourLetterWord })}
                      isWrong={input.trim() !== '' && !isWordCorrect({ word, input, punctuation, isLocked, width, originalWidth: width, isLongWord, isShortWord, isMediumWord, isEightLetterWord, isSevenLetterWord, isSixLetterWord, isFiveLetterWord, isFourLetterWord })}
                      isCurrent={index === currentWordIndex}
                      isPunctuation={punctuation !== ''}
                      isSubmitted={isSubmitted}
                      isLongWord={isLongWord}
                    />
                    {punctuation && <Punctuation>{punctuation}</Punctuation>}
                  </WordInputWrapper>
                ))}</WordContainer>
                </>
              )}
            </ContentWrapper>
            <ButtonGroup>
              <Button onClick={previousSentence} themeColor={themeColor}>
                {isMobile ? '←' : (
                  <ButtonFrame>
                    <ChevronLeft size={16} />
                  </ButtonFrame>
                )}
              </Button>
              <Button onClick={checkAnswer} themeColor={themeColor}>
                {isMobile ? '提交' : (
                  <>
                    <ButtonFrame>Enter</ButtonFrame>
                    <ButtonText>提交</ButtonText>
                  </>
                )}
              </Button>
              <Button onClick={toggleAnswer} themeColor={themeColor}>
                {isMobile ? '答案' : (
                  <>
                    <ButtonFrame>Ctrl</ButtonFrame>
                    <ButtonFrame>;</ButtonFrame>
                    <ButtonText>显示答案</ButtonText>
                  </>
                )}
              </Button>
              <Button onClick={() => playSentenceAudio()} themeColor={themeColor}>
                {isMobile ? '播放' : (
                  <>
                    <ButtonFrame>Ctrl</ButtonFrame>
                    <ButtonFrame>&apos;</ButtonFrame>
                    <ButtonText>播放发音</ButtonText>
                  </>
                )}
              </Button>
              <Button onClick={handleFixFirstIncorrectWord} themeColor={themeColor}>
                {isMobile ? '修改' : (
                  <>
                    <ButtonFrame>Space</ButtonFrame>
                    <ButtonText>修复错误单词</ButtonText>
                  </>
                )}
              </Button>
              <Button onClick={handleNextSentence} themeColor={themeColor}>
                {isMobile ? '→' : (
                  <ButtonFrame>
                    <ChevronRight size={16} />
                  </ButtonFrame>
                )}
              </Button>
            </ButtonGroup>
            {!isMobile && (
              <Link href="/courses/courseId_1" passHref>
                <Button 
                  className={buttonClass}
                  themeColor={themeColor}
                  style={{ 
                    position: 'fixed', 
                    bottom: '20px',
                    right: '20px', 
                    padding: '0.5rem 1rem', 
                    fontSize: '0.8rem',
                    zIndex: 1001,
                    backgroundColor: 'rgba(30, 30, 30, 0.7)',
                    borderRadius: '5px',
                    color: 'white',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                  }}
                >
                  返回上一页
                </Button>
              </Link>
            )}
            <ListeningModeButton onClick={enterListeningMode} themeColor={themeColor}>
              听力模式
            </ListeningModeButton>
          </Container>
          {isListeningMode && (
            <ListeningModeContainer>
              <ListeningModeControlsContainer>
                <ListeningModeControlButton onClick={exitListeningMode} themeColor={themeColor}>
                  <X size={24} />
                </ListeningModeControlButton>
              </ListeningModeControlsContainer>
              <SentenceDisplay>
                <ChineseMeaning>
                  {sentences[listeningModeIndex]?.chinese}
                </ChineseMeaning>
                <PronunciationText>{sentences[listeningModeIndex]?.pronunciation}</PronunciationText>
                {sentences[listeningModeIndex]?.sentence}
              </SentenceDisplay>
            </ListeningModeContainer>
          )}
          <span ref={textWidthRef} style={{ visibility: 'hidden', position: 'absolute', fontSize: '2.5rem', fontFamily: selectedFont }}></span>
        </React.Fragment>
      );
    }