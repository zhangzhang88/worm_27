'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
}

export default function VocabularyEditor() {
  const [inputText, setInputText] = useState('');
  const [formattedSentences, setFormattedSentences] = useState<string[]>([]);
  const [selectedSentences, setSelectedSentences] = useState('');
  const [breakdowns, setBreakdowns] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [sentencesData, setSentencesData] = useState<SentenceData[]>([]);
  const [targetWords, setTargetWords] = useState('');
  const [aiPrompt, setAiPrompt] = useState(`1.我会给你一组目标单词。 2.用目标单词写一篇简单的英文短文。3.短文内需要包含所有目标单词。 4.每个句子只能出现一个目标单词。5.重点：每个目标单词最少在短文里出现7次。 6.句子中非目标单词难度不能超过小学程度.重点：是一篇短文，单词不超过200个，不是分开每个单词写短文。和不需要翻译成中文。`);

  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/typing.mp3');

    // 从 localStorage 获取数据
    const savedInputText = localStorage.getItem('inputText');
    const savedSelectedSentences = localStorage.getItem('selectedSentences');

    if (savedInputText) {
      setInputText(savedInputText);
    }
    if (savedSelectedSentences) {
      setSelectedSentences(savedSelectedSentences);
    }

    const savedSentencesData = localStorage.getItem('sentencesData');
    if (savedSentencesData) {
      setSentencesData(JSON.parse(savedSentencesData));
    }
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.error('Error playing sound:', e));
    }
  };

  useEffect(() => {
    document.addEventListener('input', playSound);
    return () => document.removeEventListener('input', playSound);
  }, []);

  const generateContent = async () => {
    setIsLoading(true);
    setLoadingMessage('AI正在生成内容，请耐心等待');
    playSound();

    const apiKey = 'sk-86a453369710412baa85effed4206263';
    const apiUrl = 'https://api.deepseek.com/v1/chat/completions';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: aiPrompt },
            { role: "user", content: `Target words: ${targetWords}` }
          ]
        })
      });

      const data = await response.json();
      const generatedContent = data.choices[0].message.content;
      setInputText(generatedContent);
    } catch (error) {
      console.error('Error generating content:', error);
      alert('An error occurred while generating content. Please try again.');
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  };

  const formatText = () => {
    console.log('Formatting text:', inputText);
    
    // Split the input text by sentences
    const sentences = inputText.match(/[^.!?]+[.!?]+/g) || [];
    
    const formatted = sentences.map(sentence => formatSentence(sentence.trim()));
    
    console.log('Formatted sentences:', formatted);
    setFormattedSentences(formatted);
  };

  const formatSentence = (sentence: string): string => {
    let formattedSentence = sentence.trim();
    
    // Remove surrounding quotes
    formattedSentence = formattedSentence.replace(/^["']|["']$/g, '');

    // Replace non-English punctuation with English punctuation
    const punctuationMap = new Map([
      ['\u3002', '.'], ['\uFF0C', ','], ['\u3001', ','], ['\uFF1B', ';'], 
      ['\uFF1A', ':'], ['\uFF1F', '?'], ['\uFF01', '!'],
      ['\u201C', '"'], ['\u201D', '"'], ['\u2018', "'"], ['\u2019', "'"], 
      ['\uFF08', '('], ['\uFF09', ')'], ['\u3010', '['], ['\u3011', ']'],
      ['\u300A', '<'], ['\u300B', '>'], ['\u2026', '...'], ['\u2014', '-']
    ]);
    
    for (const [nonEnglish, english] of punctuationMap) {
      formattedSentence = formattedSentence.replace(new RegExp(nonEnglish, 'g'), english);
    }

    // Adjust spacing around punctuation
    formattedSentence = formattedSentence.replace(/\s*([:;,])\s*/g, ' $1 ');
    formattedSentence = formattedSentence.replace(/\s+/g, ' ');

    // Remove the period at the end of the sentence
    formattedSentence = formattedSentence.replace(/[.!?]+$/, '');

    return formattedSentence.trim();
  };

  const addToSelectedSentences = (sentence: string) => {
    setSelectedSentences(prev => {
      const sentences = new Set(prev.split('\n'));
      if (!sentences.has(sentence)) {
        sentences.add(sentence);
        return Array.from(sentences).join('\n');
      }
      return prev;
    });
    playSound();
  };

  const breakdownAllSentences = async () => {
    playSound();
    setIsLoading(true);
    setLoadingMessage('AI正在拆解，请您耐心等待');
    const sentences = selectedSentences.split('\n').filter(s => s.trim());
    const newBreakdowns = [];
    const newSentencesData: SentenceData[] = [];
    let nextId = 1;

    try {
      for (let sentence of sentences) {
        const breakdown = await breakdownSentence(sentence.trim());
        newBreakdowns.push(breakdown);

        const lines = breakdown.split('\n');
        lines.forEach(line => {
          const match = line.match(/^(.*) - (\/.*\/) - (.*)$/);
          if (match) {
            const [_, word, pronunciation, chinese_definition] = match;
            const cleanWord = word.trim()
              .replace(/^\d+\.\s*/, '')
              .replace(/^"|"$/g, '')
              .replace(/^\*\*|\*\*$/g, '')
              .replace(/^-\s*/, '')
              .replace(/\s*([:;,])\s*/g, (match, p1) => ` ${p1} `)
              .trim();
            const cleanChinese = chinese_definition.trim().replace(/^"|"$/g, '');
            
            newSentencesData.push({
              id: nextId.toString(),
              sentence: cleanWord,
              chinese: cleanChinese
            });
            nextId++;
          }
        });
      }

      setBreakdowns(newBreakdowns);
      setSentencesData(newSentencesData);

      // 存储数据到 localStorage
      localStorage.setItem('sentencesData', JSON.stringify(newSentencesData));
      localStorage.setItem('inputText', inputText);
      localStorage.setItem('selectedSentences', selectedSentences);

      // 自动下载生成的句子数据文件
      downloadSentencesData(newSentencesData);

      // 导航到 word-editor 页面
      router.push('/word-editor');

    } catch (error) {
      console.error('Error breaking down sentences:', error);
      alert('An error occurred while breaking down sentences. Please try again.');
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  };

  const downloadSentencesData = (data: SentenceData[]) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sentences_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const breakdownSentence = async (sentence: string): Promise<string> => {
    const apiKey = 'sk-86a453369710412baa85effed4206263';
    const apiUrl = 'https://api.deepseek.com/v1/chat/completions';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "You are a helpful assistant that breaks down English sentences into words and phrases, providing phonetic transcriptions and Chinese translations." },
          { role: "user", content: `Please break down this sentence into as many phrases and smaller clauses as possible: "${sentence}". Provide phonetic transcriptions and Chinese translations for each part, formatted as "English - /phonetic/ - Chinese". After the breakdown, provide the full sentence breakdown in the same format.` }
        ]
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>英文句子拆解工具</h1>
      
      <div className={styles.stepContainer}>
        <h2 className={styles.stepTitle}>内容生成 <span className={styles.subtitle}>（AI 提示词如下，可以自定义修改）</span></h2>
        <textarea
          className={styles.textarea}
          value={aiPrompt}
          onChange={(e) => setAiPrompt(e.target.value)}
          placeholder="请输入AI提示词..."
          disabled={isLoading}
        />
        <textarea
          className={styles.textarea}
          value={targetWords}
          onChange={(e) => setTargetWords(e.target.value)}
          placeholder={`输入要学习的单词，建议不超过5个，一行一个，例如：
word
how
google
results`}
          disabled={isLoading}
        />
        <button className={styles.button} onClick={generateContent} disabled={isLoading}>生成内容</button>
      </div>

      <div className={styles.stepContainer}>
        <h2 className={styles.stepTitle}>步骤一：输入英文文本</h2>
        <textarea
          className={styles.textarea}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="请输入英文文本..."
          disabled={isLoading}
        />
        <button className={styles.button} onClick={formatText} disabled={isLoading}>格式化</button>
      </div>

      <div className={styles.stepContainer}>
        <h2 className={styles.stepTitle}>步骤二：选择句子</h2>
        <div className={styles.sentencesContainer}>
          {formattedSentences.map((sentence, index) => (
            <div key={index} className={styles.sentence}>
              <textarea
                className={styles.sentenceTextarea}
                value={sentence}
                onChange={(e) => {
                  const newSentences = [...formattedSentences];
                  newSentences[index] = e.target.value;
                  setFormattedSentences(newSentences);
                }}
                disabled={isLoading}
              />
              <button onClick={() => addToSelectedSentences(sentence)} disabled={isLoading}>添加</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.stepContainer}>
        <h2 className={styles.stepTitle}>步骤三：确认并拆解句子</h2>
        <textarea
          className={styles.textarea}
          value={selectedSentences}
          onChange={(e) => setSelectedSentences(e.target.value)}
          placeholder="添加的句子将显示在这里..."
          disabled={isLoading}
        />
        <button className={styles.button} onClick={breakdownAllSentences} disabled={isLoading}>拆解所有句子</button>
      </div>

      {isLoading && <div className={styles.loadingOverlay}>{loadingMessage}</div>}
      
      <div className={styles.buttonContainerRight}>
        <button className={styles.button} onClick={() => router.push('/')} disabled={isLoading}>返回首页</button>
      </div>
    </div>
  );
}