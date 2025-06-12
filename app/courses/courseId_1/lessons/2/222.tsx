'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import Link from 'next/link';
import { sentences as defaultSentences, SentenceData } from './wordDataLesson2';
import { congratulationsMessages } from '../congratulationsData';
import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';

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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 4rem;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 5px;
    background-color: ${props => props.theme.themeColor};
    z-index: 1000;
    justify-content: space-around;
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

const WordInputWrapper = styled.div<{ width: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 6px 15px 6px;
  width: calc(${props => props.width} + 2.5em);
  min-width: 1.5em;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    margin: 0 3px 10px 3px;
    width: calc(${props => props.width} + 1em);
    min-width: 1em;
  }
`;

const WordInput = styled.input<{ isCorrect: boolean; isWrong: boolean; isCurrent: boolean; isLocked: boolean; isSubmitted: boolean }>`
  width: calc(100% + 2em);
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

  @media (max-width: 768px) {
    min-width: 1em;
    height: 1px;
    margin-top: 25px;
  }
`;

const Punctuation = styled.span`
  font-size: 2rem;
  display: inline-block;
  margin-left: -2px;
  transform: translateY(-10px);
  position: absolute;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    right: -0.5em;
    transform: none;
  }
`;

const CongratulationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-color: black;
  color: white;
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

const CongratulationsStats = styled.p`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
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

const IntermediateButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SentenceDisplay = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

interface ProcessedWord {
  word: string;
  punctuation: string;
  input: string;
  isLocked: boolean;
  width: string;
  originalWidth: string;
}

const processSentence = (sentence: string): ProcessedWord[] => {
  const words = sentence.split(/\s+/);
  return words.map(word => {
    const match = word.match(/^(.*?)([.,!?:;]*)$/);
    if (match) {
      const width = `${match[1].length + 0.5}em`;
      return { word: match[1], punctuation: match[2], input: '', isLocked: false, width, originalWidth: width };
    }
    const width = `${word.length + 0.5}em`;
    return { word, punctuation: '', input: '', isLocked: false, width, originalWidth: width };
  });
};

const normalizeText = (text: string) => 
  text.toLowerCase().replace(/[''']/g, "").replace(/[^a-z0-9]/g, "").trim();

const isWordCorrect = (word: ProcessedWord) => {
  const normalizedInput = normalizeText(word.input);
  const normalizedWord = normalizeText(word.word);
  return normalizedInput === normalizedWord;
};

const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  '*': {
    boxSizing: 'inherit',
  },
};

export default function TypingGameLesson2() {
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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    focusFirstInput();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    setProcessedWords(processSentence(currentSentence.sentence));
    setCurrentWordIndex(0);
    setShowAnswer(false);
    setIsLastSentence(currentSentenceIndex === sentences.length - 1);
    setIsSubmitted(false);
    playSentenceAudio();

    focusFirstInput();

    localStorage.setItem('currentSentenceIndexLesson1', currentSentenceIndex.toString());
  }, [currentSentenceIndex, sentences]);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    focusFirstInput();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (sentences.length > 0 && currentSentenceIndex < sentences.length) {
      const currentSentence = sentences[currentSentenceIndex];
      setProcessedWords(processSentence(currentSentence.sentence));
      setCurrentWordIndex(0);
      setShowAnswer(false);
      setIsLastSentence(currentSentenceIndex === sentences.length - 1);
      setIsSubmitted(false);
      playSentenceAudio();

      focusFirstInput();

      localStorage.setItem('currentSentenceIndexLesson2', currentSentenceIndex.toString());
    }
  }, [currentSentenceIndex, sentences]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning]);

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
    setButtonClass('your-button-class'); // 替换为实际的 class 名称
  }, []);

  const focusFirstInput = () => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  };

  const calculateTextWidth = (text: string) => {
    if (textWidthRef.current) {
      textWidthRef.current.textContent = text;
      return `${textWidthRef.current.offsetWidth / 16 + 1.5}em`;
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

  const playSentenceAudio = () => {
    if (sentences.length > 0 && currentSentenceIndex < sentences.length) {
      const audioSrc = `/audio_1/lesson_2/${sentences[currentSentenceIndex].id}.mp3`;
      sentenceAudioRef.current = new Audio(audioSrc);
      sentenceAudioRef.current.play().catch(e => {
        console.error("Error playing sentence audio:", e);
      });
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const cleanedValue = value.replace(/[^a-zA-Z0-9''']/g, "");
    setProcessedWords(prev => {
      const newWords = [...prev];
      const originalWord = newWords[index].word;
      const newWidth = cleanedValue.length > originalWord.length 
        ? calculateTextWidth(cleanedValue + '  ')
        : newWords[index].originalWidth;
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

  if (showCongratulations) {
    return (
      <CongratulationsContainer>
        <CongratulationsTitle>Congratulations!</CongratulationsTitle>
        <CongratulationsMessage>
          {congratulationMessage}
        </CongratulationsMessage>
        <CongratulationsStats>
          You have completed {completedSentencesCount.current} exercises in {formatTime(time)}
        </CongratulationsStats>
        <Button onClick={resetGame} themeColor={themeColor}>
          Restart
        </Button>
        <Link href="/" passHref>
          <Button as="a" themeColor={themeColor} isLink={true}>
            Return to Home
          </Button>
        </Link>
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
            <br />
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
              Progress: {currentSentenceIndex + 1} / {sentences.length}
            </ProgressText>
            <LessonText themeColor={themeColor}>
              Lesson 1
            </LessonText>
            <ProgressText themeColor={themeColor} position="right" style={{ right: '7.5%' }}>
              Time: {formatTime(time)}
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
            </>
          )}
          {(sentences.length === 0 || currentSentenceIndex >= sentences.length) && (
            <div>No sentences available</div>
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
          <Button onClick={playSentenceAudio} themeColor={themeColor}>
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
        <Link href="/courses/courseId_1" passHref>
          <Button 
            className={buttonClass}
            themeColor={themeColor}
            style={{ 
              position: 'fixed', 
              bottom: '60px',
              right: '1rem', 
              padding: '0.25rem 0.5rem', 
              fontSize: '0.6rem' 
            }}
          >
            返回上一页
          </Button>
        </Link>
      </Container>
      <span ref={textWidthRef} style={{ visibility: 'hidden', position: 'absolute', fontSize: '2.5rem', fontFamily: selectedFont }}></span>
    </React.Fragment>
  );
}