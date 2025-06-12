// app/word-editor/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

export interface SentenceData {
    id: string;
    sentence: string;
    chinese: string;
}

const WordEditor = () => {
    const router = useRouter();
    const [wordItems, setWordItems] = useState<SentenceData[]>([]);
    const [fileName, setFileName] = useState<string>('');
    const [showOptions, setShowOptions] = useState<number | null>(null);
    const [inputText, setInputText] = useState('');
    const [selectedSentences, setSelectedSentences] = useState('');

    const typingAudioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            typingAudioRef.current = new Audio('/typing.mp3');
        }

        // 从 localStorage 获取数据
        const savedWordItems = localStorage.getItem('sentencesData');
        const savedInputText = localStorage.getItem('inputText');
        const savedSelectedSentences = localStorage.getItem('selectedSentences');

        if (savedWordItems) {
            const parsedData: SentenceData[] = JSON.parse(savedWordItems);
            const processedData = parsedData.map((item, index) => ({
                ...item,
                id: (index + 1).toString(), // 确保 id 是字符串
                sentence: item.sentence.trim(), // 只在初始加载时trim
            }));
            setWordItems(processedData);
        }

        if (savedInputText) {
            setInputText(savedInputText);
        }
        if (savedSelectedSentences) {
            setSelectedSentences(savedSelectedSentences);
        }
    }, []);

    const processSentence = (sentence: string): string => {
        // 步骤1: 分离连在一起的单词
        let processedSentence = sentence.replace(/([a-z])([A-Z])/g, '$1 $2')  // camelCase
                                        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')  // ABCdef
                                        .replace(/([a-zA-Z])(\d)/g, '$1 $2')  // word123
                                        .replace(/(\d)([a-zA-Z])/g, '$1 $2'); // 123word

        // 步骤2: 确保单词之间只有一个空格
        processedSentence = processedSentence.replace(/\s+/g, ' ');

        // 步骤3: 调整标点符号周围的空格
        processedSentence = processedSentence.replace(/\s*([:;,])\s*/g, ' $1 ');

        // 步骤4: 移除句子首尾的空格
        return processedSentence.trim();
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target?.result as string);
                    if (Array.isArray(data)) {
                        setWordItems(data.map((item: any, index: number) => ({
                            id: (index + 1).toString(),
                            sentence: item.sentence.trim(), // 只在初始加载时trim
                            chinese: item.chinese,
                        })));
                        setFileName(file.name);
                    } else {
                        alert("无效的数据格式。请确保文件包含一个词汇对象数组。");
                    }
                } catch (error) {
                    alert("无效的文件格式。请上传一个有效的 JSON 文件。");
                }
            };
            reader.readAsText(file);
        }
    };

    const playTypingSound = () => {
        if (typingAudioRef.current) {
            typingAudioRef.current.currentTime = 0;
            typingAudioRef.current.play().catch(e => console.error("Error playing typing audio:", e));
        }
    };

    const updateWord = (id: number, field: 'sentence' | 'chinese', value: string) => {
        playTypingSound();
        setWordItems(wordItems.map(item => 
            item.id === id.toString() ? { ...item, [field]: value } : item
        ));
        localStorage.setItem('sentencesData', JSON.stringify(wordItems)); // 更新 localStorage
    };

    const deleteWord = (id: number) => {
        const updatedWords = wordItems.filter(item => item.id !== id.toString());
        setWordItems(updatedWords.map((item, index) => ({
            ...item,
            id: (index + 1).toString(),
        })));
        setShowOptions(null);
        localStorage.setItem('sentencesData', JSON.stringify(updatedWords)); // 更新 localStorage
        playTypingSound();
    };

    const copyWord = (id: number) => {
        const wordToCopy = wordItems.find(item => item.id === id.toString());
        if (wordToCopy) {
            const newWordItem: SentenceData = {
                id: (wordItems.length + 1).toString(),
                sentence: wordToCopy.sentence,
                chinese: wordToCopy.chinese,
            };
            const index = wordItems.findIndex(item => item.id === id.toString());
            const updatedWords = [...wordItems];
            updatedWords.splice(index + 1, 0, newWordItem);
            setWordItems(updatedWords.map((item, idx) => ({
                ...item,
                id: (idx + 1).toString(),
            })));
            localStorage.setItem('sentencesData', JSON.stringify(updatedWords)); // 更新 localStorage
        }
        setShowOptions(null);
        playTypingSound();
    };

    const insertWordDown = (id: number) => {
        const newWordItem: SentenceData = {
            id: (wordItems.length + 1).toString(),
            sentence: '',
            chinese: '',
        };

        const updatedWords = [...wordItems];
        const index = wordItems.findIndex(item => item.id === id.toString());
        updatedWords.splice(index + 1, 0, newWordItem);
        setWordItems(updatedWords.map((item, idx) => ({
            ...item,
            id: (idx + 1).toString(),
        })));
        localStorage.setItem('sentencesData', JSON.stringify(updatedWords)); // 更新 localStorage
        setShowOptions(null);
        playTypingSound();
    };

    const insertWordUp = (id: number) => {
        const newWordItem: SentenceData = {
            id: (wordItems.length + 1).toString(),
            sentence: '',
            chinese: '',
        };

        const updatedWords = [...wordItems];
        const index = wordItems.findIndex(item => item.id === id.toString());
        updatedWords.splice(index, 0, newWordItem);
        setWordItems(updatedWords.map((item, idx) => ({
            ...item,
            id: (idx + 1).toString(),
        })));
        localStorage.setItem('sentencesData', JSON.stringify(updatedWords)); // 更新 localStorage
        setShowOptions(null);
        playTypingSound();
    };

    const saveToFile = () => {
        const processedWordItems = wordItems.map(item => ({
            ...item,
            sentence: processSentence(item.sentence)
        }));

        const content = JSON.stringify(processedWordItems, null, 2);
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || 'word_data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const saveToTSFile = () => {
        const processedWordItems = wordItems.map(item => ({
            id: item.id,
            sentence: processSentence(item.sentence),
            chinese: item.chinese,
        }));

        const tsContent = `export interface SentenceData {
    id: string;
    sentence: string;
    chinese: string;
}

export const sentences: SentenceData[] = ${JSON.stringify(processedWordItems, null, 2)};`;
        
        const blob = new Blob([tsContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sentences.ts';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const goBack = () => {
        // Navigate back to vocabulary-editor with preserved state
        const encodedInputText = encodeURIComponent(inputText);
        const encodedSelectedSentences = encodeURIComponent(selectedSentences);
        router.push(`/vocabulary-editor?inputText=${encodedInputText}&selectedSentences=${encodedSelectedSentences}`);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>词汇编辑器</h1>
            <input type="file" accept=".json" onChange={handleFileUpload} />
            <span>{fileName}</span>
            <div className={styles.countDisplay}>
                总共有 {wordItems.length} 组
            </div>
            <ul className={styles.wordList}>
                {wordItems.map((item) => (
                    <li key={item.id} className={styles.wordItem}>
                        <div className={styles.wordContainer}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="text"
                                    className={styles.editInput}
                                    value={item.sentence}
                                    onChange={(e) => updateWord(Number(item.id), 'sentence', e.target.value)}
                                    placeholder=""
                                    onFocus={() => setShowOptions(Number(item.id))}
                                />
                                <input
                                    type="text"
                                    className={styles.editInput}
                                    value={item.chinese}
                                    onChange={(e) => updateWord(Number(item.id), 'chinese', e.target.value)}
                                    placeholder=""
                                    onFocus={() => setShowOptions(Number(item.id))}
                                />
                            </div>
                            {showOptions === Number(item.id) && (
                                <div className={styles.optionsContainer}>
                                    <hr className={styles.separator} />
                                    <div className={styles.optionsRight}>
                                        <button onClick={() => { insertWordUp(Number(item.id)); }}>向上插入</button>
                                        <button onClick={() => { insertWordDown(Number(item.id)); }}>向下插入</button>
                                        <button onClick={() => { copyWord(Number(item.id)); }}>复制</button>
                                        <button onClick={() => { deleteWord(Number(item.id)); }}>删除</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={saveToFile} className={styles.saveButton}>保存并导出 JSON 文件</button>
            <button onClick={saveToTSFile} className={styles.saveButton}>导出 TS 文件</button>
            <button onClick={goBack} className={styles.backLink}>返回上一页</button>
            <button onClick={() => router.push('/')} className={styles.homeLink}>返回首页</button>
        </div>
    );
};

export default WordEditor;
