import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { SentenceData } from './wordDataLesson6';
import { congratulationsMessages } from '../congratulationsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';

// Styled components
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
  padding: 2rem 2rem 5rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  position: relative;
  overflow-y: hidden; // 桌面端保持隐藏溢出内容

  @media (max-width: 768px) {
    height: auto; // 移除固定高度，允许容决定高度
    min-height: 100vh; // 确保至少占满整个视口高度
    overflow-y: auto; // 允许垂直滚动
    padding-bottom: 6rem; // 增加底部padding，为底部的按钮组留出空间
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
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
  padding: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem; // 为移动端的按钮组留出空间
  }
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
  @media (min-width: 768px) {
    display: none;
  }
  font-size: 1rem;
  color: ${props => props.themeColor};
  margin: 0.5rem 0;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.backgroundColor || '#05051d'};

  @media (max-width: 768px) {
    position: static; // 移除固定位置，使按钮组随内容滚动
    padding: 1rem 2rem; // 恢复原始padding
    z-index: auto; // 移除z-index，不再需要保持在最上层
  }
`;

const NavigationButton = styled.button<{ themeColor: string }>`
  position: absolute;
  top: 50%; // 原来的位置
  transform: translateY(-50%); // 原来的居中方式
`;

const LeftNavigationButton = styled(NavigationButton)`
  left: 24%; // 调整左侧按钮位置
  top: calc(100% - 6.8rem); // 调整到与底部按钮组同一水平线
  transform: translateY(-50%); // 保持垂直居中
`;

const RightNavigationButton = styled(NavigationButton)`
  right: 24%; // 调整右侧按钮位置
  top: calc(100% - 6.8rem); // 调整到与底部按钮组同一水平线
  transform: translateY(-50%); // 保持垂直居中
`;

const CentralButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CongratulationsButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
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
`;

const ButtonText = styled.span`
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const ExtraSpacedButton = styled(Button)`
  margin-right: 0.5rem;
`;

const HomeButton = styled(Button)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
  font-size: 0.6rem;
  padding: 0.25rem 0.5rem;

  @media (max-width: 768px) {
    position: static; // 移除固定位置，使按钮随内容滚动
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
`;

const WordInputWrapper = styled.div<{ width: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 6px 15px 6px;
  width: calc(${props => props.width} + 2.5em);
  min-width: 1.5em;
  transition: width 0.3s ease;
`;

const WordInput = styled.input<{ isCorrect: boolean; isWrong: boolean; isCurrent: boolean; isLocked: boolean; isSubmitted: boolean }>`
  width: calc(100% + 2em);
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

const WordUnderline = styled.div<{ isCorrect: boolean; isWrong: boolean; isCurrent: boolean; isPunctuation: boolean; isSubmitted: boolean }>`
  position: relative;
  width: 100%;
  min-width: 1.5em;
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
  transform: translateY(-10px);
  position: absolute;
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
`;

const IntermediateButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

interface ProcessedWord {
  word: string;
  punctuation: string;
  input: string;
  isLocked: boolean;
  width: string;
  originalWidth: string;
}

interface TypingGameProps {
  lessonNumber: number;
  sentences: SentenceData[];
  totalLessons: number;
  lessonTitle: string;
}

const processSentence = (sentence: string): ProcessedWord[] => {
  const words = sentence.split(/\s+/);
  return words.map(word => {
    const match = word.match(/^(.*?)([.,!?:;]*)$/);
    if (match) {
      const baseWidth = `${match[1].length + 3}em`;
      return { 
        word: match[1], 
        punctuation: match[2], 
        input: '', 
        isLocked: false, 
        width: baseWidth,
        originalWidth: baseWidth
      };
    }
    const baseWidth = `${word.length + 1.5}em`;
    return { 
      word, 
      punctuation: '', 
      input: '', 
      isLocked: false, 
      width: baseWidth,
      originalWidth: baseWidth
    };
  });
};

const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    height: '100vh',
    overflow: 'hidden',
  },
  '*': {
    boxSizing: 'inherit',
  },
};

