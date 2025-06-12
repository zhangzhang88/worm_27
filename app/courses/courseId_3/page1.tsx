"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
}

const lessonDescriptions = [
  "已更新",  // Lesson 1
  "已更新",  // Lesson 2
  "已更新", 
  "已更新",
  "已更新", 
  "已更新",  // Lesson 3
  // ... 其他课程描述可以保留在这里，但不会显示
];

// 设置要显示的课程数量
const visibleLessonsCount = 6;

const LessonPreview: React.FC<{ lessonIndex: number }> = ({ lessonIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sentenceData, setSentenceData] = useState<SentenceData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadSentenceData = useCallback(async () => {
    if (!isOpen) return;

    try {
      const importedModule = await import(`@/app/courses/courseId_3/lessons/${lessonIndex + 1}/wordDataLesson${lessonIndex + 1}.ts`);
      if (importedModule && importedModule.sentences) {
        setSentenceData(importedModule.sentences);
      } else {
        throw new Error('No sentences data found in the module');
      }
    } catch (error) {
      console.error(`Error loading data for lesson ${lessonIndex + 1}:`, error);
      setError(`Failed to load preview for Lesson ${lessonIndex + 1}. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setSentenceData([]);
    }
  }, [isOpen, lessonIndex]);

  useEffect(() => {
    loadSentenceData();
  }, [loadSentenceData]);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="absolute top-2 right-2 bg-slate-700 text-white px-2 py-1 rounded hover:bg-slate-700 transition duration-300 text-sm"
      >
        {isOpen ? '隐藏' : '预览'}
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 bg-slate-700 p-4 rounded-lg shadow-lg z-10 w-full max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-200 font-semibold">
              Total: {sentenceData.length}
            </span>
            <h4 className="text-purple-200 font-semibold text-center">Lesson Preview:</h4>
          </div>
          {error ? (
            <p className="text-red-400 text-center">{error}</p>
          ) : sentenceData.length > 0 ? (
            <div className="grid grid-cols-[2.5rem_1fr_1fr] border-t border-l border-purple-400">
              <div className="p-2 font-semibold border-b border-r border-purple-400 text-purple-200 text-center">No.</div>
              <div className="p-2 font-semibold border-b border-r border-purple-400 text-purple-200 text-center">English</div>
              <div className="p-2 font-semibold border-b border-r border-purple-400 text-purple-200 text-center">中文</div>
              {sentenceData.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="p-2 border-b border-r border-purple-400 text-purple-200 text-center">
                    {index + 1}
                  </div>
                  <div className="p-2 border-b border-r border-purple-400 text-purple-100 text-center">
                    {item.sentence}
                  </div>
                  <div className="p-2 border-b border-r border-purple-400 text-purple-300 text-center">
                    {item.chinese}
                  </div>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className="text-purple-300 text-center">Loading preview...</p>
          )}
        </div>
      )}
    </div>
  );
};

const CoursePage: React.FC = () => {
  const courseId = 'courseId_3';

  return (
    <div style={{ backgroundColor: '#05051d' }} className="min-h-screen text-purple-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-purple-200">
          课程系列 {courseId}
        </h1>

        <h2 className="text-3xl font-bold text-center mb-6 text-purple-200">
         （正在更新中......）
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessonDescriptions.slice(0, visibleLessonsCount).map((description, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-4 shadow-md relative">
              <LessonPreview lessonIndex={index} />
              <h3 className="text-xl font-semibold text-purple-200">{`Lesson ${index + 1}`}</h3>
              <p className="text-purple-200">{description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-yellow-200"></span>
                <Link 
                  href={`/courses/${courseId}/lessons/${index + 1}`}
                  className="text-purple-200 hover:underline"
                >
                  开始学习
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-center text-purple-400 pb-8">
        <p></p>
      </footer>
      <Link href="/" passHref>
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-600 transition duration-300 cursor-pointer">
          返回首页
        </div>
      </Link>      
    </div>
  );
};

export default CoursePage;