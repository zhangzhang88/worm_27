// app/editor/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

interface WordItem {
    id: number;
    sentence: string;
    chinese: string;
}

const WordEditor = () => {
    const router = useRouter();
    const [wordItems, setWordItems] = useState<WordItem[]>([]);
    const [fileName, setFileName] = useState<string>('');
    const [showOptions, setShowOptions] = useState<number | null>(null);
    const typingAudioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            typingAudioRef.current = new Audio('/typing.mp3');
        }

        const urlParams = new URLSearchParams(window.location.search);
        const data = urlParams.get('data');

        if (data) {
            try {
                const parsedData: WordItem[] = JSON.parse(decodeURIComponent(data));
                setWordItems(parsedData.map((item, index) => ({ ...item, id: index + 1, sentence: item.sentence.trim() })));
            } catch (error) {
                console.error("解析数据时出错:", error);
                alert("无效的数据格式。请检查传递的数据。");
            }
        }
    }, []);

    const processSentence = (sentence: string): string => {
        // Remove extra spaces between words, adjust spacing around punctuation, and trim
        return sentence.replace(/\s+/g, ' ')
                       .replace(/\s*([:;,])\s*/g, ' $1 ')
                       .trim();
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
                            id: index + 1,
                            sentence: item.sentence.trim(),
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
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const deleteWord = (id: number) => {
        const updatedWords = wordItems.filter(item => item.id !== id);
        setWordItems(updatedWords.map((item, index) => ({
            ...item,
            id: index + 1,
        })));
        setShowOptions(null);
        playTypingSound();
    };

    const copyWord = (id: number) => {
        const wordToCopy = wordItems.find(item => item.id === id);
        if (wordToCopy) {
            const newWordItem: WordItem = {
                id: wordItems.length + 1,
                sentence: wordToCopy.sentence,
                chinese: wordToCopy.chinese,
            };
            const index = wordItems.findIndex(item => item.id === id);
            const updatedWords = [...wordItems];
            updatedWords.splice(index + 1, 0, newWordItem);
            setWordItems(updatedWords.map((item, idx) => ({
                ...item,
                id: idx + 1,
            })));
        }
        setShowOptions(null);
        playTypingSound();
    };

    const insertWordDown = (id: number) => {
        const newWordItem: WordItem = {
            id: wordItems.length + 1,
            sentence: '',
            chinese: '',
        };

        const updatedWords = [...wordItems];
        const index = wordItems.findIndex(item => item.id === id);
        updatedWords.splice(index + 1, 0, newWordItem);
        setWordItems(updatedWords.map((item, idx) => ({
            ...item,
            id: idx + 1,
        })));
        setShowOptions(null);
        playTypingSound();
    };

    const insertWordUp = (id: number) => {
        const newWordItem: WordItem = {
            id: wordItems.length + 1,
            sentence: '',
            chinese: '',
        };

        const updatedWords = [...wordItems];
        const index = wordItems.findIndex(item => item.id === id);
        updatedWords.splice(index, 0, newWordItem);
        setWordItems(updatedWords.map((item, idx) => ({
            ...item,
            id: idx + 1,
        })));
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
            id: String(item.id),
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
                                    onChange={(e) => updateWord(item.id, 'sentence', e.target.value)}
                                    onFocus={() => setShowOptions(item.id)}
                                />
                                <input
                                    type="text"
                                    className={styles.editInput}
                                    value={item.chinese}
                                    onChange={(e) => updateWord(item.id, 'chinese', e.target.value)}
                                    onFocus={() => setShowOptions(item.id)}
                                />
                            </div>
                            <div className={styles.optionsContainer}>
                                <hr className={styles.separator} />
                                {showOptions === item.id && (
                                    <div className={styles.optionsRight}>
                                        <button onClick={() => { insertWordUp(item.id); }}>向上插入</button>
                                        <button onClick={() => { insertWordDown(item.id); }}>向下插入</button>
                                        <button onClick={() => { copyWord(item.id); }}>复制</button>
                                        <button onClick={() => { deleteWord(item.id); }}>删除</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={saveToFile} className={styles.saveButton}>保存并导出 JSON 文件</button>
            <button onClick={saveToTSFile} className={styles.saveButton}>导出 TS 文件</button>
            <button onClick={() => router.push('/')} className={styles.homeLink}>返回首页</button>
        </div>
    );
};

export default WordEditor;