export default function TypingGame({ lessonNumber, sentences: initialSentences, totalLessons, lessonTitle }: TypingGameProps) {
  const [sentences, setSentences] = useState<SentenceData[]>(initialSentences);
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
  const nextLessonButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    const userSentences = localStorage.getItem(`userSentencesLesson${lessonNumber}`);
    if (userSentences) {
      try {
        const parsedSentences = JSON.parse(userSentences);
        setSentences(parsedSentences);
      } catch (error) {
        console.error('Failed to parse user sentences:', error);
      }
    }

    const savedIndex = localStorage.getItem(`currentSentenceIndexLesson${lessonNumber}`);
    if (savedIndex) {
      setCurrentSentenceIndex(parseInt(savedIndex, 10));
    }
  }, [lessonNumber]);

  useEffect(() => {
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

    localStorage.setItem(`currentSentenceIndexLesson${lessonNumber}`, currentSentenceIndex.toString());
    if (!showIntermediatePage) {
      playSentenceAudio(currentSentence.sentence, currentSentenceIndex + 1);
    }
  }, [currentSentenceIndex, sentences, showIntermediatePage, lessonNumber]);

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
    if (showCongratulations && nextLessonButtonRef.current) {
      nextLessonButtonRef.current.focus();
    }
  }, [showCongratulations]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const progressText = `${currentSentenceIndex + 1}/${sentences.length}`;
      console.log(progressText);
    }
  }, [currentSentenceIndex, sentences.length]);

  const calculateTextWidth = (text: string) => {
    if (textWidthRef.current) {
      textWidthRef.current.textContent = text;
      return `${textWidthRef.current.offsetWidth / 16 + 0.5}em`;
    }
    return `${text.length + 1.5}em`;
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

  const playSentenceAudio = async (text: string, sequenceNumber: number) => {
    setIsPlayingTTS(true);
    const audioPath = `backend/audio_cache/courseId_4/6/`;

    try {
      const response = await axios.head(`${audioPath}${sequenceNumber}.mp3`);
      if (response.status === 200) {
        const audio = new Audio(`${audioPath}${sequenceNumber}.mp3`);
        setCurrentAudio(audio);
        audio.onended = () => {
          setIsPlayingTTS(false);
          setCurrentAudio(null);
        };
        audio.play();
        return;
      }
    } catch (error) {
      console.log('Audio file does not exist, generating new audio.');
    }

    try {
      const response = await axios.post('/api/tts', {
        text: text,
        voice: 'en-US-AriaNeural',
        path: audioPath,
        sequence: sequenceNumber
      }, {
        responseType: 'blob'
      });

      const audioBlob = new Blob([response.data], { type: 'audio/mp3' });
      const url = URL.createObjectURL(audioBlob);
      const audio = new Audio(url);
      
      setCurrentAudio(audio);
      
      audio.onended = () => {
        setIsPlayingTTS(false);
        URL.revokeObjectURL(url);
        setCurrentAudio(null);
      };
      
      audio.play();
    } catch (error) {
      console.error('Error playing TTS:', error);
      setIsPlayingTTS(false);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const cleanedValue = value.replace(/[^a-zA-Z0-9-''']/g, "");
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
      } else if (e.key === 'k') {
        e.preventDefault();
        clearInput();
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

    if (e.key === 'ArrowRight' || (e.key === ' ' && index < processedWords.length - 1)) {
      e.preventDefault();
      let nextIndex = index + 1;
      while (nextIndex < processedWords.length && processedWords[nextIndex].word === '') {
        nextIndex++;
      }
      setCurrentWordIndex(nextIndex);
      inputRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowLeft' || (e.key === ' ' && index > 0)) {
      e.preventDefault();
      let prevIndex = index - 1;
      while (prevIndex >= 0 && processedWords[prevIndex].word === '') {
        prevIndex--;
      }
      setCurrentWordIndex(prevIndex);
      inputRefs.current[prevIndex]?.focus();
    }

    if (e.key === ' ') {
      e.preventDefault();
      if (isSubmitted) {
        handleFixFirstIncorrectWord();
      } else if (index < processedWords.length - 1) {
        let nextIndex = index + 1;
        while (nextIndex < processedWords.length && processedWords[nextIndex].word === '') {
          nextIndex++;
        }
        setCurrentWordIndex(nextIndex);
        inputRefs.current[nextIndex]?.focus();
      }
    }
  };

  const handleFixFirstIncorrectWord = () => {
    if (isSubmitted) {
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
    }
  };

  const clearInput = () => {
    setProcessedWords(prev =>
      prev.map(word => ({ ...word, input: '', width: word.originalWidth }))
    );
    setCurrentWordIndex(0);
    setIsSubmitted(false);
    setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 0);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const normalizeText = (text: string) => 
    text.toLowerCase().replace(/[''']/g, "").replace(/[^a-z0-9-]/g, "").trim();

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

  const showCongratulationsPage = useCallback(() => {
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
  }, [currentAudio]);

  const nextSentence = useCallback(() => {
    if (currentSentenceIndex === sentences.length - 1) {
      showCongratulationsPage();
    } else {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }
    setShowIntermediatePage(false);
    setTime(0);
    setIsSubmitted(false);
  }, [currentSentenceIndex, sentences.length, showCongratulationsPage]);

  const previousSentence = useCallback(() => {
    setCurrentSentenceIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : sentences.length - 1));
  }, [sentences.length]);

  const calculateProgress = () => {
    const totalSentences = sentences.length;
    const completedSentences = currentSentenceIndex + 1;
    return (completedSentences / totalSentences) * 100;
  };

  const restartCurrentSentence = useCallback(() => {
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
  }, [currentSentenceIndex, sentences]);

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

  const goToNextLesson = () => {
    console.log("goToNextLesson function called");
    console.log("Current lesson number:", lessonNumber);
    console.log("Total lessons:", totalLessons);

    const nextLessonNumber = lessonNumber + 1;
    console.log("Next lesson number:", nextLessonNumber);

    if (nextLessonNumber <= totalLessons) {
      const nextPath = `/courses/courseId_4/lessons/${nextLessonNumber}`;
      console.log("Attempting to navigate to:", nextPath);
      try {
        router.push(nextPath);
        console.log("Navigation initiated");
      } catch (error) {
        console.error("Error during navigation:", error);
      }
    } else {
      console.log("All lessons completed, returning to course page");
      try {
        router.push('/courses/courseId_4');
        console.log("Navigation to course page initiated");
      } catch (error) {
        console.error("Error during navigation to course page:", error);
      }
    }
  };

  const congratulationsBackgroundColor = themeColor;
  const congratulationsFontColor = '#ffffff';

  if (showIntermediatePage) {
    return (
      <IntermediatePageContainer
        ref={intermediatePageRef}
        tabIndex={0}
        onKeyDown={handleIntermediatePageKeyDown}
      >
        <SentenceDisplay>
          {sentences[currentSentenceIndex].chinese}
          <br />
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
        <CongratulationsTitle>Congratulations!</CongratulationsTitle>
        <CongratulationsMessage>{congratulationsMessage}</CongratulationsMessage>
        <TotalTime>Total practice time: {formatTime(totalTime)}</TotalTime>
        <CongratulationsButtonGroup>
          <Button 
            onClick={() => {
              setCurrentSentenceIndex(0);
              setTime(0);
              setTotalTime(0);
              setShowCongratulations(false);
              setIsGameCompleted(false);
            }} 
            themeColor={themeColor}
          >
            Restart
          </Button>
          <Button
            ref={nextLessonButtonRef}
            onClick={goToNextLesson}
            themeColor={themeColor}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                goToNextLesson();
              }
            }}
          >
            Next Lesson
          </Button>
          <Link href="/courses/courseId_4" passHref>
            <Button as="a" themeColor={themeColor} isLink={true}>
              Return to Course
            </Button>
          </Link>
        </CongratulationsButtonGroup>
      </CongratulationsContainer>
    );
  }

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Container themeColor={themeColor} fontFamily={selectedFont}>
        <LessonTitle>{lessonTitle}</LessonTitle>
        <ProgressText themeColor={themeColor} position="left">
          Progress: {currentSentenceIndex + 1} / {sentences.length}
        </ProgressText>
        <ProgressText themeColor={themeColor} position="right">
          Time: {formatTime(time + totalTime)}
        </ProgressText>
        <ProgressBarContainer onClick={handleProgressBarClick}>
          <ProgressBar progress={calculateProgress()} />
        </ProgressBarContainer>
        <ContentWrapper>
          <AnswerDisplay showAnswer={showAnswer}>
            {sentences[currentSentenceIndex].sentence}
          </AnswerDisplay>
          <ChineseMeaning>{sentences[currentSentenceIndex].chinese}</ChineseMeaning>
          <WordContainer>
            {processedWords.map(({ word, punctuation, input, isLocked, width }, index) => (
              <WordInputWrapper key={index} width={width}>
                <WordInput
                  ref={el => inputRefs.current[index] = el}
                  value={input}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  isCorrect={isWordCorrect({ word, input, punctuation, isLocked, width, originalWidth: width })}
                  isWrong={input.trim() !== '' && !isWordCorrect({ word, input, punctuation, isLocked, width, originalWidth: width })}
                  isCurrent={index === currentWordIndex}
                  isLocked={isLocked}
                  isSubmitted={isSubmitted}
                  autoFocus={index === currentWordIndex}
                />
                <WordUnderline
                  isCorrect={isWordCorrect({ word, input, punctuation, isLocked, width, originalWidth: width })}
                  isWrong={input.trim() !== '' && !isWordCorrect({ word, input, punctuation, isLocked, width, originalWidth: width })}
                  isCurrent={index === currentWordIndex}
                  isPunctuation={punctuation !== ''}
                  isSubmitted={isSubmitted}
                />
                {punctuation && <Punctuation>{punctuation}</Punctuation>}
              </WordInputWrapper>
            ))}
          </WordContainer>
        </ContentWrapper>
        <ButtonGroup>
          <LeftNavigationButton onClick={previousSentence} themeColor={themeColor}>
            <ButtonFrame>
              <ChevronLeft size={16} />
            </ButtonFrame>
          </LeftNavigationButton>
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
          <RightNavigationButton onClick={() => setShowIntermediatePage(true)} themeColor={themeColor}>
            <ButtonFrame>
              <ChevronRight size={16} />
            </ButtonFrame>
          </RightNavigationButton>
        </ButtonGroup>
        <Link href="/courses/courseId_4" passHref legacyBehavior>
          <HomeButton themeColor={themeColor} isLink={true}>
            返回上一页
          </HomeButton>
        </Link>
      </Container>
      <span ref={textWidthRef} style={{ visibility: 'hidden', position: 'absolute', fontSize: '2.5rem', fontFamily: selectedFont }}></span>
    </React.Fragment>
  );
}