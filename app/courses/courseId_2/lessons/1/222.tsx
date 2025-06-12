'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Global, css, keyframes } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { sentences as lesson2Sentences, SentenceData } from './wordDataLesson1';
import { congratulationsMessages } from '../congratulationsData';
import { ChevronLeft, ChevronRight, Volume2, Headphones, X } from 'lucide-react';

// Styled Components
const Container = styled.div<{ themeColor: string; fontFamily: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.themeColor};
  color: #ffffff;
  font-family: ${props => props.fontFamily};
  transition: background-color 0.3s, color 0.3s;
  margin: 0;
  padding: 2rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  max-height: 100vh;
`;

const Logo = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 32px;
  height: 32px;
`;

const LessonTitle = styled.h1`
  font-size: 1.1rem;
  color: #bdc3c7;
  text-align: center;
  margin: 0;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`;

const ProgressText = styled.p<{ themeColor: string; position: 'left' | 'right' }>`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    ${props => props.position}: 12%;
    font-size: 1.1rem;
    color: #bdc3c7;
    margin: 0;
    z-index: 1;
  }
`;

const MobileProgressText = styled.p<{ themeColor: string }>`
  display: block;
  font-size: 1rem;
  color: ${props => props.themeColor};
  margin: 0.5rem 0;
  
  @media (min-width: 768px) {
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
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  background-color: #00ff66;
  width: ${props => props.progress}%;
  transition: width 0.3s;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CentralButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
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
    flex-direction: column;
    font-size: 0.7rem;
    align-items: center;
    justify-content: center;
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
    margin-left: 0;
    margin-top: 0.25rem;
  }
`;

const ExtraSpacedButton = styled(Button)`
  margin-right: 0.5rem;
`;

const NavigationButton = styled(Button)`
  margin: 0 1rem;
`;

const HomeButton = styled(Button)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
  font-size: 0.6rem;
  padding: 0.25rem 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ChineseMeaning = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const AnswerDisplay = styled.div<{ showAnswer: boolean }>`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #FFD700;
  opacity: ${props => props.showAnswer ? 1 : 0};
  transition: opacity 0.3s ease;
  margin-top: -1rem;
`;

const WordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
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
`;

const WordInput = styled.input<{ isCorrect: boolean; isWrong: boolean; isCurrent: boolean; isLocked: boolean; isSubmitted: boolean }>`
  width: 100%;
  min-width: 1.5em;
  padding: 1px 0;
  font-size: 3rem;
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
`;

const Punctuation = styled.span`
  font-size: 2rem;
  display: inline-block;
  margin-left: -2px;
  position: absolute;
  bottom: 0;
`;

const CongratulationsContainer = styled.div<{ backgroundColor: string; fontColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
`;

const CongratulationsTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const CongratulationsMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const TotalTime = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
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
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;

  .pronunciation {
    font-size: 1.5rem;
    color: #FFD700; // 金色
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    
    .pronunciation {
      font-size: 1.2rem;
    }
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

const MobileButtonGroup = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #05051d;
  }
`;

const MobileButton = styled.button`
  background-color: white;
  color: #05051d;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 0.8rem;
  font-weight: bold;
`;

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

// 新增听力模式相关的样式组件
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
  border-radius: 50%;
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

export default function TypingGameLesson2() {
  const [sentences, setSentences] = useState<SentenceData[]>(lesson2Sentences);
  const [themeColor, setThemeColor] = useState('#05051d');
  const [selectedFont, setSelectedFont] = useState('Tahoma, sans-serif');
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [processedWords, setProcessedWords] = useState<ProcessedWord[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isPlayingTTS, setIsPlayingTTS] = useState(false);
  const [showIntermediatePage, setShowIntermediatePage] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [congratulationsMessage, setCongratulationsMessage] = useState('');
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const typingAudioRef = useRef<HTMLAudioElement | null>(null);
  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const errorAudioRef = useRef<HTMLAudioElement | null>(null);
  const intermediatePageRef = useRef<HTMLDivElement>(null);
  const textWidthRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 新增动画相关的状态
  const [showAnimation, setShowAnimation] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // 新增听力模式相关的状态
  const [isListeningMode, setIsListeningMode] = useState(false);
  const [listeningModeIndex, setListeningModeIndex] = useState(0);
  const [isPlayingListeningMode, setIsPlayingListeningMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setIsAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const userSentences = localStorage.getItem('userSentencesLesson2');
    if (userSentences) {
      try {
        const parsedSentences = JSON.parse(userSentences);
        setSentences(parsedSentences);
      } catch (error) {
        console.error('Failed to parse user sentences:', error);
      }
    }

    const savedIndex = localStorage.getItem('currentSentenceIndexLesson2');
    if (savedIndex) {
      setCurrentSentenceIndex(parseInt(savedIndex, 10));
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isAnimationComplete) return;

    const currentSentence = sentences[currentSentenceIndex];
    setProcessedWords(processSentence(currentSentence.sentence));
    setCurrentWordIndex(0);
    setShowAnswer(false);
    setIsSubmitted(false);
    setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 0);

    localStorage.setItem('currentSentenceIndexLesson2', currentSentenceIndex.toString());
    if (!showIntermediatePage && !isListeningMode) {
      playSentenceAudio(currentSentence.sentence, currentSentenceIndex + 1);
    }
  }, [currentSentenceIndex, sentences, showIntermediatePage, isAnimationComplete, isListeningMode]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);

    typingAudioRef.current = new Audio('/typing.mp3');
    correctAudioRef.current = new Audio('/correct.mp3');
    errorAudioRef.current = new Audio('/error.mp3');
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (showIntermediatePage && intermediatePageRef.current) {
      intermediatePageRef.current.focus();
      playSentenceAudio(sentences[currentSentenceIndex].sentence, currentSentenceIndex + 1);
    }
  }, [showIntermediatePage, currentSentenceIndex, sentences]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // 新增听力模式效果
  useEffect(() => {
    if (isListeningMode && isPlayingListeningMode) {
      const playNextSentence = async () => {
        if (listeningModeIndex < sentences.length) {
          try {
            await playAudioTwice(sentences[listeningModeIndex].sentence, listeningModeIndex + 1);
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
    return `${minutes}分${remainingSeconds}秒`;
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

  const playSentenceAudio = (text: string, sequenceNumber: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      setIsPlayingTTS(true);
      const audioPath = `backend/audio_cache/courseId_2/`;

      const playAudio = (url: string) => {
        const audio = new Audio(url);
        setCurrentAudio(audio);
        
        audio.onended = () => {
          setIsPlayingTTS(false);
          setCurrentAudio(null);
          resolve();
        };

        audio.onerror = (error) => {
          console.error('Error playing audio:', error);
          setIsPlayingTTS(false);
          reject(error);
        };
        
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
          setIsPlayingTTS(false);
          reject(error);
        });
      };

      axios.head(`${audioPath}${sequenceNumber}.mp3`)
        .then(() => {
          playAudio(`${audioPath}${sequenceNumber}.mp3`);
        })
        .catch(() => {
          console.log('Audio file does not exist, generating new audio.');
          axios.post('/api/tts', {
            text: text,
            voice: 'en-US-AriaNeural',
            path: audioPath,
            sequence: sequenceNumber
          }, {
            responseType: 'blob'
          })
          .then(response => {
            const audioBlob = new Blob([response.data], { type: 'audio/mp3' });
            const url = URL.createObjectURL(audioBlob);
            playAudio(url);
          })
          .catch(error => {
            console.error('Error generating TTS:', error);
            setIsPlayingTTS(false);
            reject(error);
          });
        });
    });
  };

  const playAudioTwice = async (text: string, sequenceNumber: number) => {
    try {
      await playSentenceAudio(text, sequenceNumber);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 等待1秒
      await playSentenceAudio(text, sequenceNumber);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 再等待1秒
    } catch (error) {
      console.error('Error playing audio twice:', error);
    }
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
      } else if (e.key === "'") {
        e.preventDefault();
        playSentenceAudio(sentences[currentSentenceIndex].sentence, currentSentenceIndex + 1);
      }
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        setCurrentAudio(null);
      }
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

  const normalizeText = (text: string) => 
    text.toLowerCase().replace(/[''']/g, "").replace(/[^a-z0-9]/g, "").trim();

  const isWordCorrect = (word: ProcessedWord) => {
    const normalizedInput = normalizeText(word.input);
    const normalizedWord = normalizeText(word.word);
    return normalizedInput === normalizedWord;
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
      setTotalTime(prevTotal => prevTotal + time);
      setShowIntermediatePage(true);
    } else {
      playErrorSound();
      setProcessedWords(prev => prev.map(word => ({
        ...word,
        isLocked: isWordCorrect(word)
      })));
    }
  };

  const showCongratulationsPage = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
    if (typingAudioRef.current) {
      typingAudioRef.current.pause();
      typingAudioRef.current.currentTime = 0;
    }
    if (correctAudioRef.current) {
      correctAudioRef.current.pause();
      correctAudioRef.current.currentTime = 0;
    }
    if (errorAudioRef.current) {
      errorAudioRef.current.pause();
      errorAudioRef.current.currentTime = 0;
    }
    const randomMessage = congratulationsMessages[Math.floor(Math.random() * congratulationsMessages.length)];
    setCongratulationsMessage(randomMessage.message);
    setShowCongratulations(true);
    setIsGameCompleted(true);
  };

  const nextSentence = useCallback(() => {
    if (currentSentenceIndex === sentences.length - 1) {
      showCongratulationsPage();
    } else {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }
    setShowIntermediatePage(false);
    setTime(0);
    setIsSubmitted(false);
  }, [currentSentenceIndex, sentences.length]);

  const previousSentence = useCallback(() => {
    setCurrentSentenceIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : sentences.length - 1));
  }, [sentences.length]);

  const calculateProgress = () => {
    const totalSentences = sentences.length;
    const completedSentences = currentSentenceIndex + 1;
    return (completedSentences / totalSentences) * 100;
  };

  const restartCurrentSentence = () => {
    const currentSentence = sentences[currentSentenceIndex];
    setProcessedWords(processSentence(currentSentence.sentence));
    setCurrentWordIndex(0);
    setShowAnswer(false);
    playSentenceAudio(currentSentence.sentence, currentSentenceIndex + 1);
    setShowIntermediatePage(false);
    setTime(0);
    setIsSubmitted(false);
    setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 0);
  };

  const handleIntermediatePageKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.key === 'j') {
      e.preventDefault();
      restartCurrentSentence();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        setCurrentAudio(null);
      }
      nextSentence();
    }
  }, [nextSentence, restartCurrentSentence, currentAudio]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const progressPercent = (clickX / progressBar.offsetWidth);
    const targetSentenceIndex = Math.floor(progressPercent * sentences.length);
    setCurrentSentenceIndex(targetSentenceIndex);
  };

  const congratulationsBackgroundColor = themeColor;
  const congratulationsFontColor = '#ffffff';

  const getMobileProgressText = () => {
    return `${currentSentenceIndex + 1}/${sentences.length} - ${formatTime(time)}`;
  };

  // 新增听力模式相关函数
  const enterListeningMode = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
    setIsListeningMode(true);
    setListeningModeIndex(0);
    setIsPlayingListeningMode(true);
  };

  const exitListeningMode = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
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

  if (showIntermediatePage) {
    return (
      <IntermediatePageContainer
        ref={intermediatePageRef}
        tabIndex={0}
        onKeyDown={handleIntermediatePageKeyDown}
      >
        <SentenceDisplay>
          {sentences[currentSentenceIndex].chinese}
          <div className="pronunciation">{sentences[currentSentenceIndex].pronunciation}</div>
          {sentences[currentSentenceIndex].sentence}
        </SentenceDisplay>
        <IntermediateButtonGroup>
          <Button 
            onClick={restartCurrentSentence} 
            themeColor={themeColor}
          >
            <ButtonFrame>Ctrl+j</ButtonFrame>
            <ButtonText>再来一次</ButtonText>
          </Button>
          <Button 
            onClick={nextSentence} 
            themeColor={themeColor}
          >
            <ButtonFrame>Enter</ButtonFrame>
            <ButtonText>下一个</ButtonText>
          </Button>
        </IntermediateButtonGroup>
      </IntermediatePageContainer>
    );
  }

  if (showCongratulations) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
    return (
      <CongratulationsContainer backgroundColor={congratulationsBackgroundColor} fontColor={congratulationsFontColor}>
        <CongratulationsTitle>恭喜!</CongratulationsTitle>
        <CongratulationsMessage>{congratulationsMessage}</CongratulationsMessage>
        <TotalTime>总练习时间: {formatTime(totalTime)}</TotalTime>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <Button 
            onClick={() => {
              setCurrentSentenceIndex(0);
              setTime(0);
              setTotalTime(0);
              setShowCongratulations(false);
              setIsGameCompleted(false);
            }} 
            themeColor={themeColor}
            style={{ margin: 0 }}
          >
            重新开始
          </Button>
          <Link href="/courses/courseId_2" passHref>
            <Button as="a" themeColor={themeColor} isLink={true} style={{ margin: 0 }}>
              返回课程
            </Button>
          </Link>
        </div>
      </CongratulationsContainer>
    );
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Container themeColor={themeColor} fontFamily={selectedFont}>
        <Logo src="/favicon.ico" alt="Logo" />
        <LessonTitle>Lesson 2</LessonTitle>
        <ProgressText themeColor={themeColor} position="left">
          Progress: {currentSentenceIndex + 1} / {sentences.length}
        </ProgressText>
        <ProgressText themeColor={themeColor} position="right">
          Time: {formatTime(time)}
        </ProgressText>
        <MobileProgressText themeColor={themeColor}>
          {getMobileProgressText()}
        </MobileProgressText>
        <ProgressBarContainer onClick={handleProgressBarClick}>
          <ProgressBar progress={calculateProgress()} />
        </ProgressBarContainer>
        <ContentWrapper>
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
                  autoFocus={index === currentWordIndex}
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
            ))}
          </WordContainer>
        </ContentWrapper>
        {!isMobile && (
          <ButtonGroup>
            <NavigationButton onClick={previousSentence} themeColor={themeColor}>
              <ButtonFrame>
                <ChevronLeft size={16} />
              </ButtonFrame>
            </NavigationButton>
            <CentralButtonGroup>
              <ExtraSpacedButton onClick={() => playSentenceAudio(sentences[currentSentenceIndex].sentence, currentSentenceIndex + 1)} themeColor={themeColor}>
                <ButtonFrame>Ctrl</ButtonFrame>
                <ButtonFrame>&apos;</ButtonFrame>
                <ButtonText>播放发音</ButtonText>
              </ExtraSpacedButton>
              <ExtraSpacedButton onClick={checkAnswer} themeColor={themeColor}>
                <ButtonFrame>Enter</ButtonFrame>
                <ButtonText>提交</ButtonText>
              </ExtraSpacedButton>
              <ExtraSpacedButton onClick={toggleAnswer} themeColor={themeColor}>
                <ButtonFrame>Ctrl</ButtonFrame>
                <ButtonFrame>;</ButtonFrame>
                <ButtonText>显示答案</ButtonText>
              </ExtraSpacedButton>
              <Button onClick={handleFixFirstIncorrectWord} themeColor={themeColor}>
                <ButtonFrame>Space</ButtonFrame>
                <ButtonText>修复错误单词</ButtonText>
              </Button>
            </CentralButtonGroup>
            <NavigationButton onClick={() => setShowIntermediatePage(true)} themeColor={themeColor}>
              <ButtonFrame>
                <ChevronRight size={16} />
              </ButtonFrame>
            </NavigationButton>
          </ButtonGroup>
        )}

        {isMobile && (
          <MobileButtonGroup>
            <MobileButton onClick={previousSentence}>←</MobileButton>
            <MobileButton onClick={checkAnswer}>提交</MobileButton>
            <MobileButton onClick={toggleAnswer}>答案</MobileButton>
            <MobileButton onClick={() => playSentenceAudio(sentences[currentSentenceIndex].sentence, currentSentenceIndex + 1)}>播放</MobileButton>
            <MobileButton onClick={handleFixFirstIncorrectWord}>修改</MobileButton>
            <MobileButton onClick={() => setShowIntermediatePage(true)}>→</MobileButton>
          </MobileButtonGroup>
        )}

        {!isMobile && (
          <Link href="/courses/courseId_2" passHref legacyBehavior>
            <HomeButton themeColor={themeColor} isLink={true}>
              返回上一页
            </HomeButton>
          </Link>
        )}

        <ListeningModeButton onClick={enterListeningMode} themeColor={themeColor}>
          <ButtonFrame>
            <Headphones size={16} />
          </ButtonFrame>
          <ButtonText>听力模式</ButtonText>
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
            <div className="pronunciation">{sentences[listeningModeIndex]?.pronunciation}</div>
            {sentences[listeningModeIndex]?.sentence}
          </SentenceDisplay>
        </ListeningModeContainer>
      )}
      <span ref={textWidthRef} style={{ visibility: 'hidden', position: 'absolute', fontSize: '2.5rem', fontFamily: selectedFont }}></span>
    </>
  );
}